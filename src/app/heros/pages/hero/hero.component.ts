import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/heros.interface';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit{

  hero!: Hero;
  constructor(private activatedRoute: ActivatedRoute,
              private herosService: HerosService,
              private router: Router ){}

  ngOnInit(): void {
    
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.herosService.getHeroById(id))
      ).subscribe(hero => this.hero = hero)
    
  }

  back(){
    this.router.navigate(['/heros/list']);
  }
}
