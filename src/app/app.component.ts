import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MaskPipePipe} from "./core/customPipe/mask-pipe.pipe";
import {DragonballService} from "./core/services/dragonball.service";
import {CharacterDto, ResponseDto} from "./types";
import {catchError, EMPTY, tap} from "rxjs";
import {CharactersComponent} from "./components/characters/characters.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaskPipePipe, CharactersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-sis-414-curso';
  data = "esto es un dato de prueba"
  public characters: CharacterDto[] = [];
  constructor(private dragonBallService: DragonballService) {
  }

  ngOnInit(){
    this.dragonBallService.getCharacters().pipe(
      tap((data)=>{
        this.characters = data.items
      }),
      catchError((error)=>{
        alert("Error al cargar los personajes")
        return EMPTY
      })
    ).subscribe()
    console.log(this.characters)
  }
}
