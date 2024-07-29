import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroRoutingModule } from './hero-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { UrlImagenPipePipe } from './pipes/url-imagen-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroComponent,
    HomeComponent,
    ListComponent,
    CardHeroComponent,
    UrlImagenPipePipe,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ]
})
export class HerosModule { }
