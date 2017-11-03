import { PostComponent } from './post.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: PostComponent
    }
];

export const PostRoutes = RouterModule.forChild(routes);
