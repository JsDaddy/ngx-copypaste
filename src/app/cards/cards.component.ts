import {
    AfterViewInit,
    Component,
    ElementRef,
    inject,
    Input,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgxCopyPasteDirective } from 'ngx-copypaste';
import { HighlightModule } from 'ngx-highlightjs';
import { AssetPipe } from '@libraries/asset/asset.pipe';
import { ColorPipe } from '@open-source/color/color.pipe';
import { TrackByService } from '@libraries/track-by/track-by.service';
import { ICard } from './cards.interface';
import { CopiedComponent } from '../shared/copied/copied.component';
import { CardType } from './cards.enum';
import { OnScrollService } from '@open-source/on-scroll/on-scroll.service';
import { UnSubscriber } from '@libraries/unsubscriber/unsubscriber.service';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'jsdaddy-open-source-cards',
    standalone: true,
    imports: [
        CommonModule,
        NgOptimizedImage,
        NgxCopyPasteDirective,
        HighlightModule,
        AssetPipe,
        ColorPipe,
        CopiedComponent,
    ],
    providers: [OnScrollService],
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
})
export class CardsComponent extends UnSubscriber implements AfterViewInit {
    @Input() public cardDocs!: ICard[];

    @ViewChildren('cards') public cards!: QueryList<ElementRef>;

    public readonly activeCardId: BehaviorSubject<number> = inject(OnScrollService).activeCardId;
    public readonly cardTypeInput: CardType = CardType.INPUT;
    public readonly cardTypeTextarea: CardType = CardType.TEXTAREA;
    public readonly cardTypeHideInput: CardType = CardType.NONE;
    public readonly trackByPath = inject(TrackByService).trackBy('id');

    private readonly onScrollService = inject(OnScrollService);

    public ngAfterViewInit(): void {
        this.onScrollService.onScroll(this.cards);
    }
}
