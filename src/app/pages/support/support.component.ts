import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterLink],
  template: `
    <header class="site-header site-header--home">
      <div class="container logo-container">
        <img class="hero-logo" src="images/icon-384.png" width="192" height="192" alt="HeartBond Logo" decoding="async" fetchpriority="high">
      </div>
      <app-navbar [minimal]="false" variant="support"></app-navbar>
    </header>

    <main id="main" class="container main-stack">
      <h1 class="visually-hidden">HeartBond: help, downloads, and resources</h1>
      
      <section id="download" class="card" aria-labelledby="download-heading">
        <h2 id="download-heading">Discover The Bigger Picture</h2>
        <p class="lede">Heartrate Graphing for Apple Health. Experience clarity and insight with HeartBond, the premier heart rate graphing app that reveals the bigger picture of your health and fitness.</p>
        
        <div class="store-actions">
          <a class="store-badge" href="https://apps.apple.com/app/apple-store/id6449156557?pt=126040921&ct=Get-HeartBond&mt=8" rel="noopener noreferrer" aria-label="Download on the App Store">
            <img src="images/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg" alt="Download on the App Store" height="40">
          </a>
          <a class="store-badge" href="https://apps.apple.com/app/apple-store/id6449156557?pt=126040921&ct=Get-HeartBond&mt=8" rel="noopener noreferrer" aria-label="Download on the Mac App Store">
            <img src="images/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_wht_092917.svg" alt="Download on the Mac App Store" height="40">
          </a>
          <a class="store-badge" href="https://www.apple.com/health/" rel="noopener noreferrer" aria-label="Works with Apple Health">
            <img src="images/Apple_Health_badge_US-UK_blk_sRGB.svg" alt="Works with Apple Health" height="40">
          </a>
        </div>
      </section>

      <section class="card feature-section">
        <img src="images/phone-landscape-brief-description-dark-phone.png" alt="HeartBond App Features" class="feature-img">
        <p class="lede">
          Tired of tiny bubble heart rate graphs? HeartBond transforms the way you understand, connect with, and monitor your heart's rhythms on iPhone, iPad, and Mac. With beautiful, customizable graphs and seamless integration with your favorite wearables like the Apple Watch and Oura Ring.
        </p>
      </section>

      <section id="support" class="card">
        <h2>Get in touch</h2>
        <p class="lede">If you have any questions, concerns, or need help with anything related to HeartBond, please visit our discussions page or email us.</p>
        <div class="action-buttons">
          <a href="https://github.com/ikiapps/HeartBond-Support/discussions" class="button" rel="noopener noreferrer">Visit Discussions</a>
          <a [href]="'mailto:' + supportEmail" class="button secondary-button">Email support</a>
        </div>
        
        <div class="support-list">
          <p>We are here to assist you with:</p>
          <ul>
            <li>Understanding your heart/pulse rate data</li>
            <li>Syncing issues across devices</li>
            <li>Customizing colors and graph sizes</li>
            <li>Any general inquiries about the app</li>
          </ul>
        </div>
      </section>

      <section class="card">
        <h2>Resources</h2>
        <p class="lede">Learn more about how to get the most out of HeartBond.</p>
        <a routerLink="/getting-started" class="button">Getting Started Guide</a>
      </section>
    </main>
  `,
  styles: [`
    .site-header--home {
      background: var(--bg-color);
      color: var(--text-primary);
      padding: 1.5rem 0 0;
      margin-bottom: 0;
    }

    .logo-container {
      display: flex;
      justify-content: center;
      padding: 1rem 0;
    }

    .hero-logo {
      display: block;
      max-width: 192px;
      height: auto;
    }

    .main-stack {
      flex: 1;
      padding-bottom: 2rem;
      position: relative;
    }

    .card {
      background: var(--surface);
      padding: 2rem 1.75rem;
      border-radius: 1.25rem;
      box-shadow: var(--card-shadow);
      border: var(--card-border);
      margin-bottom: 1.5rem;
    }

    h2 {
      font-size: 1.35rem;
      margin-bottom: 1.25rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--h2-rule);
      color: var(--accent-green-dark);
    }

    .lede {
      color: var(--text-secondary);
      margin-bottom: 1rem;
      font-size: 1.02rem;
    }

    .store-actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 1.25rem;
      margin-top: 1.5rem;
    }

    .store-badge img {
      display: block;
      height: 40px;
      width: auto;
    }

    .feature-section {
      text-align: center;
    }

    .feature-img {
      max-width: 100%;
      height: auto;
      border-radius: 0.75rem;
      margin-bottom: 1.5rem;
    }

    .action-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: var(--action-min-height);
      padding: var(--action-pad-y) var(--action-pad-x);
      background-color: var(--accent-green);
      color: var(--on-accent);
      border-radius: 2rem;
      font-weight: 600;
      border: none;
      cursor: pointer;
      text-decoration: none;
    }

    .secondary-button {
      background-color: var(--accent-rose);
    }

    .support-list {
      margin-top: 1.5rem;
      color: var(--text-secondary);
    }

    .support-list ul {
      margin-top: 0.5rem;
      padding-left: 1.5rem;
    }

    .support-list li {
      margin-bottom: 0.5rem;
    }

    @media (max-width: 560px) {
      .card {
        padding: 1.5rem 1.25rem;
      }
      .store-actions {
        flex-direction: column;
      }
    }
  `]
})
export class SupportComponent implements OnInit {
  supportEmail = "";

  ngOnInit() {
    this.supportEmail = this.decodeAddr();
  }

  private decodeAddr() {
    const bytes = [115, 117, 112, 112, 111, 114, 116, 64, 105, 107, 105, 97, 112, 112, 115, 46, 99, 111, 109];
    return String.fromCharCode.apply(null, bytes);
  }
}
