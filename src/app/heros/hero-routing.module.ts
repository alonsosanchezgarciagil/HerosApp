import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
    children : [
      {
        path: 'add/:id',
        component: AddComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: ':id',
        component: HeroComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
      
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports : [
    RouterModule
  ]

})
export class HeroRoutingModule { }
