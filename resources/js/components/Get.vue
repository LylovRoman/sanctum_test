<template>
    <div>
        Get
    </div>
</template>

<script>
export default {
    name: "Get",
    mounted(){
        this.getData();
    },
    methods: {
        getData(){
            axios.get('/api/get')
                .then(res => {
                    console.log(res);
                })
                .catch(err =>{
                    console.log(err.response.data.message);
                })
        }
    }
}
</script>

<style scoped>

</style>
