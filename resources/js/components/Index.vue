<template>
    <div>
        <router-link :to="{name: 'get.index'}">Get</router-link>
        <router-link v-if="!token" :to="{name: 'user.login'}">Login</router-link>
        <router-link v-if="!token" :to="{name: 'user.registration'}">Registration</router-link>
        <router-link v-if="token" :to="{name: 'user.personal'}">Personal</router-link>
        <a v-if="token" @click.prevent="logout" href="">Logout</a>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index",
    mounted() {
        this.getToken();
    },
    updated() {
        this.getToken();
    },
    data(){
        return {
            token: null
        }
    },
    methods: {
        getToken(){
            this.token = localStorage.getItem('x-xsrf-token')
        },
        logout() {
            axios.post('/logout')
                .then(res => {
                    localStorage.removeItem('x-xsrf-token')
                    this.$router.push({name: 'user.login'})
                })
        }
    }
}
</script>

<style scoped>

</style>
