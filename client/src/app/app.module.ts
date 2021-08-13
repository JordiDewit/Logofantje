import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { MateriaalListComponent } from './t-materiaal/materiaal-list/materiaal-list.component'
import { MateriaalComponent } from './t-materiaal/materiaal/materiaal.component';
import { MateriaalFilterPipe } from './t-materiaal/materiaal-filter.pipe';
import { AddMateriaalComponent } from './t-materiaal/add-materiaal/add-materiaal.component';
import { AboutComponent } from './yna/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './t-materiaal/upload/upload.component';
import { UploadPdfComponent } from './t-materiaal/upload-pdf/upload-pdf.component';
import { MateriaalEditComponent } from './t-materiaal/materiaal-edit/materiaal-edit.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { httpInterceptorProviders } from './interceptors';
import { FavorietListComponent } from './favoriet/favoriet-list/favoriet-list.component';
import { FavoComponent } from './favoriet/favo/favo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    routingComponents,
    MateriaalListComponent,
    MateriaalComponent,
    MateriaalFilterPipe,
    AddMateriaalComponent,
    UploadComponent,
    UploadPdfComponent,
    MateriaalEditComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    FavorietListComponent,
    FavoComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
