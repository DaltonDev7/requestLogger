import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggerServicesComponent } from './components/logger-services/logger-services.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'consultar-servicios',
    pathMatch:'prefix'
  },
  {
    path: 'consultar-servicios',
    component: LoggerServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
