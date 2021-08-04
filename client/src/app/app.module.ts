import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MateriaalListComponent } from './t-materiaal/materiaal-list/materiaal-list.component'
import { MateriaalComponent } from './t-materiaal/materiaal/materiaal.component';
import { MateriaalFilterPipe } from './t-materiaal/materiaal-filter.pipe';
import { AddMateriaalComponent } from './t-materiaal/add-materiaal/add-materiaal.component';
import { AboutComponent } from './yna/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './t-materiaal/upload/upload.component';
import { UploadPdfComponent } from './t-materiaal/upload-pdf/upload-pdf.component';
import { MateriaalEditComponent } from './t-materiaal/materiaal-edit/materiaal-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    routingComponents,
    MateriaalListComponent,
    MateriaalComponent,
    MateriaalFilterPipe,
    AddMateriaalComponent,
    UploadComponent,
    UploadPdfComponent,
    MateriaalEditComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
