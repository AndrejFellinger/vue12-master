<template>

<li v-for="(kokos, index) in dataGlobal">
        
    {{ kokos.title }}

    <button class="deletebtn" @click="deleteTodo(index)">
        <ion-icon name="trash"></ion-icon>
    </button>

</li>

<li v-for="(kokos1, index) in this.globalTasks">
        
    {{ kokos1.title }}

    <button class="deletebtn" @click="deleteTodo2(index)">
        <ion-icon name="trash"></ion-icon>
    </button>

</li>


</template>


<script>
import DeletedTask from "../components/DeletedTask.vue"


export default {
    components: {
        DeletedTask,
    },

    data() {
        return {
            deleted: [],
            deleted2: [],
            deletedlist: '',
            dataGlobal: [],
        }
    },


    mounted() {
        let dataGlobal;

        const getData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
            const datagot = await response.json();
            dataGlobal = datagot;
            this.dataGlobal = datagot
            return datagot;
        };

        (async () => {
            await getData();
        })();

        if (dataGlobal == null){
            document.getElementById('notaskmsg').style = "display: block;"
        }
    },

    methods: {

        deleteTodo(index){
            this.deleted.push(this.dataGlobal.splice(index, 1)[0])
            

            localStorage.setItem("deleted", JSON.stringify(this.deleted));

            


            // this.updateTasks()
            // Sem ide Update Deleted Function 
            
        },

        deleteTodo2(index){
            this.deleted2.push(this.globalTasks.splice(index, 1)[0])
            this.deleted.push(this.dataGlobal.splice(index, 1)[0])
            localStorage.setItem("deleted2", JSON.stringify(this.deleted2));
        },

        updateTasks(){
            
            this.dataGlobal.push({title: this.globalTasks})
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

    .deletebtn{
        background: transparent;
        border: none;
        outline: none;
        font-size: 20px;
        cursor: pointer;
        color: black;
        transition: 0.3s ease;
        vertical-align: middle;
        float: right;
        margin-left: 15px;
        border-left: rgb(218, 218, 218) solid 1px;
        padding-left: 6px;
    }

    .deletebtn:hover{
        transition: 0.3s ease;
        color: red;
    }

</style>