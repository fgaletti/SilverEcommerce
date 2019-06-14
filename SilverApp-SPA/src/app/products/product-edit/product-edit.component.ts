import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Product } from 'src/app/_models/product';
import { Productimage } from 'src/app/_models/productimage';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  title = 'Tour of Heroes';
  imageLoaded = false; // flag to indicate if the photo has been uploaded into the server

  productImages: Productimage[] = [];
  productImageUrl = '';

   // add picture
   baseUrl = environment.apiUrl;
   uploader: FileUploader;
   @ViewChild('fileInput') fileInput: any;

  constructor(private alertify: AlertifyService, private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.loadProduct();
    this.loadProductImages();
    this.initializeUploader();
  }

  loadProductImages() {
    let image = new Productimage();
    image.urlImage = '../../../assets/couch1.jpg';
    this.productImages.push(image);

     image = new Productimage();
    image.urlImage = '../../../assets/banner_phones.jpg';
    this.productImages.push(image);

    image = new Productimage();
    image.urlImage = '../../../assets/banner_phones.jpg';
    this.productImages.push(image);

    // = ['../../../assets/couch1.jpg', '../../../assets/banner_phones.jpg', '../../../assets/deco1.jpg'];
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

  deleteImage(id: number) {
    // this.productImages.pop()
    // delete image added to the product
    this.imageLoaded = false;
    this.productImageUrl = '';
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'products/AddImageProduct',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        // const res: Photo = JSON.parse(response);
        // const res = JSON.parse(response);
        console.log('response');
        this.imageLoaded = true;
        this.productImageUrl = 'http://' + response;
        this.fileInput.nativeElement.value = ''; // clean the fileuploa s that we can add the same file again
        console.log(response);
      }
    };
}

  onFileSelected (event) {
    this.uploader.uploadAll();
    console.log('uploadAll');

  }
}
