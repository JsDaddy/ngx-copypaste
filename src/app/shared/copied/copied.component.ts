import { Component, DestroyRef, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AssetPipe } from '@libraries/asset/asset.pipe';
import { SharedAssetPath } from './copied.path';
import { delay, of } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'jsdaddy-open-source-copied-button',
    standalone: true,
    imports: [NgOptimizedImage, AssetPipe],
    templateUrl: './copied.component.html',
    styleUrls: ['./copied.component.scss'],
})
export class CopiedComponent {
    public readonly assetPath = SharedAssetPath.COPIED;
    public copyButtonClass = 'non-active';

    private readonly destroyRef = inject(DestroyRef);

    public copyText(): void {
        this.copyButtonClass = 'active';
        of({})
            .pipe(delay(1000), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                this.copyButtonClass = 'non-active';
            });
    }
}
