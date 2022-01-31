import { Injectable } from '@angular/core';
import { Book } from './book.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  formData: Book = new Book();
  list : Book[];
  readonly baseURL = 'http://localhost:44316/api/Book'

  postBook(){
    return this.http.post(this.baseURL, this.formData)
  }

  putBook(){
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData)
  }

  deleteBook(idd:number){
    return this.http.delete(`${this.baseURL}/${idd}`)
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Book[]);
  }
}
