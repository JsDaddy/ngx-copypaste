import { Component } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { AssetPipe } from '@libraries/asset/asset.pipe';
import { SharedAssetPath } from './copied.path';
import { delay, of, takeUntil } from 'rxjs';
import { UnSubscriber } from '@libraries/unsubscriber/unsubscriber.service';

@Component({
    selector: 'jsdaddy-open-source-copied-button',
    standalone: true,
    imports: [NgOptimizedImage, AssetPipe, NgClass],
    templateUrl: './copied.component.html',
    styleUrls: ['./copied.component.scss'],
})
export class CopiedComponent extends UnSubscriber {
    public readonly assetPath = SharedAssetPath.COPIED;
    public copyButtonClass = 'non-active';

    public copyText(): void {
        this.copyButtonClass = 'active';
        of({})
            .pipe(delay(1000), takeUntil(this.unsubscribe$$))
            .subscribe(() => {
                this.copyButtonClass = 'non-active';
            });
    }
}
