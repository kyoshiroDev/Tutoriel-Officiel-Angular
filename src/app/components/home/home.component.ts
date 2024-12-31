import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingService} from '../../services/housing.service';
import { HousingLocation } from '../../interfaces/housinglocation';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
  
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
}
