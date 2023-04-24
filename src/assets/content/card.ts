import { ICard } from '../../app/cards/cards.interface';

export const Card: ICard[] = [
    {
        header: 'Input control',
        code: `<input ngxCopyPaste #cp="copy"><button (click)="cp.copy()" >Copy</button>`,
        id: 1,
        anchor: 'input',
        isInput: true,
    },
    {
        header: 'Textarea control',
        code: `<textarea  ngxCopyPaste rows="1" #cp="copy"></textarea><button (click)="cp.copy()">Copy</button>`,
        id: 2,
        anchor: 'textarea',
        isTextarea: true,
    },
    {
        header: 'Element own text',
        code: `<p ngxCopyPaste #cp="copy">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><button  (click)="cp.copy()" >Copy</button>`,
        id: 3,
        anchor: 'element',
        text12: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
        header: 'All text in element',
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
