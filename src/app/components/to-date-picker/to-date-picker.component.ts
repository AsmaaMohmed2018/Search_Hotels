import { Component, OnInit, Output } from '@angular/core';
import { TransferService } from '../../transfer.service';

@Component({
  selector: 'app-to-date-picker',
  templateUrl: './to-date-picker.component.html',
  styleUrls: ['./to-date-picker.component.css']
})
export class ToDatePickerComponent implements OnInit {
  date :string;
  
  
  constructor(private data: TransferService ) { }
  public model;
  ngOnInit() {
    this.data.currentDate2.subscribe((date)=>this.date=date);
  }

  newDate2(){
    this.data.changeDate2(this.model);
    console.log(this.date);
  }

}
