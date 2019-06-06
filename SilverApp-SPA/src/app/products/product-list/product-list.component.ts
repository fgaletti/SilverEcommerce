import { Component, OnInit } from '@angular/core';
import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/_models/product';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {

  images = [1, 2, 3].map(() => 'https://picsum.photos/900/500?random&t=${Math.random()}');

  images2 = ['../../../assets/couch1.jpg', '../../../assets/banner_phones.jpg', '../../../assets/deco1.jpg'];

   listProducts: Product[];
   currentRate = 8;
  constructor(private alertify: AlertifyService, private productService: ProductService,  private config: NgbRatingConfig) { 
    config.max = 5;
    // config.readonly = true;
  }

  ngOnInit() {
    this.getProductList();
  }

  getProductList () {
    this.productService.getProductList().subscribe((products: Product[]) => {
      this.listProducts = products;
    }, error => {
      this.alertify.error(error);
    }
    );
  }

}
