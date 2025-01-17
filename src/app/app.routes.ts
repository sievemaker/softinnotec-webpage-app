import { Routes } from '@angular/router';
import {CookiePolicyComponent} from "./cookie-policy/cookie-policy.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {TermsOfServiceComponent} from "./terms-of-service/terms-of-service.component";

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Redirect root to '/home'
  { path: 'cookie-policy', component: CookiePolicyComponent },          // Route for HomeComponent
  { path: 'privacy-policy', component: PrivacyPolicyComponent },        // Route for AboutComponent
  { path: 'terms-of-service', component: TermsOfServiceComponent },    // Route for ContactComponent
];
