import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MateriaalListComponent } from './t-materiaal/materiaal-list/materiaal-list.component';
import { MateriaalComponent } from './t-materiaal/materiaal/materiaal.component';
import { MateriaalFilterPipe } from './t-materiaal/materiaal-filter.pipe';
import { AddMateriaalComponent } from './t-materiaal/add-materiaal/add-materiaal.component';
import { AboutComponent } from './yna/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    routingComponents,
    MateriaalListComponent,
    MateriaalComponent,
    MateriaalFilterPipe,
    AddMateriaalComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
