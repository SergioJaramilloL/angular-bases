import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',

  template: `
    <p>Bienvenidos a Angular {{ counter }}</p>
    <button class="btn btn-primary" (click)="increaseBy(-1)">-1</button>
    <button class="btn btn-primary" (click)="increaseBy(+1)">+1</button>
    <button class="btn btn-primary" (click)="resetCounter()">Reset</button>
  `,
})
export class CounterComponent {
  public title: string = 'Esto en binding en Angular';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
