import { Component, Input } from '@angular/core';
import { RecipeListModel } from '../../models/recipe-list.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input('recipeData2') recipeData !: RecipeListModel;

}
