import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
