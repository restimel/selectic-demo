
<template>
<div class="param">
    <fieldset>
        <legend>
            parameters
        </legend>
        <br>
        <label>
            options
            <Selectic
                :value="optionType"
                :options="optionList"
                @change="(val) => optionType = val"
            />
        </label>
        <br>
        <label>
            Dynamics options
            <span class="info" title="only apply at component creation">(at creation)</span>
            <Selectic
                :value="dynOptionsVal"
                :options="dynOptions"
                @change="(val) => dynOptionsVal = val"
            />
        </label>
        <br>
        <label>
            Child element options
            <Selectic
                :value="innerElementOptionsVal"
                :options="innerElementOptions"
                @change="(val) => innerElementOptionsVal = val"
            />
        </label>
        <br>
        <label>
            title <input type="text" v-model="optionTitle">
        </label>
        <label>
            placeholder <input type="text" v-model="optionPlaceholder">
        </label>
        <label>
            <input type="checkbox" v-model="disabled"> disabled
        </label>
        <label>
            <input type="checkbox" v-model="multiple"> multiple
            <span class="info" title="only apply at component creation">(at creation)</span>
        </label>
        <br>
        <details>
            <summary>
                params
            </summary>
            <label>
                hideFilter
                <span class="info" title="only apply at component creation">(at creation)</span>
                <Selectic
                    :value="optionParams.hideFilter"
                    :options="[{
                        id: 'auto',
                        text: 'auto',
                    }, {
                        id: true,
                        text: 'true',
                    }, {
                        id: false,
                        text: 'false',
                    }]"
                    :params="{
                        allowClearSelection: true,
                    }"
                    @change="(val) => optionParams.hideFilter = val"
                />
            </label>
            <label>
                allowClearSelection
                <span class="info" title="only apply at component creation">(at creation)</span>
                <Selectic
                    :value="optionParams.allowClearSelection"
                    :options="[{
                        id: true,
                        text: 'true',
                    }, {
                        id: false,
                        text: 'false',
                    }]"
                    :params="{
                        allowClearSelection: true,
                    }"
                    @change="(val) => optionParams.allowClearSelection = val"
                />
            </label>
            <label>
                autoSelect
                <span class="info" title="only apply at component creation">(at creation)</span>
                <Selectic
                    :value="optionParams.autoSelect"
                    :options="[{
                        id: true,
                        text: 'true',
                    }, {
                        id: false,
                        text: 'false',
                    }]"
                    :params="{
                        allowClearSelection: true,
                    }"
                    @change="(val) => optionParams.autoSelect = val"
                />
            </label>
            <label>
                autoDisabled
                <span class="info" title="only apply at component creation">(at creation)</span>
                <Selectic
                    :value="optionParams.autoDisabled"
                    :options="[{
                        id: true,
                        text: 'true',
                    }, {
                        id: false,
                        text: 'false',
                    }]"
                    :params="{
                        allowClearSelection: true,
                    }"
                    @change="(val) => optionParams.autoDisabled = val"
                />
            </label>
            <label>
                strictValue
                <span class="info" title="only apply at component creation">(at creation)</span>
                <Selectic
                    :value="optionParams.strictValue"
                    :options="[{
                        id: true,
                        text: 'true',
                    }, {
                        id: false,
                        text: 'false',
                    }]"
                    :params="{
                        allowClearSelection: true,
                    }"
                    @change="(val) => optionParams.strictValue = val"
                />
            </label>
            <label>
                selectionOverflow
                <span class="info" title="only apply at component creation">(at creation)</span>
                <Selectic
                    :value="optionParams.selectionOverflow"
                    :options="[{
                        id: 'multiline',
                        text: 'multiline',
                    }, {
                        id: 'collapsed',
                        text: 'collapsed',
                    }]"
                    :params="{
                        allowClearSelection: true,
                    }"
                    @change="(val) => optionParams.selectionOverflow = val"
                />
            </label>
             <label>
                emptyValue
                <span class="info" title="only apply at component creation">(at creation)</span>
                <input
                    type="text"
                    :value="selectionOverflow"
                    :class="{'has-error': !!errorSelectionOverflow}"
                    :title="errorSelectionOverflow"
                    placeholder="Enter value in JSON format"
                    @change="(evt) => selectionOverflow = evt.currentTarget.value"
                /><br>
            </label>
            <label>
                allowRevert
                <span class="info" title="only apply at component creation">(at creation)</span>
                <Selectic
                    :value="optionParams.allowRevert"
                    :options="[{
                        id: true,
                        text: 'true',
                    }, {
                        id: false,
                        text: 'false',
                    }]"
                    :params="{
                        allowClearSelection: true,
                    }"
                    @change="(val) => optionParams.allowRevert = val"
                />
            </label>
            <label>
                listPosition
                <span class="info" title="only apply at component creation">(at creation)</span>
                <Selectic
                    :value="optionParams.listPosition"
                    :options="[{
                        id: 'auto',
                        text: 'auto',
                    }, {
                        id: 'bottom',
                        text: 'bottom',
                    }, {
                        id: 'top',
                        text: 'top',
                    }]"
                    :params="{
                        allowClearSelection: true,
                    }"
                    @change="(val) => optionParams.listPosition = val"
                />
            </label>
            <label>
                optionBehavior
                <span class="info" title="only apply at component creation">(at creation)</span>
                <div class="half">
                    <Selectic
                        :value="optionBehaviorOperation"
                        :options="[{
                            id: 'sort',
                            text: 'sort',
                        }, {
                            id: 'force',
                            text: 'force',
                        }]"
                        :params="{
                            allowClearSelection: true,
                        }"
                        @change="(val) => optionBehaviorOperation = val"
                    />
                    <Selectic
                        :value="optionBehaviorOrder"
                        :options="[{
                            id: 'ODE',
                            text: 'ODE',
                        }, {
                            id: 'OED',
                            text: 'OED',
                        }, {
                            id: 'DOE',
                            text: 'DOE',
                        }, {
                            id: 'DEO',
                            text: 'DEO',
                        }, {
                            id: 'EOD',
                            text: 'EOD',
                        }, {
                            id: 'EDO',
                            text: 'EDO',
                        }]"
                        :params="{
                            allowClearSelection: true,
                        }"
                        @change="(val) => optionBehaviorOrder = val"
                    />
                </div>
            </label>
        </details>
        <hr>
        <button @click="redraw">
            Redraw Selectic component
        </button>
    </fieldset>
    <fieldset>
        <legend>
            Example
        </legend>
        <Selectic v-if="draw"
            class="example"
            :options="options"
            :value="optionValue"
            :groups="groups"
            :placeholder="optionPlaceholder"
            :title="optionTitle"
            :multiple="multiple"
            :disabled="disabled"
            :params="optionParams"

            @change="(val) => optionValue = val"
        >
            <template v-if="innerElementOptionsVal > 0">
                <option v-for="opt of innerElementOptionList"
                    :value="opt.id"
                    :key="opt.id"
                >
                    {{opt.text}}
                </option>
            </template>
            <template v-if="innerElementOptionsVal < 0">
                <optgroup v-for="gp of innerElementGroupOptionList"
                    :value="gp.id"
                    :label="gp.text"
                    :key="gp.id"
                >
                    <option v-for="opt of gp.options"
                        :value="opt.id"
                        :key="opt.id"
                    >
                        {{opt.text}}
                    </option>
                </optgroup>
            </template>
        </Selectic>
        <label>Selected value: <output>{{JSON.stringify(optionValue)}}</output></label>
    </fieldset>
    <fieldset>
        <legend>
            HTML
        </legend>
        <pre class="result-code">{{htmlSelectic}}</pre>
    </fieldset>
    <div class="empty-space" :style="`--height-value: ${pageSpace}px`">
        <input type="range" min="20" max="5000" v-model="pageSpace">
        Space at the end of this page <em>(to play with scroll)</em>
    </div>
