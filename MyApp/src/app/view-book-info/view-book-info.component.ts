import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DbService} from "../db/db.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import "rxjs/add/operator/map";
import {AuthService} from "../auth/auth.service";


@Component({
  selector: 'view-book-info',
  templateUrl: './view-book-info.component.html',
  styleUrls: ['./view-book-info.component.css','./vendor/bootstrap/css/bootstrap.min.css'
,'./css/blog-post.css']
})
export class ViewBookInfoComponent implements OnInit {
  myForm:FormGroup;
  email:string;
  id;
  emailNol = "nolawew103@gmail.com"
  book:any={};
  // constructor(fb:FormBuilder, private service: DbService) {
  //   this.myForm=fb.group({'title':[this.book.title,Validators.required],
  //     'author':[this.book.author,Validators.required],'ISBN':[this.book.ISBN,Validators.required]});
  //
  //   this.dbService= service;
  //   // console.log(service.getUser());
  // }
  constructor(fb:FormBuilder, private route:ActivatedRoute, private service:DbService, private auth:AuthService) {
    this.myForm=fb.group({
      'reviewText':['',Validators.required]
          });
    route.params.subscribe(params=>{this.id=params['id']});
    service.getBookById(this.id).subscribe(res=>{this.book=res.json();console.log(this.book.reviews[0].email)});
    //console.log(this.book.reviews[0].email)
  }
  onSubmit(){
    //console.log(this.myForm.value);
    let input ={"email": this.auth.getPro().email, "bookId":this.book._id, "reviewText": this.myForm.controls['reviewText'].value,"reviewId":this.book.reviews.length+1};


    //this.service.getBookById(this.book._id).map(data=>data.json()).subscribe(data=>{this.counter = data.reviews.length;
    // console.log(this.counter);

    //});

    this.service.addBookReview(input).map(data=>data.json()).subscribe(data=>this.book=data);
    //this.service.getBookById(this.id).subscribe(res=>this.book=res.json());

    this.myForm.controls['reviewText'].setValue('');
  }


  ngOnInit() {
  }

}
