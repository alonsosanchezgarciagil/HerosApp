import { Component, OnInit } from '@angular/core';
import { Publisher, Hero } from '../../interfaces/heros.interface';
import { HerosService } from '../../services/heros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
    img {
      width: 100%;
      border-radius: 5px;
    }
    `
  ]
})
export class AddComponent implements OnInit{

  publisher: string[] = ['DC Comics', 'Marvel Comics'];

  hero: Hero = {
    id:"",
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego:'',
    first_appearance:'',
    characters:'',
    alt_img:'',
  }

  constructor(private herosService: HerosService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private _snackBar: MatSnackBar,
              private dialog: MatDialog){

  }

  ngOnInit(): void {
    
    if( !this.router.url.includes('add')){
      return;
    }
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.herosService.getHeroById(id))
      )
      .subscribe( hero => this.hero = hero);

  }

  save(){
    if(this.hero.superhero.trim().length !== 0){
      
      if(this.hero.id){
        this.herosService.updateHero(this.hero)
          .subscribe( hero => this.showSnakbar('Character was updated') );
      }
      else{

        this.herosService.addHero(this.hero)
        .subscribe( hero => {
          this.router.navigate(['/heros/add', hero.id]);
          this.showSnakbar('Character was added')
        })
      }
      
      
    }
      
  }

  deleteHero(){

    const dialog = this.dialog.open( ConfirmComponent, {
      width: '250px',
      data: this.hero
    } );

    dialog.afterClosed().subscribe(
      (result => {
        if(result){
          this.herosService.deleteHero(this.hero.id! )
            .subscribe( resp => {
              this.router.navigate(['/heros']);
            })
        }
      })
    )
       
  }


  showSnakbar( msg: string){
    this._snackBar.open( msg, 'ok!', {
      duration: 2500
    })
  }
}
