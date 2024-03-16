import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { RacesComponent } from './components/races/races.component';
import { ClassesComponent } from './components/classes/classes.component';


export const routes: Routes = [
    {path: '/form', component: FormComponent},
    {path: '/races', component: RacesComponent},
    {path: '/classes', component: ClassesComponent}
];

