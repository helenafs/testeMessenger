import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private toggleElementSource = new BehaviorSubject<boolean>(false);
  toggleElement$ = this.toggleElementSource.asObservable();

  toggleElement(value: boolean) {
    this.toggleElementSource.next(value);
  }
}
