import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../shared/layout/layout.component';
import { ProfileComponent } from '../shared/profile/profile.component';
import { DashboardComponent } from '../shared/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            {
                path: 'profile', component: ProfileComponent,
                data: { title: 'Profile', urls: [{ title: 'Dashboard', url: '/' }] }
            },
            {
                path: 'dashboard', component: DashboardComponent,
                data: { title: 'Dashboard', urls: [{ title: 'Dashboard', url: '/' }] }
            },
            { path: 'user', loadChildren: './user/user.module#UserModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }