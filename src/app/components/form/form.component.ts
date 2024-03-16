import { Component } from '@angular/core';
import { Open5eService } from '../../services/open5e.service';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgFor],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  classes: any;
  races: any;
  router:any;
  stats = {
    force: 'value',
    dexterite: 'value',
    constitution: 'value',
    intelligence: 'value',
    sagesse: 'value',
    charisme: 'value'
  };

  constructor(private open5eService: Open5eService) { }

  ngOnInit(): void {
    this.getAllClasses();
    this.getAllRaces();
  }

  getAllClasses(): void {
    this.open5eService.getAllClasses().subscribe((data: any) => {
      this.classes = data.results;
    });
  }

  getAllRaces(): void {
    this.open5eService.getAllRaces().subscribe((data: any) => {
      this.races = data.results;
    });
  }
  generateStats(): void {
    this.stats.force = this.getRandomValue().toString();
    this.stats.dexterite = this.getRandomValue().toString();
    this.stats.constitution = this.getRandomValue().toString();
    this.stats.intelligence = this.getRandomValue().toString();
    this.stats.sagesse = this.getRandomValue().toString();
    this.stats.charisme = this.getRandomValue().toString();
  }

  getRandomValue(): number {
    return Math.floor(Math.random() * 20) + 1; 
  }

  redirectClasses(){
    this.router.navigate(['/races'])
  }
  
}



