import { enableProdMode, ɵprovideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { environment } from './environments/environment';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { GithubStarsService } from '@libraries/github/github-stars.service';
import { provideHttpClient } from '@angular/common/http';
import { DOMAIN } from '@libraries/token/token';
import { BaseHttpService } from '@libraries/base-http/base-http.service';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        ɵprovideZonelessChangeDetection(),
        provideAnimations(),
        provideRouter([]),
        GithubStarsService,
        provideHttpClient(),
        {
            provide: DOMAIN,
            useValue: [BaseHttpService],
        },
        BaseHttpService,
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                fullLibraryLoader: () => import('highlight.js'),
            },
        },
    ],
}).catch((err) => console.error(err));
