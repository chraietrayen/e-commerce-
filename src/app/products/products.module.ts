import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductListComponent,  
  ]
})
export class ProductsModule {}
