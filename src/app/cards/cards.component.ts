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
import { ScrollService } from '@open-source/service/scroll.service';
import { CopiedComponent } from '../shared/copied/copied.component';
import { IsShowInput } from './cards.enum';
import { OnScrollService } from '@open-source/on-scroll/on-scroll.service';
import { Router } from '@angular/router';
import { UnSubscriber } from '@libraries/unsubscriber/unsubscriber.service';
import { takeUntil } from 'rxjs';

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
    providers: [ScrollService, OnScrollService],
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
})
export class CardsComponent extends UnSubscriber implements AfterViewInit {
    @Input() public cardDocs!: ICard[];

    @ViewChildren('cards') public cards!: QueryList<ElementRef>;

    public activeCardId = 1;

    public readonly isShowInput = IsShowInput.INPUT;
    public readonly isShowTextarea = IsShowInput.TEXTAREA;
    public readonly hideInput = IsShowInput.NONE;
    public readonly trackByPath = inject(TrackByService).trackBy('id');

    private readonly onScrollService = inject(OnScrollService);
    private readonly router = inject(Router);

    public ngAfterViewInit(): void {
        this.onScrollService.onScroll(this.cards);
        this.router.events.pipe(takeUntil(this.unsubscribe$$)).subscribe(() => {
            this.activeCardId = this.onScrollService.activeCardId;
        });
    }
}
