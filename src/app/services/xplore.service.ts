import { Injectable } from '@angular/core';
import itcs from '../../assets/itc.json';
import { ITC } from '../types';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XploreService {

  mockITCs: ITC[] = (itcs as ITC[]);
  constructor() { }

  public getITCs(page: number = 1): Observable<ITC[]> {
    return of(this.mockITCs);
  }
}
