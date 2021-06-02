import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'restaurant-categories',
    loadChildren: () => import('./restaurants/restaurant-categories/restaurant-categories.module').then( m => m.RestaurantCategoriesPageModule)
  },
  {
    path: 'restaurant-list/:idCateg',
    loadChildren: () => import('./restaurants/restaurant-list/restaurant-list.module').then( m => m.RestaurantListPageModule)
  },
  {
    path: 'restaurant-details/:idRestau',
    loadChildren: () => import('./restaurants/restaurant-details/restaurant-details.module').then( m => m.RestaurantDetailsPageModule)
  },
  {
    path: 'add-restaurant-category',
    loadChildren: () => import('./restaurants/add-restaurant-category/add-restaurant-category.module').then( m => m.AddRestaurantCategoryPageModule)
  },
  {
    path: 'editer-modal',
    loadChildren: () => import('./restaurants/editer-modal/editer-modal.module').then( m => m.EditerModalPageModule)
  },
  {
    path: 'restaurant-add/:idCateg',
    loadChildren: () => import('./restaurants/restaurant-add/restaurant-add.module').then( m => m.RestaurantAddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
