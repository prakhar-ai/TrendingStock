import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { Page1Component } from './page1/page1.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagCloudModule } from 'angular-tag-cloud-module';
import {AgWordCloudModule, AgWordCloudData} from 'angular4-word-cloud';


@NgModule({
  declarations: [
    AppComponent,
    StockDetailsComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TagCloudModule,
    AgWordCloudModule.forRoot(),
    RouterModule.forRoot([
      { path: 'page1', component: Page1Component },
      { path: 'stock_details', component: StockDetailsComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
