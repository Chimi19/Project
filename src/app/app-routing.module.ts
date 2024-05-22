import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { ItemsComponent } from './pages/items/items.component';
import { Product1Component } from './pages/product1/product1.component';
import { Product2Component } from './pages/product2/product2.component';
import { Product3Component } from './pages/product3/product3.component';
import { Product4Component } from './pages/product4/product4.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path:'about', component:AboutComponent},
{path: 'c', component:CartComponent},
{path:'d', component:ItemsComponent},
{path:'o', component:Product1Component},
{path:'1', component:Product2Component},
{path:'2', component:Product3Component},
{path:'3', component:Product4Component},
{path:'form', component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
