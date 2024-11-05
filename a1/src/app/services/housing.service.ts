import { Injectable } from '@angular/core';
import { HousingLocation } from '../interfaces/housing-location';

@Injectable({
  //providedIn specifies where can this service be used within application
  providedIn: 'root'  //root means this service can be used anywhere in the application
})
export class HousingService {

  url = "http://localhost:3000/locations";

  constructor() { }
  
  async getAllHousingLocations() : Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id:Number):Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName:string, lastName:string, email:string) {
    console.log(firstName, lastName, email);
  }


}
