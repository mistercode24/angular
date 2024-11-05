import { Component , inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../interfaces/housing-location';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  housingLocationList:HousingLocation[] = [];
  filteredLocationList:HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  listLabel: string = "";

  constructor() {
    //this.housingLocationList = this.housingService.getAllHousingLocations();
    this.housingService.getAllHousingLocations()
      .then((housingLocationList : HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }

  filterResults(text: string){

    if(!text) {
      this.filteredLocationList = this.housingLocationList;
      this.listLabel = "";
    } else {

      this.filteredLocationList = this.housingLocationList.filter(
        housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
      );

      this.listLabel = "Showing filtered results. Remove text and click search again to see all locations.";
    }
  }

}
