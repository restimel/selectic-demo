<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://github.com/restimel/vue3-tutorial/blob/main/docs/main.md" target="_blank" rel="noopener">vue3-tutorial documentation</a>.
        </p>
        <h3>Essential Links</h3>
        <ul>
            <li><a class="external-link" href="https://github.com/restimel/vue3-tutorial" target="_blank" rel="noopener">Vue3-tutorial Github page</a></li>
            <li><a class="external-link" href="https://vuejs.org" target="_blank" rel="noopener">Vue Core Docs</a></li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: String,
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
