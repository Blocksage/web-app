import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key:string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getItem(key:string) {
    return JSON.parse(window.localStorage.getItem(key) || '{}')
  }
}
