import { Injectable } from '@angular/core';
import {Product, ProductService} from './product.service';

@Injectable()
export class Anothorproduct0Service implements ProductService{
  getProduct(): Product {
    return new Product(1, 'sumsung7', 4899,'三星');
  }

  constructor() { }

}
