import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
export const routes: Routes = [
    {
        path:'',    //represents the url being accessed
        component:HomeComponent,
        title:'Home Page'

    },
    {
        path:'details/:id',    //represents the url being accessed
        component:DetailsComponent,
        title:'Details Page'

    }
];
