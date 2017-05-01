import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {Product1Component} from './product1/product1.component';
import {ProductService} from './shared/product.service';
import {LoggerService} from './shared/logger.service';
import {Product2Component} from './product2/product2.component';
import {Anothorproduct0Service} from './shared/anothorproduct0.service';

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{
    provide: ProductService,
    useFactory: (logger: LoggerService, isDev) => {
      if (isDev) {
        return new ProductService(logger);
      } else {
        return new Anothorproduct0Service(logger);

      }
    }, deps: [LoggerService]
  }, LoggerService,
    {
      provide: 'IS_DEV_ENV', useValue: false
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
