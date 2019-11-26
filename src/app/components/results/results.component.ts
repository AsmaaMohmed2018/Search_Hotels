import { Component, OnInit, Input } from '@angular/core';
import { HotelsService} from '../../hotels.service';
import { DatePickerComponent} from '../date-picker/date-picker.component';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  upCase(selectedDate): void {
    this.result = selectedDate;
    console.log(this.result);
  }
  upCase2(selectedDate2): void {
    this.result2 = selectedDate2;
  }
  hotels;
  hotel;
  available;
  av; 
  matchedHotels=[];
  result;
  result2;
  confirm (event): void {
    console.log((this.result)+'yes')
    console.log(this.result2)
    this.hotels.map((hotel)=>{
    this.available= (hotel.availability)
    this.available.map((av)=>{
      //console.log(av.from);
      if (av.from=="08-12-2020" && av.to=="24-12-2020"){
        console.log('true');
        this.matchedHotels.push(hotel);
        console.log(this.matchedHotels)        
      }
      })
    })
    
  }
  constructor(private HotelsService: HotelsService) { }

  ngOnInit() {

    this.HotelsService.getHotels().subscribe((data)=>{
      console.log(data);
      this.hotels=data['hotels'] 
    
     
    });
    
 
    
  }

  

}
      
  


