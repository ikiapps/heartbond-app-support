import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  template: `
    <header class="site-header site-header--compact">
      <div class="container header-inner">
        <h1>Getting Started</h1>
        <app-navbar [minimal]="true" variant="privacy"></app-navbar>
      </div>
    </header>

    <main id="main" class="container main-stack">
      <article class="card">
        <section>
          <h2>iOS Device Setup</h2>
          <img src="images/download-days-and-health-access.png" alt="Steps to download days and allow read access" class="instruction-img">
          <p class="lede">Download days of data by allowing access to Health for heartrate graphing.</p>
        </section>

        <section>
          <h2>Automatic iCloud Sync</h2>
          <img src="images/mac-running-app.png" alt="Mac running the HeartBond app" class="instruction-img">
          <p>Your heartrate data seamlessly syncs across all your devices running the app through iCloud.</p>
          <p>For the best synchronization experience, we recommend keeping the apps open during this process.</p>
          <div class="note">
            <p><strong>Note:</strong> Due to factors beyond our control, synchronization might occasionally seem unresponsive but then suddenly resolve itself. VPN usage can affect syncing. We appreciate your patience and understanding in these moments.</p>
          </div>
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
      margin-bottom: 3rem;
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
      border-bottom: 2px solid var(--h2-rule);
      padding-bottom: 0.5rem;
    }

    .instruction-img {
      display: block;
      max-width: 100%;
      height: auto;
      border-radius: 0.75rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    p {
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: 1rem;
    }

    .lede {
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--text-primary);
    }

    .note {
      margin-top: 1.5rem;
      padding: 1rem;
      background: rgba(var(--accent-green-rgb), 0.05);
      border-left: 4px solid var(--accent-green);
      border-radius: 0.25rem;
    }

    @media (max-width: 560px) {
      .card {
        padding: 1.5rem 1.25rem;
      }
    }
  `]
})
export class GettingStartedComponent {}
