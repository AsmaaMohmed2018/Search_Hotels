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
  f1;
  to1;
  from1;
  too1;
  f2;
  to2;
  from2;
  too2;
  diffm;
  diffd;
  night;
  
  

  confirm (event): void {
    // console.log(typeof(this.date1))
    // console.log(this.date2)
    

    this.from2= new Date(this.date1.year, parseInt(this.date1.month)-1, this.date1.day);
    console.log('from2' + this.from2);  
    this.too2= new Date(this.date2.year, parseInt(this.date2.month)-1, this.date2.day);
    console.log('too2' + this.too2);
    this.diffm=this.too2.getTime()-this.from2.getTime();
    this.diffd=this.diffm/(1000*60*60*24);
    this.night=this.diffd;
    console.log(this.night);
    this.hotels.map((hotel)=>{
    this.available= (hotel.availability)
    console.log(hotel.price);
    hotel.price=Math.round(((hotel.price)*this.diffd)*100)/100;
    this.available.map((av)=>{
      this.f1=av.from.split('-');
      this.to1=av.to.split('-');
      this.from1= new Date(this.f1[2], parseInt(this.f1[1])-1, this.f1[0]); 
      console.log('from1' + this.from1); 
      this.too1=new Date(this.to1[2], parseInt(this.to1[1])-1, this.to1[0]);
      console.log('too1' + this.too1);

      if ((this.from2>=this.from1) && (this.too2<=this.too1)){
        setTimeout(()=>{console.log('true')
        
        this.matchedHotels.push(hotel);        
        console.log(this.matchedHotels) ,3000})       
      }
      else {console.log('false');
      // console.log(typeof(av.from))
    }
      })
    })
    
  }


  constructor(private HotelsService: HotelsService,private data: TransferService) { }
  public nameSort;
  

  ngOnInit() {

    this.HotelsService.getHotels().subscribe((data)=>{
      console.log(data);  
      this.hotels=data['hotels'] ;  
    });
    ;
    this.data.currentDate1.subscribe((date)=>this.date1=date);
    console.log(this.date1);
    this.data.currentDate2.subscribe((date)=>this.date2=date); 
    console.log(this.date2);
    
    
  }


}
      
  


