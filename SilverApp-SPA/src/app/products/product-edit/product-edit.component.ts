import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  title = 'Tour of Heroes';
  constructor(private alertify: AlertifyService, private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.loadProduct();
  }

  // members /4
   loadProduct() {
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe((product: Product) => {
      this.product = product;
      console.log(this.product.urlImage);

    }, error => {
      this.alertify.error(error);
    });
  }
}
