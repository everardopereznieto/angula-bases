import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';
@Injectable({providedIn: 'root'})
export class DbzService {
    public characters: Character[]=[{
        id:uuid(),
        name:'Roshi',
        power:1000
    },
    {
        id:uuid(),
        name:'Chaoz',
        power:500
    },
    {
        id:uuid(),
        name:'Vegeta',
        power: 9500
    }];

    addCharacter(character:Character):void{
        // const newCharacter:Character={id: uuid(), ...character };
        const newCharacter:Character = {id:uuid(),name:character.name,power:character.power};
        this.characters.push(newCharacter);
    }

    // onRemoveCharacter(index:string):void{
    //     this.characters.splice(index,1);
    deleteCharacterById(id:string):void{
        this.characters = this.characters.filter(character => character.id !== id);
    }

}
