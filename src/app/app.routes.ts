import { Routes } from '@angular/router';
import { SupportComponent } from './pages/support/support.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: SupportComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];
