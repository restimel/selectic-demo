
<template>
<Selectic
    class="example"
    :class="classNames"
    :style="style"
    :id="id"
    :options="options"
    :value="optionValue"
    :groups="groups"
    :placeholder="optionPlaceholder"
    :title="optionTitle"
    :multiple="multiple"
    :disabled="disabled"
    :selectionIsExcluded="selectionIsExcluded"
    :texts="texts"
    :open="open"
    :noCache="noCache"
    :params="optionParams"

    @input="(val) => $emit('input', val)"
>
    <template v-if="elementChild.length > 0">
        <template v-for="opt of elementChild">
            <optgroup v-if="opt.tagName === 'optgroup'"
                :value="opt.id"
                :label="opt.text"
                :disabled="!!opt.disabled"
                :title="opt.title"
                :icon="opt.icon"
                :key="opt.id"
            >
                <option v-for="subopt of opt.options"
                    :value="subopt.id"
                    :disabled="!!subopt.disabled"
                    :title="subopt.title"
                    :icon="subopt.icon"
                    :key="subopt.id"
                >
                    {{subopt.text}}
                </option>
            </optgroup>
            <option v-else
                :value="opt.id"
                :disabled="!!opt.disabled"
                :title="opt.title"
                :icon="opt.icon"
                :group="opt.group"
                :key="opt.id"
            >
                {{opt.text}}
            </option>
        </template>
    </template>
</Selectic>
</template>
<script>
import Selectic from 'selectic';

const longLength = 1500;
const longNumOptions = new Array(longLength);
const longStringOptions = new Array(longLength);
for (let i = 0; i < longLength; i++) {
    longNumOptions[i] = {
        id: i,
        text: `option #${i}`,
    };
    longStringOptions[i] = {
        id: `id-${i}`,
        text: `option "${i}"`,
    };
}

const emptyOptions = [];
const oneOptions = [{
    id: 'alone',
    text: 'The only option',
}];

