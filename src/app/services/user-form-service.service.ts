import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable,Subject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UserFormServiceService {
  private generalInfo:Subject<FormGroup>=new Subject();
  generalInformation:Observable<FormGroup>=this.generalInfo.asObservable();
  constructor() { }
}
