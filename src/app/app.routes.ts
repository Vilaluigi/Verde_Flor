import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
},
{
    path: 'sobre',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
},
{
    path: 'espacos',
    loadComponent: () => import('./pages/spaces/spaces.component').then(m => m.SpacesComponent)
},
{
    path:'reservas',
    loadComponent: () => import('./pages/reservations/reservations.component').then (m => m.ReservationsComponent)
},
{
    path:'contato',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
},
{
    path:'galeria',
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent)
}

];
