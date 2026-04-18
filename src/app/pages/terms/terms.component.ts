import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  template: `
    <header class="site-header site-header--compact">
      <div class="container header-inner">
        <h1>Terms of Service</h1>
        <app-navbar [minimal]="true" variant="privacy"></app-navbar>
      </div>
    </header>

    <main id="main" class="container main-stack">
      <article class="card">
        <p class="lede">Last updated: April 2026</p>
        
        <section>
          <h2>Scope of Service</h2>
          <p>HeartBond is designed for heart rate graphing and personal health tracking. It is <strong>not</strong> a medical device and should not be used to diagnose, treat, or manage any medical condition or disorder. Please consult with a healthcare professional for medical care.</p>
        </section>

        <section>
          <h2>Data Accuracy</h2>
          <p>The heart data displayed comes from devices connected to Apple Health and is based on the technology and methods used by those specific devices. It is not verified by HeartBond, nor is it intended to be a substitute for professional medical advice.</p>
        </section>

        <section>
          <h2>Data Processing</h2>
          <p>We graph your data according to five-minute intervals, displaying the highest and lowest samples for each time bin in units of bpm. We do this to make the graph easier to read while maintaining performance to show you many days of data at once.</p>
        </section>

        <section>
          <h2>Device Integration</h2>
          <p>For more information on the methods used to collect this data, please consult the documentation of the devices connected to Health.</p>
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
export class TermsComponent {}
