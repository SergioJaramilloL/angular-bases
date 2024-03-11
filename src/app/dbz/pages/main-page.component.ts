import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 100
    },{
      name: 'Goku',
      power: 9500
    },{
      name: 'Vegeta',
      power: 7500
    }
  ]

  onNewCharacter( character: Character ): void {
    this.characters.unshift(character);
  }

  onDeleteCharacter(id: number) {
    this.characters.splice(id, 1);
  }

}
