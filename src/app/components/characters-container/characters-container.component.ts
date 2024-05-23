import { Component, Input } from '@angular/core';
import { CharacterDto } from '../../types';
import { CharacterItemComponent } from "../character-item/character-item.component"

@Component({
  selector: 'app-characters-container',
  standalone: true,
  imports: [CharacterItemComponent],
  templateUrl: './characters-container.component.html',
  styleUrl: './characters-container.component.css'
})
export class CharactersContainerComponent {
  @Input() characters!: CharacterDto[];
}
