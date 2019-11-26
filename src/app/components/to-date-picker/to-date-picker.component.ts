import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-to-date-picker',
  templateUrl: './to-date-picker.component.html',
  styleUrls: ['./to-date-picker.component.css']
})
export class ToDatePickerComponent implements OnInit {
  @Output() onChange2 = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
