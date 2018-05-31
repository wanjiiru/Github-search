import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import {RoutingModule} from './routing/routing.module';
import { RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import {FormsModule} from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    RepositoriesComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
      RoutingModule,
      RouterModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
