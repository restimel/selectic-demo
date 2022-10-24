<template>
<div class="half">
    <fieldset>
        <legend>
            Vue component
        </legend>
        <textarea
            :class="{
                'html-draft': true,
                'has-error': !isHTMLValid,
                'my-editor': true,
            }"
            v-model="html"
            :highlight="highlighter"
            language="vue"
            line-numbers
        />
        <!-- <prism-editor
            :class="{
                'html-draft': true,
                'has-error': !isHTMLValid,
                'my-editor': true,
            }"
            v-model="html"
            :highlight="highlighter"
            language="vue"
            line-numbers
        /> -->
        <div v-if="reason"
            class="error-message"
        >
            {{reason}}
        </div>
        <div v-for="msg of infoMessage"
            class="info-message"
            :key="msg"
        >
            {{msg}}
        </div>
        <div>
            <button
                @click="redraw"
            >
                Redraw component
            </button>
        </div>
        <div>
            <label>
                <input type="checkbox" v-model="scrollTest">
                Embed component in a scroll element
            </label>
        </div>
    </fieldset>
    <fieldset
        :class="{'scroll-test': scrollTest}"
    >
        <legend>
            Example result
        </legend>
	<div class="spanHeight"></div>

        <div class="demo">
            <Selectic
                :params="selecticParams"
                :child="selecticChild"
                @input="(value) => selecticValue = value"
                :key="`selectic-${drawId}`"
                @info="(msg) => messages = msg"
            />
        </div>
	<div class="spanHeight"></div>

        <label @dblclick="saveCode">
            Selected value: <output>{{JSON.stringify(selecticValue)}}</output>
        </label>
    </fieldset>
</div>
</template>
<script>
/* eslint-disable no-empty-character-class */

import { defineComponent } from 'vue';
import Selectic from './WrapSelectic.vue';
// import { PrismEditor } from 'vue-prism-editor';
// import { highlight, languages } from "prismjs/components/prism-core";

// import 'prismjs';
// import 'prismjs/themes/prism.css';
// import { PrismEditor } from "vue-prism-editor";
// import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
// import { highlight, languages } from "prismjs/components/prism-core";
// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-javascript";
// import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles


function getJSON(str) {
    /**
     * Get attribute string with their values (if quoted)
     * (?:
     *     (["'])
     *     ([^\1\n]+?)
     *     \1
     *  |
     *     (?<!['"\w])
     *     (\w+)
     * )
     * \s*:
     * (?:
     *     \s*
     *     (["'])
     *     ([^\4\n]*?)
     *     \4
     * )?
     */
    return str.replace(
        /(?:(["'])([^\1\n]+?)\1|(\w+))\s*:(?:\s*(["'])([^\4\n]*?)\4)?/g,
        (_str, _q, quotedAttr, attr, _q2, value) =>
    {
        const attribute = quotedAttr || attr;
        const val = value ? `"${value}"` : '';
        return `"${attribute}":${val}`;
    }).replace(/'([^'\n]*?)'/g, (str, quotedStr) => {
        return `"${quotedStr}"`;
    });
}

function extractCode() {
    const search = document.location.search;
    const [,rslt=''] = search.match(/[?&]code=((?:\w|%)+)\b/) || [];
    return decodeURIComponent(rslt);
}

