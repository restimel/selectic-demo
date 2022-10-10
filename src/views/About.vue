<template>
    <div class="about">
        <h1>About selectic-demo</h1>

        <div class="information">
            <div class="center">
                <label class="row-label">
                    Project:
                    <span class="output">
                        selectic-demo
                    </span>
                </label>
                <label class="row-label">
                    Author:
                    <span class="output">
                        Restimel
                    </span>
                </label>
                <label class="row-label">
                    License:
                    <span class="output">
                        MIT
                    </span>
                </label>
            </div>
        </div>
    </div>
</template>

<style scoped>
.information {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-template-areas: "margeL info margeR";
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
</style>
