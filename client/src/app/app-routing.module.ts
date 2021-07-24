import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MateriaalListComponent } from './t-materiaal/materiaal-list/materiaal-list.component';

const routes: Routes = [
{ path:"home", component: HomeComponent},
{ path:"tmateriaal", component: MateriaalListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent]
