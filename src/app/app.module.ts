import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app.component';
import { HomeComponent } from './component/home/home.component';

import { HelloComponent } from './component/hello/hello.component';
import { ImageDirective } from './pipes/imageLoader/imageLoader.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import {MainServiceService} from './service/main/main-service.service';
import { PagerService } from './service/pagination/pager.service';
import { ScrollerComponent } from './component/scroller/scroller.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ImageDirective,
    FilterPipe,
    ScrollerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,HttpClientModule,
    FormsModule
  ],
  providers: [MainServiceService,PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
