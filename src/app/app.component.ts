import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { RacesComponent } from './components/races/races.component';
import { ClassesComponent } from './components/classes/classes.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  FormComponent,
  RacesComponent,
  ClassesComponent,
  RouterLink,
  FormsModule,
  NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularJDR';
  section: string = 'creation';

  switchSection(sectionName: string): void {
    this.section = sectionName;
  }
}
