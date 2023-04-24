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
import { UnSubscriber } from '@libraries/unsubscriber/unsubscriber.service';
import { ScrollService } from '@open-source/service/scroll.service';
import { Router } from '@angular/router';
import { debounceTime, fromEvent, takeUntil } from 'rxjs';
import { CopiedComponent } from '../shared/copied/copied.component';

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
    providers: [ScrollService],
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
})
export class CardsComponent extends UnSubscriber implements AfterViewInit {
    @Input() public cardDocs!: ICard[];
    @Input() public cardExamples!: ICard[];

    @ViewChildren('cards') public cards!: QueryList<ElementRef>;

    public activeCardId = 1;

    public readonly trackByPath = inject(TrackByService).trackBy('id');

    private readonly scrollService = inject(ScrollService);
    private readonly router = inject(Router);

    public ngAfterViewInit(): void {
        fromEvent(document, 'scroll')
            .pipe(takeUntil(this.unsubscribe$$), debounceTime(100))
            .subscribe(() => {
                const scrollIdCard = this.cards.find((e) =>
                    this.scrollService.isInViewport(e.nativeElement)
                )?.nativeElement.id;
                if (this.activeCardId !== Number(scrollIdCard)) {
                    this.activeCardId = Number(scrollIdCard);
                    this.router.navigate(['/'], {
                        fragment: scrollIdCard,
                    });
                }
            });
    }
}
