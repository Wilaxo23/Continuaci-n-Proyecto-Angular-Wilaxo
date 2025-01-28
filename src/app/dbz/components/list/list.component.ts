import { Character } from './../interfaces/character.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() characterList: Character[] = [];
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  deleteCharacter(index: number) {
    this.onDelete.emit(index);
  }
}
