import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { RacesComponent } from './components/races/races.component';
import { ClassesComponent } from './components/classes/classes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  FormComponent,
  HeaderComponent,
  RacesComponent,
  ClassesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularJDR';
}
