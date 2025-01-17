import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BannerComponent} from "./banner/banner.component";
import {MatCardModule} from '@angular/material/card';
import {CardGridComponent} from "./card-grid/card-grid.component";
import {FooterComponent} from "./footer/footer.component";
import {InteractiveBannerComponent} from "./interactive-banner/interactive-banner.component";
import {
  NgcCookieConsentModule,
  NgcCookieConsentService,
  NgcInitializationErrorEvent,
  NgcInitializingEvent, NgcNoCookieLawEvent, NgcStatusChangeEvent
} from 'ngx-cookieconsent';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  imports: [BannerComponent, RouterOutlet, MatCardModule, CardGridComponent, FooterComponent, InteractiveBannerComponent,
    NgcCookieConsentModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'softinnotec-webpage-app';

  loading: boolean = true;

  //keep refs to subscriptions to be able to unsubscribe later
  private popupOpenSubscription!: Subscription;
  private popupCloseSubscription!: Subscription;
  private initializingSubscription!: Subscription;
  private initializedSubscription!: Subscription;
  private initializationErrorSubscription!: Subscription;
  private statusChangeSubscription!: Subscription;
  private revokeChoiceSubscription!: Subscription;
  private noCookieLawSubscription!: Subscription;

  ccService = inject(NgcCookieConsentService)

  ngOnInit(): void {
    // subscribe to cookieconsent observables to react to main events
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.initializingSubscription = this.ccService.initializing$.subscribe(
      (event: NgcInitializingEvent) => {
        // the cookieconsent is initilializing... Not yet safe to call methods like `NgcCookieConsentService.hasAnswered()`
        console.log(`initializing: ${JSON.stringify(event)}`);
      });

    this.initializedSubscription = this.ccService.initialized$.subscribe(
      () => {
        // the cookieconsent has been successfully initialized.
        // It's now safe to use methods on NgcCookieConsentService that require it, like `hasAnswered()` for eg...
        console.log(`initialized: ${JSON.stringify(event)}`);
      });

    this.initializationErrorSubscription = this.ccService.initializationError$.subscribe(
      (event: NgcInitializationErrorEvent) => {
        // the cookieconsent has failed to initialize...
        console.log(`initializationError: ${JSON.stringify(event.error?.message)}`);
      });

    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
      () => {
        console.log('Revoking')
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
      (event: NgcNoCookieLawEvent) => {
        // you can use this.ccService.getConfig() to do stuff...
      });
    setTimeout(() => {
      // Simulate loading completion, can be replaced with actual logic
      this.loading = false;
      this.ccService.open();
// Call open after init
    }, 100); // Adjust the time to match your app's load time  }
  }

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializingSubscription.unsubscribe();
    this.initializedSubscription.unsubscribe();
    this.initializationErrorSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }

}
