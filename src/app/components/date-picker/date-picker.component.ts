import { Component, OnInit, Output } from '@angular/core';
import { TransferService } from '../../transfer.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  date :string;

  constructor(private data: TransferService ) { }
  public model;
  ngOnInit() {
    this.data.currentDate1.subscribe((date)=>this.date=date);
  }
  newDate1(){
    this.data.changeDate1(this.model);
    console.log(this.date);
  }
}
