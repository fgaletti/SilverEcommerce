import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, FormControl, Validators  } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})


export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;
  product: Product;



  constructor(private alertify: AlertifyService,
    private fb: FormBuilder , private productService: ProductService,  private router: Router) { }

  ngOnInit() {
    this.createProductForm();
  }

  createProductForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern('^-?[0-9]+(.[0-9]+)?$')]],
      sku: ['', Validators.required],
      isActive: [true],
      avatar: []
    });
  }

  createProduct() {
    this.product = Object.assign({}, this.productForm.value) ; // pass the values
    this.product.shortDescription = this.product.description;
    this.product.isActive = this.productForm.get('isActive').value === true ? 1 : 0;

    this.productService.createProduct(this.product).subscribe (
       () => {
           this.alertify.success('new product added');
    }, error => {
      this.alertify.error(error);
    }, () => {
        this.router.navigate(['/product-list']);
    });


    this.alertify.message(this.product.name ) ;
  }

  onlyDecimalNumberKey(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
          return false;
       }
    return true;
  }


  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.productForm.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result
        });
      };
    }
  }

}
