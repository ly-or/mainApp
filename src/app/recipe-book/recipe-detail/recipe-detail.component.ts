import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {


  @Output() newItemEvent = new EventEmitter<{newName: any,newDescription: any,newImageURL: any}>();


  addVl(arg: any){

    this.newItemEvent.emit(arg)
    // this.newItemEvent.emit(newDescription)
    // this.newItemEvent.emit(newImageURL)

  }

}
