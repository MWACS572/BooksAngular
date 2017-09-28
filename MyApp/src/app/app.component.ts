// import {Component, OnInit} from '@angular/core';
// //import {DbService} from "./service/data.service";
// import {Subscription} from "rxjs/Subscription";
// import 'rxjs/add/operator/map';
// import {FormBuilder, FormGroup, Validators} from "@angular/forms";
//
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent{
//   // ngOnInit(): void {
//   //   this.subscription = this.dbService.getBooks().map(data=>data.json()).subscribe(data=>this.books=data);
//   //
//   // }
//
//   books;
//   //subscription:Subscription;
//   constructor(private fb:FormBuilder){
//     //this.subscription = this.dbService.getBooks().map(data=>data.json()).subscribe(data=>this.books=data);
//     // this.myForm=fb.group({'title':[this.book.title,Validators.required],
//     //   'author':[this.book.author,Validators.required],'ISBN':[this.book.ISBN,Validators.required]});
//
//   }
//   title = 'app';
//   ngOnDestroy(){
//     //this.subscription.unsubscribe();
//   }
//
//   //myForm:FormGroup;
//   //dbService:DbService;
//   //book = {title:'title ...',author:'author ...',ISBN:'ISBN ...'};
//   // constructor(fb:FormBuilder, private service: DbService) {
//   //   this.myForm=fb.group({'title':[this.book.title,Validators.required],
//   //     'author':[this.book.author,Validators.required],'ISBN':[this.book.ISBN,Validators.required]});
//   //
//   //   this.dbService= service;
//   //   // console.log(service.getUser());
//   // }
// }
import { Component } from '@angular/core';
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentCounterValue:number = 0;
  pro;
  showNewValue(value:number){
    this.componentCounterValue = value;
  }
  constructor(public auth:AuthService) {
    auth.handleAuthentication();
    this.pro = auth.getPro();
    console.log("this pro meail: "+this.pro.email)
  }
}
