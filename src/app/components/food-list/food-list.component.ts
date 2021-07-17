import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Food } from 'src/app/shared/interface/food';

import foodStore from '../../shared/data/foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  
  foodList:Array<Food> = foodStore as Array<Food>;
  foodToday:Array<Food>=[];
  calorias:number=0;
  buscar:string="";
  formGroup!: FormGroup;
  toggleform:boolean=false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { 
    this.formGroup = this.fb.group({
      "name": ["", Validators.required],
      "calories":[, Validators.required],
      "image":"",
      "quantity":0
  });
  }

  addToday(food:Food){
    food.quantity+=1;
    if(!this.foodToday.find(e=> e.name == food.name)){
      this.foodToday.push(food);
    }
    this.calorias+=food.calories;
  }

  onSubmit(){
    if(!this.foodList.find(e=> e.name == this.formGroup.value.name)){
      this.foodList.push(this.formGroup.value);
    }
    
    this.toggleform=!this.toggleform;
    this.ngOnInit();
  }
  toggleForm(){
    this.toggleform=!this.toggleform;
  }
}
