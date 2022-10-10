<template>
    <div class="home">
        <h1>Selectic examples</h1>
        <SelecticParameter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelecticParameter from '@/components/SelecticParameter.vue';

export default defineComponent({
    name: 'Home',
    components: {
        SelecticParameter,
    },
});
</script>
<style>
.example {
    max-width: 500px;
}
</style>
