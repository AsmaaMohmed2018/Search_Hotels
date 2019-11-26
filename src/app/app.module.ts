import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelsService } from './hotels.service';
import { ToDatePickerComponent } from './components/to-date-picker/to-date-picker.component' 

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    DatePickerComponent,
    ToDatePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
