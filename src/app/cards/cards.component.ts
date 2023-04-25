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
import { Observable } from 'rxjs';
import { ScrollService } from '@open-source/scroll/scroll.service';
import { OpenSourcePath } from '@open-source/path/open-source.path';
import {InputComponent} from "../shared/input/input.component";

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
        InputComponent,
    ],
    providers: [ScrollService],
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements AfterViewInit {
    @Input() public cardDocs!: ICard[];

    @ViewChildren('cards') public cards!: QueryList<ElementRef>;

    public readonly activeCardId$: Observable<number> = inject(ScrollService).activeCard$;
    public readonly assetPath = OpenSourcePath.OPEN_SOURCE;
    public readonly cardTypeInput: CardType = CardType.INPUT;
    public readonly cardTypeTextarea: CardType = CardType.TEXTAREA;
    public readonly cardTypeNone: CardType = CardType.NONE;
    public readonly trackByPath = inject(TrackByService).trackBy('id');

    private readonly scrollService = inject(ScrollService);

    public ngAfterViewInit(): void {
        this.scrollService.onScroll(this.cards);
    }
}
