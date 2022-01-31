import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomStyleDirective } from './custom-style.directive';
import { ReversePipe } from './reverse.pipe';
import { AllComponent } from './everything/all/all.component';
import { ContactComponent } from './everything/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookFormComponent,
    AllComponent,
    ContactComponent,
    CustomStyleDirective,
    ReversePipe
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