</div>
</template>
<script>
import Selectic from 'selectic';
import { defineComponent } from 'vue';
import {
    longNumOptions,
    longStringOptions,
    longStringLongOptions,
    emptyOptions,
    oneOptions,
    shortExclusiveOptions,
    shortNumOptions,
    shortStringOptions,
    groupOptions,
    dynOptions,
    innerElementOptions,
} from '@/helpers/optionsData';
import {
    buildFetchCallback,
    buildGetItemsCallback,
} from '@/helpers/tools';


export default defineComponent({
    name: 'Example',
    data() {
        return {
            draw: true,

            multiple: false,
            disabled: false,
            optionValue: null,
            optionPlaceholder: '',
            optionTitle: '',
            selectionOverflow: '',
            errorSelectionOverflow: '',
            optionParams: {
                hideFilter: undefined,
                allowClearSelection: undefined,
                autoSelect: undefined,
                autoDisabled: undefined,
                strictValue: undefined,
                selectionOverflow: undefined,
                allowRevert: undefined,
                emptyValue: undefined,
                listPosition: undefined,
                fetchCallback: undefined,
                getItemsCallback: undefined,
                optionBehavior: undefined,
            },
            optionType: 'shortNumOptions',
            optionList: [{
                id: 'emptyOptions',
                text: `empty option (${emptyOptions.length} items)`,
                values: emptyOptions,
            }, {
                id: 'oneOptions',
                text: `only one option (${oneOptions.length} items)`,
                values: oneOptions,
            }, {
                id: 'shortNumOptions',
                text: `short with numerical id (${shortNumOptions.length} items)`,
                values: shortNumOptions,
            }, {
                id: 'shortStringOptions',
                text: `short with string id (${shortStringOptions.length} items)`,
                values: shortStringOptions,
            }, {
                id: 'shortExclusiveOptions',
                text: `short with string id (${shortExclusiveOptions.length} items) -- some items have exclusive option`,
                values: shortExclusiveOptions,
            }, {
                id: 'longNumOptions',
                text: `long with numerical id (${longNumOptions.length} items)`,
                values: longNumOptions,
            }, {
                id: 'longStrOptions',
                text: `long with string id (${longStringOptions.length} items)`,
                values: longStringOptions,
            }, {
                id: 'longStrLongOptions',
                text: `long with string id (${longStringLongOptions.length} items) with long description`,
                values: longStringLongOptions,
            }, {
                id: 'groupOptions',
                text: `with groups (${groupOptions.length} groups)`,
                values: groupOptions,
            }],
            groups: undefined,
            dynOptionsVal: '',
            dynOptions: dynOptions,
            innerElementOptions: innerElementOptions,
            innerElementOptionsVal: 0,
            optionBehaviorOperation: '',
            optionBehaviorOrder: '',
            pageSpace: 20,
        };
    },
    computed: {
        options() {
            const optionType = this.optionType;
            const optionInfo = this.optionList.find((o) => o.id === optionType);
            return optionInfo && optionInfo.values || [];
        },
        innerElementOptionList() {
            const innerElementOptionsVal = this.innerElementOptionsVal;
            if (innerElementOptionsVal > 0) {
                const options = [];
                for (let i = 0; i < innerElementOptionsVal; i++) {
                    options.push({
                        id: `element-${i}`,
                        text: `Element #${i}`,
                    });
                }
                return options;
            }
            return [];
        },
        innerElementGroupOptionList() {
            const innerElementOptionsVal = this.innerElementOptionsVal;
            if (innerElementOptionsVal < 0) {
                const groups = [];
                for (let i = 0; i < -innerElementOptionsVal; i++) {
                    const options = [];
                    for (let j = 0; j < 5; j++) {
                        const id = i * 5 + j;
                        options.push({
                            id: `element-${id}`,
                            text: `Element #${id}`,
                        });
                    }
                    groups.push({
                        id: `group-${i}`,
                        text: `Group #${i}`,
                        options: options,
                    });
                }
                return groups;
            }
            return [];
        },
        htmlSelectic() {
            const options = [
                `:value="${JSON.stringify(this.optionValue).replace(/"/g, '\'')}"`,
                `:options="${this.optionType}"`,
            ];
            if (this.groups) {
                options.push(`:groups="${JSON.stringify(this.groups)}"`);
            }
            if (this.optionPlaceholder) {
                options.push(`:placeholder="${this.optionPlaceholder}"`);
            }
            if (this.optionTitle) {
                options.push(`:title="${this.optionTitle}"`);
            }
            if (this.disabled) {
                options.push('disabled');
            }
            if (this.multiple) {
                options.push('multiple');
            }

            const paramList = Object.keys(this.optionParams).reduce((list, key) => {
                const param = this.optionParams[key];

                if (param !== void 0 && param !== null) {
                    let val = param;

                    if (typeof param === 'string') {
                        val = `'${param}'`;
                    }

                    if (key === 'fetchCallback') {
                        val = 'fetchOptionsCb';
                    }
                    if (key === 'getItemsCallback') {
                        val = 'fetchIdsCb';
                    }

                    list.push(`    ${key}: ${val},`);
                }

                return list;
            }, []);
            if (paramList.length) {
                options.push('', ':params="{', ...paramList, '}"');
            }

            let endTag = '/>';
            let innerElements = '';
            const innerElementOptionsVal = this.innerElementOptionsVal;
            if (innerElementOptionsVal) {
                innerElements = ['>'];
                endTag = '</Selectic>';
                if (innerElementOptionsVal > 0) {
                    for (let i = 0; i < innerElementOptionsVal; i++) {
                        const id = i;
                        const text = `Element #${i}`;
                        innerElements.push(
                            '    <option',
                            `        :value="${id}"`,
                            '    >',
                            `        ${text}`,
                            '    </option>'
                        );
                    }
                } else {
                    const nbGroup = -innerElementOptionsVal;
                    for (let i = 0; i < nbGroup; i++) {
                        const groupId = `group${i}`;
                        const groupText = `Group #${i}`;
                        innerElements.push(
                            '    <optgroup',
                            `        :value="${groupId}"`,
                            `        label="${groupText}"`,
                            '    >'
                        );
                        for (let j = 0; j < 5; j++) {
                            const id = i * 5 + j;
                            const text = `Element #${id}`;
                            innerElements.push(
                                '        <option',
                                `            :value="${id}"`,
                                '        >',
                                `            ${text}`,
                                '        </option>'
                            );
                        }
                        innerElements.push(
                            '    </optgroup>'
                        );
                    }
                }
                innerElements = innerElements.join('\n');
            }

            const html = [
                '<Selectic',
                ...options.map(o => `    ${o}`),
                innerElements,
                endTag,
            ];
            return html.join('\n');
        },
    },
    methods: {
        redraw() {
            this.draw = false;
            setTimeout(() => {
                this.draw = true;
            }, 10);
        },
        buildOptionBehavior() {
            const optionBehaviorOrder = this.optionBehaviorOrder;
            const optionBehaviorOperation = this.optionBehaviorOperation;

            if (!optionBehaviorOrder || !optionBehaviorOperation) {
                this.optionBehaviorOrder = '';
                this.optionBehaviorOperation = '';
                this.optionParams.optionBehavior = undefined;
            } else {
                this.optionParams.optionBehavior = `${optionBehaviorOperation}-${optionBehaviorOrder}`;
            }
        },
    },
    watch: {
        'optionParams.selectionOverflow'() {
            this.selectionOverflow = JSON.stringify(this.optionParams.selectionOverflow);
        },
        selectionOverflow() {
            try {
                this.optionParams.selectionOverflow = JSON.parse(this.selectionOverflow);
            } catch(e) {
                this.errorSelectionOverflow = e.message;
                return;
            }
            this.errorSelectionOverflow = '';
        },
        dynOptionsVal() {
            const val = this.dynOptionsVal;
            if (val === '') {
                this.optionParams.fetchCallback = undefined;
                this.optionParams.getItemsCallback = undefined;
            } else {
                this.optionParams.fetchCallback = buildFetchCallback(val);
                this.optionParams.getItemsCallback = buildGetItemsCallback(val);
                if (val < 0) {
                    const nbGroup = -val;
                    const groups = new Array(nbGroup);
                    for (let i = 0; i < nbGroup; i++) {
                        groups[i] = {
                            id: `group${i}`,
                            text: `group #${i}`,
                        };
                    }
                    this.groups = groups;
                } else {
                    this.groups = undefined;
                }
            }
        },
        optionBehaviorOrder() {
            if (!this.optionBehaviorOperation) {
                this.optionBehaviorOperation = 'sort';
            }
            this.buildOptionBehavior();
        },
        optionBehaviorOperation() {
            if (!this.optionBehaviorOrder) {
                this.optionBehaviorOrder = 'ODE';
            }
            this.buildOptionBehavior();
        },
    },
    components: {
        Selectic,
    },
});
</script>
<style scoped>
.param {
    text-align: left;
}
.example {
    max-width: 500px;
}
.info {
    font-size: 0.8em;
    font-style: italic;
    cursor: help;
}
.has-error {
    border-color: red;
}
.half {
    display: grid;
    grid-template: max-content / 1fr 1fr;
    grid-column-gap: 15px;
}
.result-code {
    text-align: left;
}
.empty-space {
    height: var(--height-value, 20px);
}
</style>
