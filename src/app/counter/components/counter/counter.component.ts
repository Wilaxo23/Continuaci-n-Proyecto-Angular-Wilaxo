import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `
    <h1>Counter:{{ counter }}</h1>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="decreaseBy(1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }

  decreaseBy(value: number): void {
    this.counter -= value;
  }
}