export default defineComponent({
    name: 'Draft',
    data() {
        this.$nextTick(() => {
            this.htmlChange();
            this.redraw();
        });
        return {
            html: extractCode() || '<Selectic\n    :options="\'list1\'"\n/>',
            selecticParams: {
                options: 'list1',
            },
            selecticChild: [],
            isHTMLValid: true,
            selecticValue: null,

            reason: '',
            messages: {
                needRedraw: false,
                message: '',
            },
            drawId: 0,
            scrollTest: false,
        };
    },
    computed: {
        infoMessage() {
            const message = this.messages;
            const messages = message.message.split('\n').filter((str) => str);

            if (message.needRedraw) {
                messages.push('The component needs to be redrawn');
            }

            return messages;
        },
    },
    methods: {
        redraw() {
            this.selecticValue = null;
            this.drawId++;
        },
        onKey(evt) {
            const key = evt.key;

            if (key === 'Tab') {
                evt.preventDefault;
            }
        },
        saveCode() {
            const code = encodeURIComponent(this.html).replace(/-/g, '%2D');
            let href = document.location.href;

            href = href.replace(/(?:&|(?<=\?))code=[^&]*/, '');
            if (!href.includes('?')) {
                href += '?';
            }

            if (!href.endsWith('?')) {
                href += '&';
            }

            href += `code=${code}`;

            console.dir(href);
        },

        highlighter(code) {
        //    return highlight(code, languages.js); //returns html
            return code.replace(/</g, '&lt;');
        },

        htmlChange() {
            const html = this.html;

            const [isValid, , elem] = this.parseHTML(html);

            this.isHTMLValid = isValid !== false;

            if (elem) {
                const selecticParams = elem.params;
                const selecticChild = elem.child.map((elem) => {
                    const options = elem.child.filter((el) => el.tagName !== 'text').map((el) => {
                        // TODO data
                        return {
                            tagName: el.tagName,
                            id: el.params.id || el.params.value,
                            text: el.params.label || (el.child[0] && el.child[0].params && el.child[0].params.text),
                            title: el.params.title,
                            disabled: el.params.disabled,
                            icon: el.params.icon,
                            group: el.params.group,
                            options: [],
                        };
                    });
                    // TODO data
                    return {
                        tagName: elem.tagName,
                        id: elem.params.id || elem.params.value,
                        text: elem.params.label || (elem.child[0] && elem.child[0].params && elem.child[0].params.text),
                        title: elem.params.title,
                        disabled: elem.params.disabled,
                        icon: elem.params.icon,
                        group: elem.params.group,
                        options: options,
                    };
                });

                this.selecticParams = selecticParams;
                this.selecticChild = selecticChild;
            }
        },

        parseHTML(html, name = '') {
            let index = 0;
            const lngth = html.length;
            let mode = 'outside';
            let capture = '';
            let attribute = '';
            let isDynamic = false;

            let tagName = '';
            const params = {};
            const child = [];

            const modes = {
                outside: {
                    lookFor: /[<]/,
                    escape: /[]/,
                    isCapturing: false,
                },
                inside: {
                    lookFor: /[/>:\w]/,
                    escape: /[]/,
                    isCapturing: false,
                },
                tagName: {
                    lookFor: /[\s>]/,
                    escape: /[]/,
                    isCapturing: true,
                },
                attribute: {
                    lookFor: /[=\s>]/,
                    escape: /[]/,
                    isCapturing: true,
                },
                attributeValue: {
                    lookFor: /["]/,
                    escape: /[\\]/,
                    isCapturing: true,
                },
                child: {
                    lookFor: /[^\s]/,
                    escape: /[]/,
                    isCapturing: false,
                },
                childText: {
                    lookFor: /[<]/,
                    escape: /[]/,
                    isCapturing: true,
                },
                end: {
                    lookFor: /./,
                    escape: /[]/,
                    isCapturing: false,
                },
            };

            mainLoop: for (index = 0; index < lngth; index++) {
                const char = html.charAt(index);
                const nextChar = html.charAt(index + 1);
                const conf = modes[mode];

                if (conf.lookFor.test(char)) {
                    switch (mode) {
                        case 'outside':
                            mode = 'tagName';
                            break;
                        case 'inside':
                            if (char === '/') {
                                if (nextChar !== '>') {
                                    this.reason = 'wrong tag ending';
                                    return [false];
                                }
                                index++;
                                mode = 'end';
                                break mainLoop;
                            }
                            if (char === '>') {
                                mode = 'child';
                                break;
                            }
                            mode = 'attribute';
                            if (char !== ':') {
                                isDynamic = false;
                                /* To capture the 1st letter */
                                index--;
                            } else {
                                isDynamic = true;
                            }
                            break;
                        case 'tagName':
                            tagName = capture;
                            if (tagName === '') {
                                this.reason = 'empty tagName';
                                return [false];
                            }
                            if (tagName.startsWith('/')) {
                                const isTagName = tagName.slice(1) === name;
                                if (!isTagName) {
                                    this.reason = 'wrong tag ending';
                                }

                                return [isTagName, index + 1, {}, []];
                            }
                            if (char === '>') {
                                mode = 'child';
                            } else {
                                mode = 'inside';
                            }
                            break;
                        case 'attribute':
                            attribute = capture.trim();
                            if (char === '=') {
                                mode = 'attributeValue';
                                if (nextChar === ' ') {
                                    index++;
                                }
                                index++;
                            } else {
                                params[attribute] = true;
                                mode = 'inside';
                            }
                            break;
                        case 'attributeValue':
                            try {
                                if (isDynamic) {
                                    params[attribute] = JSON.parse(getJSON(capture));
                                } else {
                                    params[attribute] = capture;
                                }
                            } catch (err) {
                                this.reason = 'attribute value is not correct';
                                console.error('Error while parsing attribute value "%s"', capture, err.message);
                                return [false];
                            }
                            mode = 'inside';
                            break;
                        case 'child':
                            if (char === '<') {
                                const [valid, idx, elem] = this.parseHTML(html.slice(index), tagName);
                                if (valid === false) {
                                    return [false];
                                }
                                index += idx;
                                if (valid === true) {
                                    mode = 'end';
                                    break mainLoop;
                                }
                                child.push(elem);

                                break;
                            }
                            mode = 'childText';
                            index--;
                            break;
                        case 'childText':
                            child.push({
                                params:{text: capture.trim()},
                                child: [],
                                tagName: 'text',
                            });
                            mode = 'child';
                            index--;
                            break;
                    }
                    capture = '';
                } else {
                    if (conf && conf.isCapturing) {
                        capture += char;
                        if (conf.escape.test(char)) {
                            capture += nextChar;
                            index++;
                        }
                    }
                }
            }

            if (mode !== 'end') {
                this.reason = `tag ${tagName} is not finished`;
                return [false];
            }

            this.reason = '';

            return [null, index, {params, child, tagName}];
        },
    },
    watch: {
        html() {
            this.htmlChange();
        },
    },
    components: {
        Selectic,
        // PrismEditor,
    },
});
</script>
<style>
.has-error {
    border-color: red;
    border-width: 2px;
    box-shadow: inset 0 0 15px red;
}
.error-message {
    height: 1.2em;
    color: #FF6666;
}
.info-message {
    height: 1.2em;
    color: #3366FF;
}
.half {
    display: grid;
    grid-template: max-content / 1fr 1fr;
    grid-column-gap: 15px;
}
.half > fieldset {
    overflow: auto;
}

.prism-editor__textarea,
.html-draft {
    width: 500px;
    height: 600px;
    min-height: 100px;
    min-width: 100px;
}
.my-editor {
    background: #2d2d2d;
    color: #ccc;

    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
}
.prism-editor__textarea:focus {
    outline: none;
}

.scroll-test {
    max-height: 100vh;
}
.spanHeight {
    height: 0;
}
.scroll-test .spanHeight {
    height: 100vh;
}

.positionBottom {
    margin-top: 100vh;
}
</style>
