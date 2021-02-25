import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInputRef!: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  
  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    if (name && amount > 0) {
      const ingredient = new Ingredient(name, amount);
      this.ingredientAdded.emit(ingredient);
      this.nameInputRef.nativeElement.value = '';
      this.amountInputRef.nativeElement.value = 1;
    }
  }

  deleteItem() {

  }

  clearItem() {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = 1;
  }
}
