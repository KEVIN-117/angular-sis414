import {Component, Input, Output, output} from '@angular/core';
import {CharacterDto} from "../../types";
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-character-item',
  standalone: true,
  imports: [],
  templateUrl: './character-item.component.html',
  styleUrl: './character-item.component.css'
})
export class CharacterItemComponent {
    @Input() character!: CharacterDto;
    //@Output() characterSelected = new EventEmitter<string | null>();
    characterSelected = output<CharacterDto>();
    data = ["esto ", "es", "un", "dato", "de", "prueba"]

    sendData(){
      this.characterSelected.emit(this.character);
    }
}
