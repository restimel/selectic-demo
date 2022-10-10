<template>
    <div class="home">
        <h1>Selectic sandbox</h1>
        <SelecticDraft />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelecticDraft from '@/components/SelecticDraft.vue';

export default defineComponent({
    name: 'Home',
    components: {
        SelecticDraft,
    },
});
</script>
<style>
.example {
    max-width: 500px;
}
</style>
