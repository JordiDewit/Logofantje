import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavorietListComponent } from './favoriet/favoriet-list/favoriet-list.component';
import { HomeComponent } from './home/home.component';
import { MateriaalEditComponent } from './t-materiaal/materiaal-edit/materiaal-edit.component';
import { MateriaalListComponent } from './t-materiaal/materiaal-list/materiaal-list.component';
import { MateriaalResolver } from './t-materiaal/MateriaalResolver';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AboutComponent } from './yna/about/about.component';

const routes: Routes = [
{ path:"", component: HomeComponent, pathMatch: 'full'},
{ path:"tmateriaal", component: MateriaalListComponent},
{ path:"tmateriaal/edit/:id", component: MateriaalEditComponent, resolve: {mat: MateriaalResolver}},
{ path:"yna", component: AboutComponent},
{ path: "login", component: LoginComponent},
{ path: "register", component: RegisterComponent},
{ path: "favorietenlijst", component: FavorietListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent]
