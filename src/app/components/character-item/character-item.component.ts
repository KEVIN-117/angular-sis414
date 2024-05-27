import { Component, Input } from '@angular/core';
import { CharacterDto } from '../../types';

@Component({
  selector: 'app-character-item',
  standalone: true,
  imports: [],
  templateUrl: './character-item.component.html',
  styleUrl: './character-item.component.css'
})
export class CharacterItemComponent {
  @Input() character!: CharacterDto;
}
