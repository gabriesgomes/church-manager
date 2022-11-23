import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { PoButtonModule, PoFieldModule, PoModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    FormsModule,
    PoModule,
    ReactiveFormsModule,
    PoFieldModule,
    PoButtonModule
  ],
  exports: [ LoginComponent ]
})
export class LoginModule { }
