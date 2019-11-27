import { Component, OnInit, Input } from '@angular/core';
import { HotelsService} from '../../hotels.service';
import { DatePickerComponent} from '../date-picker/date-picker.component';
import { TransferService } from '../../transfer.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  hotels;
  hotel;
  available;
  av; 
  matchedHotels=[];
  date1;
  date2;
  confirm (event): void {
    console.log(this.date1)
    //console.log(this.date2)
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
  constructor(private HotelsService: HotelsService,private data: TransferService) { }

  ngOnInit() {

    this.HotelsService.getHotels().subscribe((data)=>{
      console.log(data);
      this.hotels=data['hotels'] ;
      this.data.currentDate.subscribe((date)=>this.date1=date);
      console.log(this.date1);
      //this.data.currentDate2.subscribe((date)=>this.date2=date);     
    });
    
 
    
  }

  

}
      
  


