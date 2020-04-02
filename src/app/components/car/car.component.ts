import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name:string;
  speed:number;
  model:string;
  colors:Colors;
  optionsIndex:number;
  options:string[][] = [
    ["ABS", "Автопаркинг"], 
    ["Автопилот", "Автопаркинг"], 
    ["ABS", "Автопилот"],
    ["Пусто"]
  ];
  isEditFormOpen:boolean = false;
  isAddOptFormOpen:boolean = false;
  currentButtonStyle:string = 'warning';

  constructor() { }

  ngOnInit(): void {
    this.name = 'Марка';
    this.model = 'Модель';
    this.speed = 0;
    this.colors = {
      car: 'Не выбрано',
      salon: 'Не выбрано',
      wheels: 'Не выбрано'
    }
    this.optionsIndex = 3;
  }

  selectCar(carName:string) {
    switch(carName){
      case 'bmw':{
        this.name = 'BMW';
        this.model = 'M5';
        this.speed = 280;
        this.colors = {
          car: 'Синий',
          salon: 'Серый',
          wheels: 'Серебристый'
        }
        this.optionsIndex = 0;
        this.currentButtonStyle = 'danger';
      }
      break;
      case 'audi':{
        this.name = 'Audi';
        this.model = 'RS8';
        this.speed = 240;
        this.colors = {
          car: 'Черный',
          salon: 'Коричневый',
          wheels: 'Белый'
        }
        this.optionsIndex = 1;
        this.currentButtonStyle = 'success';
      }
      break;
      case 'mercedes':{
        this.name = 'Mercedes';
        this.model = 'Benz';
        this.speed = 260;
        this.colors = {
          car: 'Черный',
          salon: 'Серый',
          wheels: 'Серебристый'
        }
        this.optionsIndex = 2;
        this.currentButtonStyle = 'info';
      }
    }    
  }

  addOpt(option:string){
    if (option.trim() == ''){
      return false;
    }
    if (this.options[this.optionsIndex][0] == 'Пусто'){
      this.options[this.optionsIndex].splice(0, 1);
    }
    this.options[this.optionsIndex].unshift(option);
    return false;
  }

  deleteOpt(option:string){
    for(let i = 0; i < this.options.length; ++i){
      if (this.options[this.optionsIndex][i] == option){
        this.options[this.optionsIndex].splice(i, 1);
        if (this.options[this.optionsIndex].length == 0){
          this.options[this.optionsIndex].unshift('Пусто');
        }
        break;
      }
    }
  }
  openEditForm(){
    this.isEditFormOpen = !this.isEditFormOpen;
  }
  openAddOptForm(){
    this.isAddOptFormOpen = !this.isAddOptFormOpen;
  }
}

interface Colors {
  car:string,
  salon:string,
  wheels:string
}