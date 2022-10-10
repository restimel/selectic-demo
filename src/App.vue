<template>
    <div class="main-header">
        <h1>Selectic demonstration</h1>
        <p>
            This is a smart select component allowing you to propose static
            or dynamic selction (for very large list).
        </p>
        <div id="nav">
            <router-link to="/">Examples</router-link> |
            <router-link to="/draft">Sandbox</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </div>
    <router-view/>
</template>

<script setup>
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 15px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    text-shadow: 0 0 20px white, 0 0 15px white, 0 0 10px white, 0 0 5px white;
}
</style>
<style scoped>
.main-header {
    color: white;
    background-color: #42b883;
    height: 150px;
    text-align: center;
    padding: 15px;
}
.main-header p {
    font-size: 0.8em;
    font-style: italic;
    max-width: 12cm;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 0;
}
.nav-tutorials {
    padding-top: 5px;
}
.btn-tutorial {
    color: #2c3e50;
    cursor: pointer;
    /* border: none; */
    background: none;
    font-size: 1.2em;
    border: 1px solid #42b883;
    margin-left: 0.5em;
    margin-right: 0.5em;
}
.btn-tutorial:hover {
    text-shadow: 0 0 20px #42b883, 0 0 15px #42b883, 0 0 10px #42b883, 0 0 5px #42b883;
}
</style>
