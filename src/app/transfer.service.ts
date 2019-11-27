import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private DateSource = new BehaviorSubject('default Date');
  //private DateSource2 = new BehaviorSubject('default Date2');
  currentDate = this.DateSource.asObservable();
  //currentDate2 = this.DateSource2.asObservable();


  constructor() { }
    changeDate(date: string) {
    this.DateSource.next(date);
}
/*changeDate2(date: string) {
  this.DateSource2
}*/

}