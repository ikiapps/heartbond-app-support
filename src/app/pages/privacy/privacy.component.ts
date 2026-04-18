import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  template: `
    <header class="site-header site-header--compact">
      <div class="container header-inner">
        <h1>Privacy Policy</h1>
        <app-navbar [minimal]="true" variant="privacy"></app-navbar>
      </div>
    </header>

    <main id="main" class="container main-stack">
      <article class="card">
        <p class="lede">Last updated: April 2026</p>
        
        <section>
          <h2>Data Privacy and User Consent</h2>
          <p>HeartBond adheres to Apple's privacy guidelines and obtains explicit user consent before accessing or sharing health data. The usage and handling of data are transparent to users.</p>
        </section>

        <section>
          <h2>HealthKit Integration</h2>
          <p>On iOS, Apple's HealthKit framework is used, ensuring secure management of health information. Your health data stays under your control and is accessed only with your permission.</p>
        </section>

        <section>
          <h2>iCloud Sync</h2>
          <p>iCloud guidelines are strictly followed. HeartBond uses iCloud only for user-generated content or content that the user explicitly chooses to sync across devices.</p>
        </section>

        <section>
          <h2>Security</h2>
          <p>Health data is handled with the appropriate security measures, including encryption during transmission between your devices.</p>
        </section>

        <section>
          <h2>Compliance</h2>
          <p>All relevant sections of the App Store Review Guidelines, including those related to health, privacy, safety, and functionality, are adhered to.</p>
        </section>

        <section>
          <h2>Medical Disclaimer</h2>
          <p>HeartBond is intended for informational and wellness purposes. It is <strong>not</strong> a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
        </section>

        <section>
          <h2>Regional Considerations</h2>
          <p>Compliance with specific regional regulations regarding health data is ensured, with consideration of health data laws in the territories where the app is available.</p>
        </section>
      </article>
    </main>
  `,
  styles: [`
    .main-stack {
      flex: 1;
      padding-bottom: 2rem;
    }

    .card {
      background: var(--surface);
      padding: 2.5rem 2rem;
      border-radius: 1.25rem;
      box-shadow: var(--card-shadow);
      border: var(--card-border);
    }

    section {
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      color: var(--text-primary);
      border-bottom: 1px solid var(--h2-rule);
      padding-bottom: 0.5rem;
    }

    p {
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: 1rem;
    }

    .lede {
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 2.5rem;
    }

    @media (max-width: 560px) {
      .card {
        padding: 1.5rem 1.25rem;
      }
    }
  `]
})
export class PrivacyComponent {}
