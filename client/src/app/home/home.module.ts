import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PoMenuModule, PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    PoModule,
    RouterModule,
    PoMenuModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
