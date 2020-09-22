import resolve from '@rollup/plugin-node-resolve';
import pluginReplace from '@rollup/plugin-replace';
import VuePlugin from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs' ;

import postcss from 'rollup-plugin-postcss';

export default [{
    input: 'examples/app.js',
    output: [{
        file: 'examples/dist/app.js',
        format: 'iife',
    }],
    plugins: [
        postcss({
            extensions: [ '.css' ],
        }),
        commonjs(),
        VuePlugin(),
        pluginReplace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        resolve()
    ],
    context: 'this',
}];
