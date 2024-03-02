import { Component } from '@angular/core';
import { RecipeListModel } from './models/recipe-list.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent {

  dataToShow !: {name: string, surname: string}

  onAddNewClicked(data: {name: string, surname: string}): void{

    console.log(data)
    this.dataToShow = data
  }

  addVlera(data: any){

    console.log(data)

  }


 
}
