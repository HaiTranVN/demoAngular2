import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
    {
        //app.route sẽ gọi về main routes này để gọi các module con của main.
        path: '', component: MainComponent, children: [
            { path: '', redirectTo: 'user', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'user', loadChildren: './user/user.module#UserModule' }
        ]
    }
];