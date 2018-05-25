import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItem } from '../models/item';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  constructor(private http: HttpClient) { }

  public getItems(): Observable<IItem[]> {
    return this.http.get<IItem[]>('/assets/items.json');
  }

}
