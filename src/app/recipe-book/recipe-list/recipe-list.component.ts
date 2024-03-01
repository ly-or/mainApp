import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeListModel } from '../models/recipe-list.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() addNew = new EventEmitter<{name: string, surname: string}>()

  recipes: RecipeListModel[] = [
    {
      name: 'Chocolate Cake', 
      description: 'An easy chocolate cake that is super moist and chocolatey paired with a creamy dreamy chocolate ...', 
      imageUrl:'https://scientificallysweet.com/wp-content/uploads/2020/09/IMG_4087-feature-2.jpg'
    },
    
    {
      name: 'Velvet Cake', 
      description: 'Red Velvet Cake the queen of desserts.',
      imageUrl:'https://thescranline.com/wp-content/uploads/2023/06/RED-VELVET-CAKE-23-S-01.jpg'
    },
    
    {
      name: 'Banana Cake', 
      description: 'banana cake with cream cheese cake',
      imageUrl:'https://hips.hearstapps.com/vidthumb/images/delish-banana-cake-4-1535137229.jpg?crop=1xw:1xh;center,top&resize=1200:*'
    },
    
    {
      name: 'Lemon Cake', 
      description: 'Bursting with lemon flavors, this Lemon Cake recipe will brighten your day. Sweet, tart, and tangy, ...', 
      imageUrl:'https://preppykitchen.com/wp-content/uploads/2022/06/Lemon-Cake-Recipe.jpg'
    }
  ];

  

  addRecipe(): void{
    this.addNew.emit({name: 'Ikub',surname: 'Academy'});
  }

  

}
