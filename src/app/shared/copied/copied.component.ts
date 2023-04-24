import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AssetPipe } from '@libraries/asset/asset.pipe';
import { SharedAssetPath } from '@libraries/asset/asset.path';

@Component({
    selector: 'jsdaddy-open-source-copied-button',
    standalone: true,
    imports: [NgOptimizedImage, AssetPipe],
    templateUrl: './copied.component.html',
    styleUrls: ['./copied.component.scss'],
})
export class CopiedComponent {
    public readonly assetPathShared = SharedAssetPath.ROOT;
}
