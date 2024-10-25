import { IListItem } from '@open-source/accordion/content.types';

export const lists: IListItem[] = [
    {
        header: 'Controls',
        id: 1,
        defaultSvg: 'options',
        activeSvg: 'options-active',
        whiteChevron: 'white-chevron-down',
        yellowChevron: 'yellow-chevron-down',
        text: [
            {
                content: 'Input control',
                id: 1,
                scrollTo: 'input',
            },
            {
                content: 'Textarea control',
                id: 2,
                scrollTo: 'textarea',
            },
            {
                content: 'Success function',
                id: 5,
                scrollTo: 'success',
            },
            {
                content: 'Element own text',
                id: 3,
                scrollTo: 'element',
            },
            {
                content: 'All text in element',
                id: 4,
                scrollTo: 'all-text',
            },
        ],
    },
];
