import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/heros.interface';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  term: string ='';
  heros: Hero[] = [];
  selectedHero: Hero | undefined;

  constructor(private herosService: HerosService){}

  searching(){
    this.herosService.getHerosBySuperhero(this.term)
      .subscribe( resp => this.heros = resp);
  }

  optionSelected( event: MatAutocompleteSelectedEvent ){
    
    if(event.option.value){
      const hero = event.option.value;
      this.term = hero.superhero;
      this.herosService.getHeroById( hero.id )
        .subscribe( hero => this.selectedHero = hero );
    }
    else this.selectedHero= undefined;
    
    
  }
}
