import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: { text: 'Dashboard' } },
  { path: 'products', component: ProductsComponent, data: { text: 'Products' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  DashboardComponent,
  ProductsComponent,
];

export const mainNavItems = [
  {path: '/dashboard', icon: 'store_mall_directory', text: 'Dashboard'},
  {path: '/products', icon: 'label', text: 'Products'},
];
