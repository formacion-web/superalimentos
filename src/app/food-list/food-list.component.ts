// import { ElementRef, Renderer2 } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {faMinusCircle} from '@fortawesome/free-solid-svg-icons';


import foods from '../foods';

export interface IFoods {
  name: string,
  calories: number,
  image: string,
  quantity: number
}


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  foodList: IFoods[] = foods as IFoods[];
  menulist = new Array();
  pattern!:string;
  num_calories:number=0;
  add_form:boolean=true;
  formGroup!: FormGroup;
  
  trashIcon = faTrash;
  plusCircle = faPlusCircle;
   
  // @ViewChild("ulMenu") ulMenu: ElementRef | undefined;
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    
    this.formGroup = this.fb.group({
      "name": ["", Validators.required],
      "calories":[0, Validators.required],
      "image":"",
      "quantity":0
  });
  }

  addItemToMenu(item:IFoods){
    console.log(item);
    this.menulist.push(item);
    this.num_calories = this.num_calories+item.calories;    
  }
  deleteItemFromMenu(item:IFoods){
    const index = this.menulist.indexOf(item);
    this.menulist.splice(index, 1); 
    this.num_calories = this.num_calories - item.calories;  
  }
  toogleAddForm(){
    this.add_form = ! this.add_form;
    this.plusCircle = this.add_form ? faPlusCircle:faMinusCircle;
   
  }
  onSubmit(){
    
    console.log(this.formGroup.value);
    this.foodList.push(this.formGroup.value);
  }

}
