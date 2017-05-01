import {Injectable} from '@angular/core';
import {Product, ProductService} from './product.service';
import {LoggerService} from "./logger.service";

@Injectable()
export class Anothorproduct0Service implements ProductService {
  constructor(public logger: LoggerService) {

  }


  getProduct(): Product {
    return new Product(1, 'sumsung7', 4899, '三星');
  }


}
