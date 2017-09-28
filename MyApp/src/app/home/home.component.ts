import { Component, OnInit } from '@angular/core';
import {DbService} from "../db/db.service";
import "rxjs/add/operator/filter";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{//} implements OnInit {
  message='';
  data;
  books;//=service.getAllBooks().subscribe(res=>this.books=res.json());;
  constructor(private service:DbService) {
    service.getAllBooks().map(res=>res.json()).subscribe(res=>{this.books=res});
  }
  // ngOnInit(){
  //   this.service.getAllBooks().subscribe(res=>this.books=res.json());
  // }
  // ngOnChange() {
  //   this.service.getAllBooks().subscribe(res=>this.books=res.json());
  // }

  searchText='';
  refreshPage(e){
    console.log("the following is .."+e)
    this.searchText=e;
    this.service.getAllBooks().map(res=>res.json()).map(objects=>{return objects.filter(obj=>{
      var re = obj.title+"";
      var val= e+"";
      return re.includes(val);

    })})
      .subscribe(results=>{this.books=results;
      if (results.length==0){this.nothingFound=true;}});
    //this.service.getAllBooks().subscribe(res=>{this.books=res.json();this.books=this.books.filter(obj=>obj.tilte.includes(e.trim()).toArray())});
  }

  nothingFound:boolean;
}
