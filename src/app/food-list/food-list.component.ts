import { ElementRef, Renderer2 } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
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
  pattern!:string;
  num_calories:number=0;
  
  trashIcon = faTrash;

  @ViewChild("ulMenu") ulMenu: ElementRef | undefined;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    
  }

  addItemToMenu(item:IFoods){
    //console.log(item);
    const h3 = this.renderer.createElement('h3');
    const text = this.renderer.createText(item.name);
    this.renderer.appendChild(h3, text);

    const li = this.renderer.createElement('li');
    
    this.renderer.appendChild(li, h3);
            
    this.renderer.appendChild(this?.ulMenu?.nativeElement, li);
    
    // <fa-icon [icon]="trashIcon"></fa-icon>    
    this.num_calories= this.num_calories+item.calories;
  }

}
