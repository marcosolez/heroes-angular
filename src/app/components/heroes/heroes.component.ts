import { Component, OnInit } from '@angular/core';
import {HeroesServices,Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

   heroes:Heroe[] = [];

  constructor(private _heroesService:HeroesServices) { 
   
  }

  ngOnInit(): void {
   this.heroes=this._heroesService.getHeroes();      
  }

}
