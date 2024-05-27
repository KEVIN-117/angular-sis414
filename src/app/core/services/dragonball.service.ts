import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseDto } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<ResponseDto> {
    return this.http.get<ResponseDto>('https://dragonball-api.com/api/characters')
  }
}
