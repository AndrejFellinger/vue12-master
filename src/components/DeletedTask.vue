<template>

<li v-for="(kokos, index) in deleted">
        
    {{ kokos.title }}

</li>

<li v-for="(kokos1, index) in deleted2">
        
    {{ kokos1.title }}

</li>


<p>
    <button @click="LoadData()">Update Data</button>
</p>


</template>


<script>


export default {

    data() {
        return {
            deleted: [],
            deleted2: [],
            deletedlist: '',
            dataGlobal: [],
        }
    },

    mounted() {

        if(this.deleted){
            document.getElementById('normvmsg').style = "display: none;"
        }

        this.LoadData();
    },

    methods: {

        LoadData(){
            this.deleted = JSON.parse(localStorage.getItem("deleted"));
            this.deleted2 = JSON.parse(localStorage.getItem("deleted2"));
        },
    },
    
}
</script>

<style scoped>

    ul{
        font-size: 18px;
        text-align: left;
        display: flex;
        list-style-type: none;
    }

    li{
        margin-top: 10px;
        border-bottom: rgb(212, 212, 212) 1px solid;
        align-items: center;
        padding: 4px;
        background: rgb(240, 240, 240);
        list-style-type: none;
        border-radius: 3px;
        color: black;
    }

    #deleted li{
        background: rgb(58, 0, 0);
        color: rgb(255, 168, 168);
        border-bottom: 1px solid rgb(31, 0, 0);
    }

</style>