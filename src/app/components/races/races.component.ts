import { Component, NgModule } from '@angular/core';
import { Open5eService } from '../../services/open5e.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-races',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './races.component.html',
  styleUrl: './races.component.scss'
})
export class RacesComponent {

  races: any;
  selectedRace: any;

  constructor(private open5eService: Open5eService) {}
  ngOnInit(): void {
    this.getAllRaces();
  }

  getAllRaces(): void {
    this.open5eService.getAllRaces().subscribe((data: any) => {
      this.races = data.results;
    });
  }
}
