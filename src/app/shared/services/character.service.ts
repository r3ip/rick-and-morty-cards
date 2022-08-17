import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  apiUrl: string = '';
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getCharacters() : Observable<any> {
    return this.http.get(`${this.apiUrl}/character`).pipe(
      map( (res: any) => {
        return res
      })
    )
  }
}
