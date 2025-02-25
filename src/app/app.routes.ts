import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { platformBrowser } from '@angular/platform-browser';
import { PlacementsComponent } from './Components/placements/placements.component';
import { WorkshopsAndEventsComponent } from './Components/workshops-and-events/workshops-and-events.component';
import { resolveForwardRef, resource } from '@angular/core';
import { ResourcesComponent } from './Components/resources/resources.component';
import { EnrollUsComponent } from './Components/enroll-us/enroll-us.component';
import { CoursesComponent } from './Components/courses/courses.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
    },
    {
        path:'Home',
        component: HomeComponent
    },
    {
        path:'About-us',
        component: AboutUsComponent
    },
    {
        path:'Contact-us',
        component: ContactUsComponent
    },
    {
        path:'Placements',
        component: PlacementsComponent
    },
    {
        path:'Workshops-and-Events',
        component: WorkshopsAndEventsComponent
    },
    {
        path:'Resources',
        component: ResourcesComponent
    },
    {
        path:'Enroll-now',
        component: EnrollUsComponent
    },
    {
        path:'Courses',
        component: CoursesComponent
    }
];
