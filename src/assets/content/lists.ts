import { IListItem } from '@open-source/accordion/content.interfaces';

export const lists: IListItem[] = [
    {
        header: 'Common cases',
        id: 1,
        defaultSvg: 'common-cases',
        activeSvg: 'common-cases-active',
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
