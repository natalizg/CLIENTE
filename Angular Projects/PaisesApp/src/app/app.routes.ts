import { Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';

export const routes: Routes = [

    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },

];
