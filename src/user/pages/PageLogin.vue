<template>
    <div>
        <div class="form-group">
            <label>id</label>
            <input v-model="id" type="text" class="form-control">
            <br>
            <button v-on:click="login()" class="btn btn-default">login</button>
        </div>
    </div>
</template>

<script>
    import router from '../router';
    export default {
        name: "PageLogin",
        data() {
            return {
               id: ""
            }
        },
        methods: {
            login: function() {
                this.$store.dispatch("login", this.id);
                router.push('/main');
            }
        }
    }
</script>

<style scoped>

</style>