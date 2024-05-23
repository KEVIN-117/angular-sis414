import { Component } from '@angular/core';
import { DragonballService } from './core/services/dragonball.service';
import { CharactersContainerComponent } from "./components/characters-container/characters-container.component"
import { CharacterDto } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharactersContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-sis-414-curso';
  data = "esto es un dato de prueba"
  characters!:CharacterDto[]
  constructor(private service: DragonballService) {

  }

  ngOnInit() {
    this.service.getCharacters().subscribe((data) => {
      const characters = data.items
      this.characters = characters
    })
  }
}
