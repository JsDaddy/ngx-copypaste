import { CardItem } from '../../app/cards/cards.type';
import { CardType } from '../../app/cards/cards.enum';

export const Card: CardItem[] = [
    {
        header: 'Input control',
        code: `<input ngxCopyPaste #cp="copy"><button (click)="cp.copy()" >Copy</button>`,
        id: 1,
        anchor: 'input',
        cardType: CardType.INPUT,
    },
    {
        header: 'Textarea control',
        code: `<textarea  ngxCopyPaste rows="1" #cp="copy"></textarea><button (click)="cp.copy()">Copy</button>`,
        id: 2,
        anchor: 'textarea',
        cardType: CardType.TEXTAREA,
    },
    {
        header: 'Emit Success cb',
        code: `<input ngxCopyPaste #cp="copy" (successCb)="urFunction($event)"><button (click)="cp.copy()" >Copy</button>`,
        id: 5,
        anchor: 'success',
        cardType: CardType.SUCCESS,
    },
    {
        header: 'Element own text',
        code: `<p ngxCopyPaste #cp="copy">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><button  (click)="cp.copy()" >Copy</button>`,
        id: 3,
        anchor: 'element',
        cardType: CardType.NONE,
        text12: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
        header: 'All text in element',
        cardType: CardType.NONE,
        code: `<div ngxCopyPaste #cp="copy"> <h1>Lorem ipsum</h1>
                 <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    rutrum augue at ante sollicitudin posuere. Pellentesque congue
                    consequat enim quis luctus.
                 </p>
                  <div>
                  <h2>Lorem ipsum</h2>
                  </div>
              </div>
              <button  (click)="cp.copy()" >Copy</button>`,
        id: 4,
        anchor: 'all-text',
        text18: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        text16: 'Pellentesque congue consequat enim quis luctus',
        text14: 'Nullam rutrum augue at ante sollicitudin posuere',
    },
];
