<template>

<div id="holder">
    <div class="views-cont" id="active">
        <h2>Active Tasks</h2>
        <div id="notaskmsg">{{ notaskmsg }}</div>

            <NewTask />

        <form action="" v-on:submit="submitForm">
            <input type="text" id="input" v-model="test" placeholder="start typing..." />
            <input class="submit" type="submit" value="ADD" name="add" @click="storeTest">
        </form>

        </div>

            <div class="views-cont" id="deleted">
            <h2>Deleted Tasks</h2>
            <div id="normvmsg">{{ normvmsg }}</div>
                
            <DeletedTask />
    </div>
</div>




</template>


<script>

import NewTask from '@/components/NewTask.vue';
import DeletedTask from '@/components/DeletedTask.vue';

export default {
    components: {
        NewTask,
        DeletedTask,
    },
    data() {
        return {
            list: [],
            test: '',
            notaskmsg: 'There are no active tasks...',
            normvmsg: 'There are no deleted tasks...',
            dataGlobal: [],
        }

    },

    mounted() {

    },

    methods: {

        

        storeTest(){
            if(this.test == ''){
                return(console.log('reloaded page or empty field'))
            }
            this.globalTasks.push({title: this.test})
            document.getElementById('notaskmsg').style = "display: none;"
            console.log(this.globalTasks)
        },
        submitForm(event){
            event.preventDefault(),
            event.target.reset()
        },
        
    },

    

}
</script>

<style scoped>

    #notaskmsg {
        display: none !important;
    }

    #holder{
        display: grid;
        grid-template-columns: auto auto;
    }

    .container1{
        margin: 15px;
    }

    .views-cont{
      margin: 20px;
      background: rgb(19, 19, 19);
      border-radius: 5px;
      padding: 15px;
      min-width: 400px;
      height: fit-content;
    }

    .views-cont h2{
      border-bottom: 1px solid rgb(32, 32, 32);
    }

    input{
        padding: 5px;
        outline: none;
        border: none;
        background: rgb(212, 212, 212);
        margin: 3px;
        border-radius: 3px;
        width: 100%;
    }

    #input{
        margin-top: 20px;
    }

    .submit{
        color: green;
        background: greenyellow;
        width: 100%;
        cursor: pointer;
    }

    .submit:hover{
        outline: solid green 2px;
    }

</style>