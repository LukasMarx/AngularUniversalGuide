import { AboutMeComponent } from './aboutMe.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: AboutMeComponent
    }
];

export const AboutMeRoutes = RouterModule.forChild(routes);
