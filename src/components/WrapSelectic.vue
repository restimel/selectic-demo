
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
import { defineComponent } from 'vue';

import {
    dicList,
    dicDescription,
} from '@/helpers/optionsData';
import {
    buildFetchCallback,
    buildGetItemsCallback,
    nbItemPerDynGroup,
} from '@/helpers/tools';

export default defineComponent({
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
            return this.params.value || null;
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
            const fetchCallback = this.params.params && this.params.params.fetchCallback;
            const getItemsCallback = this.params.params && this.params.params.getItemsCallback;

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
});
</script>
<style>
.example {
    max-width: 500px;
}
</style>
