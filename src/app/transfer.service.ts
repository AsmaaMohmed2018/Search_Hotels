import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private DateSource1 = new BehaviorSubject('default Date1');
  private DateSource2 = new BehaviorSubject('default Date2');
  private NightSource = new BehaviorSubject('default Nights');
  currentDate1 = this.DateSource1.asObservable();
  currentDate2 = this.DateSource2.asObservable();



  constructor() { }
    changeDate1(date: string) {
    this.DateSource1.next(date);
}
  changeDate2(date: string) {
  this.DateSource2.next(date);
}



}