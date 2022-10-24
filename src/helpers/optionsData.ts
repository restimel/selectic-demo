
const longLength = 1500;
export const longNumOptions = new Array(longLength);
export const longStringOptions = new Array(longLength);
export const longStringLongOptions = new Array(longLength);
const textSuffix1 = ' --- short text added';
const textSuffix2 = ' --- this is a long text added to the description which should need scrolling to be readable';
for (let i = 0; i < longLength; i++) {
    longNumOptions[i] = {
        id: i,
        text: `option #${i}`,
    };
    longStringOptions[i] = {
        id: `id-${i}`,
        text: `option "${i}"`,
    };
    longStringLongOptions[i] = {
        id: `id-${i}`,
        text: `option "${i}"${i % 2 ? textSuffix1 : textSuffix2}`,
    };
}

export const emptyOptions = [];
export const oneOptions = [{
    id: 'alone',
    text: 'The only option',
}];

export const shortNumOptions = [{
    id: 0,
    text: 'First option',
}, {
    id: 1,
    text: 'Second option',
}, {
    id: 2,
    text: 'Third option',
}, {
    id: 3,
    text: 'Fourth option',
}];

export const shortStringOptions = [{
    id: 'first',
    text: 'First option',
}, {
    id: 'second',
    text: 'Second option',
}, {
    id: 'third',
    text: 'Third option',
}, {
    id: 'fourth',
    text: 'Fourth option',
}];

export const shortExclusiveOptions = [{
    id: 'notExclusive1',
    text: 'normal option 1',
    exclusive: false,
}, {
    id: 'notExclusive2',
    text: 'normal option 2',
    exclusive: false,
}, {
    id: 'exclusive1',
    text: 'exclusive option 1',
    exclusive: true,
}, {
    id: 'notExclusive3',
    text: 'normal option 3',
    exclusive: false,
}, {
    id: 'exclusive2',
    text: 'exclusive option 2',
    exclusive: true,
}];
export const groupOptions = [{
    id: 'shortInt',
    text: 'short with numerical id',
    options: shortNumOptions,
}, {
    id: 'shortStr',
    text: 'short with string id',
    options: shortStringOptions,
}, {
    id: 'shortExclusiveOptions',
    text: 'short with exclusive item',
    options: shortExclusiveOptions,
}, {
    id: 'longInt',
    text: 'long with numerical id',
    options: longNumOptions,
}, {
    id: 'longStr',
    text: 'long with string id',
    options: longStringOptions,
}, {
    id: 'longStrLong',
    text: 'long list with long description',
    options: longStringLongOptions,
}];

export const dynOptions = [{
    id: '',
    text: 'no dynamic options',
}, {
    id: 0,
    text: '0 items (empty list)',
}, {
    id: 10,
    text: '10 items',
}, {
    id: 100,
    text: '100 items',
}, {
    id: 1000,
    text: '1000 items',
}, {
    id: 10000,
    text: '10.000 items',
}, {
    id: -5,
    text: '100 items in 5 groups',
}];

export const innerElementOptions = [{
    id: 0,
    text: 'no inner element options',
}, {
    id: 2,
    text: '2 items',
}, {
    id: 10,
    text: '10 items',
}, {
    id: -4,
    text: '20 items in 4 groups',
}];

export const dicList = {
    list0: emptyOptions,
    emptyOptions: emptyOptions,
    empty: emptyOptions,
    list01: oneOptions,
    oneOptions: oneOptions,
    one: oneOptions,
    list1: shortNumOptions,
    shortNumOptions: shortNumOptions,
    shortNum: shortNumOptions,
    list2: longNumOptions,
    longNumOptions: longNumOptions,
    longNum: longNumOptions,
    list3: shortStringOptions,
    shortStringOptions: shortStringOptions,
    shortString: shortStringOptions,
    list4: longStringOptions,
    longStringOptions: longStringOptions,
    longString: longStringOptions,
    longStringLong: longStringLongOptions,
    list5: groupOptions,
    groupOptions: groupOptions,
    group: groupOptions,
    list6: shortExclusiveOptions,
    exclusive: shortExclusiveOptions,
};

export const dicDescription = new Map([
    [emptyOptions, 'no items (is empty)'],
    [oneOptions, 'only one item (with a string id)'],
    [shortNumOptions, `${shortNumOptions.length} items (with numeric id)`],
    [longNumOptions, `${longNumOptions.length} items (with numeric id)`],
    [shortStringOptions, `${shortStringOptions.length} items (with string id)`],
    [longStringOptions, `${longStringOptions.length} items (with string id)`],
    [longStringLongOptions, `${longStringLongOptions.length} items (with string id) and long description`],
    [groupOptions, `${groupOptions.length} groups with different items (total of 3008 items)`],
    [shortExclusiveOptions, `${shortExclusiveOptions.length} items with some items which have exclusive option (for multiple mode)`],
]);
