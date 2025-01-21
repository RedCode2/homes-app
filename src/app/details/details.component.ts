import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId: number = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}
