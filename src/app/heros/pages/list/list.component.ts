import { Component, OnInit } from '@angular/core';
import { HerosService } from '../../services/heros.service';
import { Hero } from '../../interfaces/heros.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  heros : Hero[] = [];

  constructor(private herosService: HerosService){}


  ngOnInit(): void {
    
    this.herosService.getHeros()
      .subscribe( resp => this.heros = resp);
    
  }
}
