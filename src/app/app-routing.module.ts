import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataManagementComponent } from './data-management/data-management.component';

const routes: Routes = [
  {
    path:"data",
    loadChildren: () => import('./data-management/data-management.module').then(m =>m.DataManagementModule)
  },
  {path:"data-mange", component:DataManagementComponent},
  { path:"", redirectTo:"data-mange", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
