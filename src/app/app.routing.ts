import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'post',
        pathMatch: 'full'
    },
    {
        path: 'post',
        loadChildren: './post/post.module#PostModule'
    },
    {
        path: 'aboutMe',
        loadChildren: './aboutMe/aboutMe.module#AboutMeModule'
    }
];

export const AppRoutes = RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
});
