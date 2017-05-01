import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {Anothorproduct0Service} from "../shared/anothorproduct0.service";

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  providers: [{
    provide: ProductService, useClass: Anothorproduct0Service
  }]
})
export class Product2Component implements OnInit {
  product: Product;

  constructor(private prductService:  ProductService) {
  }

  ngOnInit() {
    this.product = this.prductService.getProduct();
  }
}
