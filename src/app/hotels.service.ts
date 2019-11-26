import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private HttpClient: HttpClient) { }
  public getHotels(){
    return this.HttpClient.get(`https://api.myjson.com/bins/tl0bp`);
    
  }
  
}
