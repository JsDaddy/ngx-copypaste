import { Component, effect, ElementRef, inject, input, viewChildren } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { NgxCopyPasteDirective } from 'ngx-copypaste';
import { HighlightModule } from 'ngx-highlightjs';
import { AssetPipe } from '@libraries/asset/asset.pipe';
import { ColorPipe } from '@open-source/color/color.pipe';
import { CardItem } from './cards.type';
import { CopiedComponent } from '../shared/copied/copied.component';
import { CardType } from './cards.enum';
import { ScrollService } from '@open-source/scroll/scroll.service';
import { OpenSourcePath } from '@open-source/path/open-source.path';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'jsdaddy-open-source-cards',
    standalone: true,
    imports: [
        NgOptimizedImage,
        NgxCopyPasteDirective,
        HighlightModule,
        AssetPipe,
        ColorPipe,
        CopiedComponent,
    ],
    providers: [ScrollService],
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
    public cardDocs = input<CardItem[]>();
    public cards = viewChildren<string, ElementRef<HTMLElement>>('cards', {
        read: ElementRef,
    });

    public readonly openSourceCardsPath = OpenSourcePath.CARDS;
    public readonly cardTypeInput: CardType = CardType.INPUT;
    public readonly cardTypeTextarea: CardType = CardType.TEXTAREA;
    public readonly cardTypeNone: CardType = CardType.NONE;
    public readonly cardTypeSuccess: CardType = CardType.SUCCESS;

    private readonly scrollService = inject(ScrollService);
    public readonly activeCardId = toSignal(this.scrollService.activeCard$);
    public constructor() {
        effect(() => {
            this.scrollService.onScroll(this.cards());
        });
    }
}
