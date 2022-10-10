<template>
    <div class="demonstration">
        <h1 class="top-header">This is a page which includes interactive elements</h1>

        <section class="form">
            <h2>A tool with form</h2>
            <label id="enable-tool">
                <input
                    type="checkBox"
                    name="enabled"
                    :checked="toolEnabled"
                    @change="(evt) => toolEnabled = evt.currentTarget.checked"
                />
                Enabled the tool
            </label>
            <label id="name">
                Text value:
                <input
                    type="text"
                    name="text"
                    v-model="textValue"
                    :disabled="!toolEnabled"
                />
            </label>
            <label id="operation">
                Operation:
                <select
                    name="operation"
                    v-model="operation"
                    :disabled="!toolEnabled"
                >
                    <option value="lower">to lower case</option>
                    <option value="upper">to upper case</option>
                    <option value="sum">sum all letter</option>
                    <option value="caesar">Caesar cipher</option>
                </select>
            </label>
            <fieldset class="result">
                <legend>Result</legend>
                {{result}}
            </fieldset>
        </section>

        <hr>
        <h2>Dynamic elements</h2>
        <section>
            <button
                class="btn-delayed"
                @click="showDelayedElements"
            >
                Show elements with a small delay
            </button>
            <ul>
                <li v-for="el of delayedElements" :key="el.id"
                    :id="el.id"
                >
                    {{el.name}}
                </li>
            </ul>
        </section>

        <hr>
        <h2>Element that needs scroll to be viewed</h2>
        <section class="scroll-section">
            <p>These lists contain a lot of items but are not large enough to show them all.</p>
            <div class="short-container-long-list-horizontal">
                <div>
                    <span v-for="el of scrolledHElements" :key="el.id"
                        :id="el.id"
                    >
                        {{el.name}}
                    </span>
                </div>
            </div>
            <br>
            <ul class="short-container-long-list-vertical">
                <li v-for="el of scrolledVElements" :key="el.id"
                    :id="el.id"
                >
                    {{el.name}}
                </li>
            </ul>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            toolEnabled: false,
            textValue: '',
            operation: 'lower',
            delayedElements: [] as Array<{id: string, name: string}>,
            scrolledVElements: [] as Array<{id: string, name: string}>,
            scrolledHElements: [] as Array<{id: string, name: string}>,
        };
    },

    computed: {
        result(): string {
            if (!this.toolEnabled) {
                return '';
            }
            const value = this.textValue;
            switch (this.operation) {
                case 'lower':
                    return value.toLocaleLowerCase();
                case 'upper':
                    return value.toLocaleUpperCase();
                case 'sum':
                    return Array.from(value.toLowerCase())
                        .reduce((sum, char) => sum + char.charCodeAt(0) - 97, 0)
                        .toString();
                case 'caesar':
                    return Array.from(value)
                        .map((char) => {
                            if (!/[a-z]/i.test(char)) {
                                return char;
                            }
                            const code = char.charCodeAt(0);
                            let finalCode: number;

                            if (code > 117 || (code <= 90 && code > 85)) {
                                finalCode = code - 21;
                            } else {
                                finalCode = code + 5;
                            }
                            return String.fromCharCode(finalCode);
                        })
                        .join('');
                default:
                    return '---- unknown operation ---';
            }
        },
    },
    methods: {
        showDelayedElements() {
            let nb = 1;
            this.delayedElements = [];

            const addElement = () => {
                this.delayedElements.push({
                    id: `element-${nb}`,
                    name: `element #${nb}`,
                });
                if (nb++ < 10) {
                    setTimeout(addElement, 200);
                }
            };

            addElement();
        },
        buildScrolledVElements() {
            this.scrolledVElements = new Array(100).fill(null).map((_v, idx) => {
                const nb = idx + 1;
                return {
                    id: `scroll-v-item-${nb}`,
                    name: `scroll item #${nb}`,
                };
            });
        },
        buildScrolledHElements() {
            this.scrolledHElements = new Array(100).fill(null).map((_v, idx) => {
                const nb = idx + 1;
                return {
                    id: `scroll-h-item-${nb}`,
                    name: `#${nb}`,
                };
            });
        },
    },
    created() {
        this.buildScrolledVElements();
        this.buildScrolledHElements();
    }
});

</script>

<style scoped>
label {
    display: block;
}
.center {
    grid-area: info;
}
.row-label {
    display: block;
    text-align: left;
}
.output {
    margin-left: 2em;
    font-style: italic;
}

.short-container-long-list-horizontal {
    display: inline-block;
    max-width: 300px;
    max-height: 50px;
    overflow: auto;
}
.short-container-long-list-horizontal > div {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.short-container-long-list-vertical {
    display: inline-block;
    width: 300px;
    max-height: 200px;
    overflow: auto;
}
</style>
