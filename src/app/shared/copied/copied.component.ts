import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AssetPipe } from '@libraries/asset/asset.pipe';
import { CopiedAssetPath } from './copied.path';

@Component({
    selector: 'jsdaddy-open-source-copied-button',
    standalone: true,
    imports: [NgOptimizedImage, AssetPipe],
    templateUrl: './copied.component.html',
    styleUrls: ['./copied.component.scss'],
})
export class CopiedComponent {
    public readonly assetPath = CopiedAssetPath.COPIED;
}
