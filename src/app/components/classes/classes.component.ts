import { Component, NgModule } from '@angular/core';
import { Open5eService } from '../../services/open5e.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent {
  classes: any;
  selectedClass: any;

  constructor(private open5eService: Open5eService) {}
  ngOnInit(): void {
    this.getAllClasses();
  }

  getAllClasses(): void {
    this.open5eService.getAllClasses().subscribe((data: any) => {
      this.classes = data.results;
    });
  }
}
