import { Component, EventEmitter, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})

export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character>= new EventEmitter();

  public character: Character={
    id:'',
    name:'',
    power:0
  };

  emitCharacter():void{
    console.log(this.character);
    if(this.character.power ===0 || this.character.name.length===0 ) return;
    this.onNewCharacter.emit(this.character);
    this.character={id:'',name:'',power:0};
  }
}
