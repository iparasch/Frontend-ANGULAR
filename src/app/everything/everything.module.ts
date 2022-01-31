import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AllComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EverythingModule { }
