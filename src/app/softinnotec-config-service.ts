import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoftinnotecConfigService {
  get boardSize(): { rankLength: number; fileLength: number } {
    return this._boardSize;
  }

  set boardSize(value: { rankLength: number; fileLength: number }) {
    this._boardSize = value;
  }

  private _boardSize = {fileLength: 8, rankLength: 8}

  constructor() { }
}
