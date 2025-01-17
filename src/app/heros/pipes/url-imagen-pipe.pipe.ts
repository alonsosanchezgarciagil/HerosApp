import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heros.interface';

@Pipe({
  name: 'urlImagenPipe'
})
export class UrlImagenPipePipe implements PipeTransform {

  transform(hero :Hero): string {

    if( !hero.id ){
      return "assets/no-image.png";
    }else if(hero.alt_img){
      return hero.alt_img;
    }else



    return "assets/heroes/"+hero.id+".jpg";
  }

}
