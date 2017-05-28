import { Routes } from '@angular/router'

export const appRoutes: Routes = [
    //Sử dụng cho http://localhost:4200/
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    //Sử dụng cho http://localhost:4200/login --> gọi login.module
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    //Sử dụng cho http://localhost:4200/main
    { path: 'main', loadChildren: './main/main.module#MainModule' }
];//File route của toàn hệ thống