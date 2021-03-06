import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: '**', component: HomeComponent }
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(appRoutes)],
	providers:[],
	exports: [RouterModule]
})


export class AppRoutingModule {}