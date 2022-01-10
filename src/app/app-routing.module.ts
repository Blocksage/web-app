import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './layout/private/private.component';
import { PublicComponent } from './layout/public/public.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { PoliciesComponent } from './pages/policies/policies.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  { path: '', redirectTo: 'public/auth/login', pathMatch: 'full'},
  { path: 'public', component: PublicComponent, children: [
    { path: 'auth/login', component: LoginComponent},
    { path: 'auth/register', component: RegisterComponent}
  ]},
  { path: 'app', component: PrivateComponent, children: [
    { path: 'onboarding', component: OnboardingComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'policies', component:PoliciesComponent },
    { path: 'tasks', component: TasksComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
