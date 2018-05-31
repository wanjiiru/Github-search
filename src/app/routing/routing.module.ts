import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SearchComponent } from '../search/search.component';
import {RepositoryComponent} from '../repository';


const routes: Routes = [
    {path: 'users', component: SearchComponent},
    {path: 'repository', component: RepositoryComponent}


];

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
