<template>
<div>
    <h1>Selectic examples</h1>
    <SelecticParameter v-if="page === 'parameter'" />
    <SelecticDraft v-if="page === 'draft'" />
</div>
</template>
<script>
import Selectic from 'selectic';

import SelecticParameter from './components/SelecticParameter.vue';
import SelecticDraft from './components/SelecticDraft.vue';

export default {
    name: 'Example',
    data() {
        return {
        };
    },
    computed: {
        page() {
            const search = document.location.search;
            const [,rslt] = search.match(/[?&]page=((?:\w|%)+)\b/) || [];
            const page = (rslt || '').toLowerCase();

            if (['parameter', 'draft'].includes(page)) {
                return page;
            }
            return 'parameter';
        },
    },
    components: {
        Selectic,
        SelecticParameter,
        SelecticDraft,
    },
}
</script>
<style>
.example {
    max-width: 500px;
}
</style>
