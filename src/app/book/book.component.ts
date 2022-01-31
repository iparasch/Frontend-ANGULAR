import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from '../shared/book.model';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styles: [
  ]
})
export class BookComponent implements OnInit {

  constructor(public service: BookService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: Book)
  {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(idd: number){
    if(confirm('Are you sure you want to delete this record?'))
    {
      this.service.deleteBook(idd)
    .subscribe(
      res => {
        this.service.refreshList();
        this.toastr.error("Deleted successfully", "Book Register");
      },
      err => {console.log(err)}
    )
    }
  }

}
