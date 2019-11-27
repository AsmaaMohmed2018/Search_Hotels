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
    this.data.currentDate.subscribe((date)=>this.date=date);
  }
  newDate(){
    this.data.changeDate(this.model);
    console.log(this.date);
  }
}
