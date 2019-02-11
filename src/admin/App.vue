<template>
    <div>
        <h1 id="app">관리자 페이지</h1>
        <div class="row">
            <div class="col-sm-4 col-sm-offset-4">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "app",
    components: {}
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
