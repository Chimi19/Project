import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './website/nav/nav.component';
import { FooterComponent } from './website/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { ItemsComponent } from './pages/items/items.component';
import { Product1Component } from './pages/product1/product1.component';
import { Product2Component } from './pages/product2/product2.component';
import { Product3Component } from './pages/product3/product3.component';
import { Product4Component } from './pages/product4/product4.component';
import { FormComponent } from './pages/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CartComponent,
    ItemsComponent,
    Product1Component,
    Product2Component,
    Product3Component,
    Product4Component,
    FormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
