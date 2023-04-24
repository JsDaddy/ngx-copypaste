import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AssetPipe } from '@libraries/asset/asset.pipe';

@Component({
    selector: 'jsdaddy-open-source-copied-button',
    standalone: true,
    imports: [NgOptimizedImage, AssetPipe],
    templateUrl: './copied.component.html',
    styleUrls: ['./copied.component.scss'],
})
export class CopiedComponent {
    public readonly additionalPath = 'shared';
}
