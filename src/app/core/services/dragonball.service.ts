import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseDto} from "../../types";
import {environmentDevelopment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<ResponseDto>{
    return this.http.get<ResponseDto>(environmentDevelopment.urlBase)
  }
}
