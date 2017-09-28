/**
 * Created by Owner on 9/23/2017.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';

import {AddBookComponent} from "./add-book/add-book.component";
import {ViewBookInfoComponent} from "./view-book-info/view-book-info.component";
import {AuthGuard} from "./guard/auth.guard";


const ROUTES: Routes = [
  {path:'home', component:HomeComponent, canActivate:[AuthGuard]},
  //{path:'', redirectTo:'home', pathMatch: "full"},
  {path:'addBook',component:AddBookComponent, canActivate:[AuthGuard]},
  {path:'viewBook/:id',component:ViewBookInfoComponent, canActivate:[AuthGuard]}
]

//export const appRoutingProviders: any[] = [];
export const MyRoutes = RouterModule.forRoot(ROUTES);
