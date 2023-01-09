import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'imageHero'
})
export class ImageHeroPipe implements PipeTransform {

  transform(value : Hero) {
    return "assets/heroes/"+value.id+".jpg";
  }

}
