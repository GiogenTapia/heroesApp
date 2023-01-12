import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  publishers = [
  {
    id: 'DC Comics',
    desc: 'DC - Comics'
  },
  {
    id: 'Marvel Comics',
    desc: 'Marvel - Comics'
  }
];

hero : Hero = {
  id: '',
  superhero: '',
  alter_ego: '',
  characters: '',
  first_appearance: '',
  publisher: Publisher.DCComics,
  alt_img: ''

};

 constructor( private _serviceHero : HeroesService){

 }

 
  ngOnInit(): void {
    
  }

  save(){
    if (this.hero.superhero.trim().length === 0) {
      return;
    }

    this._serviceHero.addHero(this.hero).subscribe(resp =>{
      console.log(resp)
    })
  }
}
