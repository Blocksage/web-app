import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PublicComponent } from './layout/public/public.component';
import { PrivateComponent } from './layout/private/private.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PoliciesComponent } from './pages/policies/policies.component';
import { FormsModule } from '@angular/forms';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { CreatePolicyComponent } from './components/create-policy/create-policy.component';
import { GenerateApiKeyComponent } from './components/generate-api-key/generate-api-key.component';
import { IntegrationInstructionsComponent } from './components/integration-instructions/integration-instructions.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TasksComponent } from './pages/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PoliciesComponent,
    OnboardingComponent,
    CreatePolicyComponent,
    GenerateApiKeyComponent,
    IntegrationInstructionsComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
