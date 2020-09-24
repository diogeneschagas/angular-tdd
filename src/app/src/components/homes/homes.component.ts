import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.less']
})
export class HomesComponent implements OnInit {

  homes$;
  constructor() { }

  ngOnInit() {
    // this.homes$ = this.dataService.getHomes$();  Aplicável apenas na utilizaçao de algum servico (API)
    this.homes$ = of([
      {
        title: 'Home 1',
        image: 'assets/joao-pessoa.jpg',
        location: 'João Pessoa'
      },
      
      {
        title: 'Home 2',
        image: 'assets/joao-pessoa.jpg',
        location: 'Fortaleza'
      },
      
      {
        title: 'Home 3',
        image: 'assets/joao-pessoa.jpg',
        location: 'Natal'
      }
    ])
  }

}
