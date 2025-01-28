import { Component, Output, EventEmitter } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  standalone: false,
})
export class DbzAddCharacterComponent {
  newCharacter: Character = { name: '', power: 0 };
  @Output() onNewCharacter: EventEmitter<Character> =
    new EventEmitter<Character>();

  addCharacter() {
    if (this.newCharacter.name.trim().length === 0) return;
    this.onNewCharacter.emit(this.newCharacter);
    this.newCharacter = { name: '', power: 0 }; // Reset form
  }
}
