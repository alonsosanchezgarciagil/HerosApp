import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/heros.interface';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.scss']
})
export class CardHeroComponent {
  @Input() hero!: Hero ;
}
