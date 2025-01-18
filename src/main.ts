import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { NgcCookieConsentModule, provideNgcCookieConsent, NgcCookieConsentConfig } from 'ngx-cookieconsent';

// Define the configuration for the cookie consent

const cookieConsentConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost'// it is recommended to set your domain, for cookies to work properly
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#009193'
    }
  },
  theme: 'edgeless',
  type: 'opt-out',
  layout: 'my-custom-layout',
  layouts: {
    "my-custom-layout": '{{messagelink}}{{compliance}}'
  },
  elements:{
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}}
      <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{cookiePolicyHref}}" target="_blank" rel="noopener">{{cookiePolicyLink}}</a>,
      <a aria-label="learn more about our privacy policy" tabindex="1" class="cc-link" href="{{privacyPolicyHref}}" target="_blank" rel="noopener">{{privacyPolicyLink}}</a> und unsere
      <a aria-label="learn more about our terms of service" tabindex="2" class="cc-link" href="{{tosHref}}" target="_blank" rel="noopener">{{tosLink}}</a> gelesen und verstanden haben.
    </span>
    `,
  },
  content:{
    message: 'Durch die Nutzung unserer Website bestätigen Sie, dass Sie unsere ',
    allow: 'Cookies erlauben',
    deny: 'Cookies ablehnen',
    link: 'Mehr erfahren',

    cookiePolicyLink: 'Cookie-Richtlinie',
    cookiePolicyHref: '/static-pages/cookie-policy.html',

    privacyPolicyLink: 'Datenschutzrichtlinie',
    privacyPolicyHref: '/static-pages/privacy-policy.html',

    tosLink: 'Nutzungsbedingungen',
    tosHref: '/static-pages/terms-of-service.html',
  }
};

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(NgcCookieConsentModule), // Import the module
    provideNgcCookieConsent(cookieConsentConfig), // Pass the configuration here
  ],
}).catch((err) => console.error(err));
