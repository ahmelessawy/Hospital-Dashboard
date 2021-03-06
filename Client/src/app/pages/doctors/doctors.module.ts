import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoctorsComponent } from './doctors.component';

const routes: Routes = [{
    path: '',
    data: {
        title: 'Doctors Page',
        urls: [{ title: 'Dashboard', url: '/' }, { title: 'Doctors Page' }]
    },
    component: DoctorsComponent
}];


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgbModule.forRoot(),
        RouterModule.forChild(routes)
    ],
    declarations: [DoctorsComponent]
})
export class DoctorsModule { }