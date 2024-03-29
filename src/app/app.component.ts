import { Component } from '@angular/core';
import { HeaderComponent } from '@open-source/header/header.component';
import { LinkPath } from '@libraries/link/link.path';
import { SubHeaderComponent } from '@open-source/sub-header/sub-header.component';
import { CardsComponent } from './cards/cards.component';
import { IListItem } from '@open-source/accordion/content.interfaces';
import { lists } from '../assets/content/lists';
import { AccordionComponent } from '@open-source/accordion/accordion.component';
import { ICard } from './cards/cards.interface';
import { FooterComponent } from '@open-source/footer/footer.component';
import { Card } from '../assets/content/card';
import { VersionToken } from '@libraries/version/version.token';
declare const VERSION: string;

@Component({
    selector: 'jsdaddy-open-source-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        HeaderComponent,
        HeaderComponent,
        SubHeaderComponent,
        CardsComponent,
        AccordionComponent,
        FooterComponent,
    ],
    providers: [{ provide: VersionToken, useValue: VERSION }],
})
export class AppComponent {
    public readonly card: ICard[] = Card;
    public readonly githubMaskLink = LinkPath.NGX_COPYPASTE;
    public readonly lists: IListItem[] = lists;
    public readonly title = 'Ngx-Copypaste';
    public readonly subtitle = 'A pure and awesome copy paste directive for Angular';
    public readonly chips = [
        'Clipboard',
        'Angular',
        'Typescript',
        'Ngx',
        'Copypaste',
        'AngularClipboard',
    ];
}
