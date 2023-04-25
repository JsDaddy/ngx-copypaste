import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopiedComponent } from '../copied/copied.component';
import { NgxCopyPasteDirective } from 'ngx-copypaste';
import { CardType } from '../../cards/cards.enum';

@Component({
    selector: 'jsdaddy-open-source-input',
    standalone: true,
    imports: [CommonModule, CopiedComponent, NgxCopyPasteDirective],
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent {
    @Input() public cardType!: string;
    public readonly cardTypeInput: CardType = CardType.INPUT;
    public readonly cardTypeTextarea: CardType = CardType.TEXTAREA;
}