const shortNumOptions = [{
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

const shortStringOptions = [{
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
const groupOptions = [{
    id: 'shortInt',
    text: 'short with numerical id',
    options: shortNumOptions,
}, {
    id: 'shortStr',
    text: 'short with string id',
    options: shortStringOptions,
}, {
    id: 'longInt',
    text: 'long with numerical id',
    options: longNumOptions,
}, {
    id: 'longStr',
    text: 'long with string id',
    options: longStringOptions,
}];

const dynOptions = [{
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

const dicList = {
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
    list5: groupOptions,
    groupOptions: groupOptions,
    group: groupOptions,
};
const dicDescription = new Map([
    [emptyOptions, 'no items (is empty)'],
    [oneOptions, 'only one item (with a string id)'],
    [shortNumOptions, '4 items (with numeric id)'],
    [longNumOptions, '1500 items (with numeric id)'],
    [shortStringOptions, '4 items (with string id)'],
    [longStringOptions, '1500 items (with string id)'],
    [groupOptions, '4 groups with differents items (total of 3008 items)'],
]);

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

function getDynId(id) {
    const [prefix, val] = id.toString().split('-');

    if (prefix !== 'dyn') {
        return -1;
    }
    return +val;
}

const nbItemPerDynGroup = 20;
const buildFetchCallback = function(optionVal, delay = 0) {
    let val = Math.abs(optionVal);
    if (optionVal < 0) {
        val *= nbItemPerDynGroup;
    }

    return async function(search, offset, pageSize) {
        // simulate a backend computation
        let total = val;
        let result = [];
        let sample;

        if (search) {
            sample = [];
            const rgx = new RegExp(search.replace(/([-+\[\]\(\){}?^$.])/g, '\$1').replace(/[*]/g, '.*'), 'i');
            for (let idx = offset; idx < val; idx++) {
                const text = `Dynamic option: ${idx}`;
                if (rgx.test(text)) {
                    const item = {
                        id: `dyn-${idx}`,
                        text: text,
                    };
                    if (optionVal < 0) {
                        item.group = `group${Math.floor(idx / nbItemPerDynGroup)}`;
                    }
                    sample.push(item);
                }
            }
            total = sample.length;
        }

        if (offset < total) {
            for (let idx = offset; idx < total && idx < offset + pageSize; idx++) {
                if (search) {
                    result.push(sample[idx - offset]);
                } else {
                    const text = `Dynamic option: ${idx}`;
                    const item = {
                        id: `dyn-${idx}`,
                        text: text,
                    };
                    if (optionVal < 0) {
                        item.group = `group${Math.floor(idx / nbItemPerDynGroup)}`;
                    }
                    result.push(item);
                }
            }
        }

        if (delay) {
            await sleep(delay);
        }
        return {
            total: total,
            result: result,
        };
    };
};

const buildGetItemsCallback = function(optionVal, delay = 0) {
    const val = Math.abs(optionVal);
    return async function(ids) {
        let result = ids.reduce((rslt, id) => {
            const dynId = getDynId(id);
            if (dynId >= 0 && dynId < val) {
                rslt.push({
                    id: id,
                    text: `Dynamic option: ${id}`,
                });
            }
            return rslt;
        }, []);

        if (delay) {
            await sleep(delay);
        }

        return result;
    };
};

export default {
    name: 'WrapSelectic',
    props: {
        params: {
            default() {
                return {};
            },
        },
        child: {
            default() {
                return [];
            },
        },
    },
    data() {
        return {
            needRedraw: false,
        };
    },
    computed: {
        options() {
            const opt = this.params.options;
            if (typeof opt === 'undefined') {
                return;
            }
            if (typeof opt === 'string') {
                const list = dicList[opt];
                if (list) {
                    return list;
                }
                return [];
            }

            return opt;
        },

        classNames() {
            return this.params['class'];
        },
        style() {
            return this.params.style;
        },
        id() {
            return this.params.id;
        },
        multiple() {
            return this.params.multiple;
        },
        disabled() {
            return this.params.disabled;
        },
        optionValue() {
            return this.params.value ?? null;
        },
        optionPlaceholder() {
            return this.params.placeholder;
        },
        optionTitle() {
            return this.params.title;
        },
        groups() {
            return this.params.groups;
        },
        optionParams() {
            const params = Object.assign({}, this.params.params);

            if (typeof params.fetchCallback === 'string') {
                const [,kind, nb, delay] = params.fetchCallback.match(/(\w+?)(\d+)(?:[-:]+(\d+))?/) || [];
                const nbItems = kind === 'group' ? -nb : +nb;
                params.fetchCallback = buildFetchCallback(nbItems, +delay || 0);
            }

            if (typeof params.getItemsCallback === 'string') {
                const [,kind, nb, delay] = params.getItemsCallback.match(/(\w+?)(\d+)(?:[-:]+(\d+))?/) || [];
                const nbItems = kind === 'group' ? -nb : +nb;
                params.getItemsCallback = buildGetItemsCallback(nbItems, +delay || 0);
            }

            return params;
        },
        open() {
            return this.params.open;
        },
        noCache() {
            return this.params.noCache;
        },
        selectionIsExcluded() {
            return this.params.selectionIsExcluded;
        },
        texts() {
            return this.params.texts;
        },

        elementChild() {
            return this.child;
        },

        message() {
            const msg = [];
            const opts = this.params.options;
            const fetchCallback = this.params.params?.fetchCallback;
            const getItemsCallback = this.params.params?.getItemsCallback;

            if (typeof opts === 'string') {
                const list = dicList[opts];
                const content = dicDescription.get(list);
                if (content) {
                    msg.push(`'${opts}' is a shorthand for a list containing ${content}.`);
                } else {
                    msg.push(`'${opts}' is not correctly interpreted by the example page!`);
                }
            }

            if (typeof fetchCallback === 'string') {
                const [,kind, nb, delay = 0] = fetchCallback.match(/(\w+?)(\d+)(?:[-:]+(\d+))?/) || [];
                let content = '';
                let time = '';

                if (kind === 'group') {
                    content = `${nb} groups (with ${nbItemPerDynGroup} items each)`;
                } else {
                    content = `${nb} items`;
                }
                if (delay > 0) {
                    time = `[resolved after a delay of ${delay}ms]`;
                } else {
                    time = `[resolved immediately]`;
                }
                msg.push(`'${fetchCallback}' is a shorthand for a promise which return ${content}. ${time}`);
            }

            if (typeof getItemsCallback === 'string') {
                const [,kind, nb, delay = 0] = getItemsCallback.match(/(\w+?)(\d+)(?:[-:]+(\d+))?/) || [];
                let content = '';
                let time = '';

                if (kind === 'group') {
                    content = `${nb} groups (with ${nbItemPerDynGroup} items each)`;
                } else {
                    content = `${nb} items`;
                }
                if (delay > 0) {
                    time = `[resolved after a delay of ${delay}ms]`;
                } else {
                    time = `[resolved immediately]`;
                }
                msg.push(`'${getItemsCallback}' is a shorthand for a promise which get items from ${content}. ${time}`);
            }

            return msg.join('\n');
        },
    },
    methods: {
        sendInfo() {
            this.$emit('info', {
                needRedraw: this.needRedraw,
                message: this.message,
            });
        },
    },
    watch: {
        needRedraw() {
            this.sendInfo();
        },
        message() {
            this.sendInfo();
        },
        multiple() {
            this.needRedraw = true;
        },
        'params.params'(newParams, oldParams) {
            try {
                if (JSON.stringify(oldParams) !== JSON.stringify(newParams)) {
                    this.needRedraw = true;
                }
            } catch(e) {
                return;
            }
        },
    },
    created() {
        this.sendInfo();
    },
    components: {
        Selectic,
    },
}
</script>
<style>
.example {
    max-width: 500px;
}
</style>
