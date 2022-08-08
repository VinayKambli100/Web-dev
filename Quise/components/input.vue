<template>

    <!-- <h1>{{firstnamedata}}</h1>
    <label for=""> first name</label>
    <input type="text" v-model="firstname">
    <label for=""> last name </label>
    <input type="text" v-model="lastname">
    <br>
    <button @click="getdata() "> sumbit </button>
    <button @click="resetdata()"> reset </button> -->
    <div>
        <table class="table" >
            <tr v-if="(count > 0)">
                <th class="border">first name</th>
                <th class="border">last name</th>
                <th colspan="3" class="border">actions</th>
            </tr>
            <tr v-for="(data,index) in arr" v-bind:key="index">
            <td class="border">{{data.fname}} </td>
            <td class="border">{{data.lname}}</td>
            <td class="border"> <button @click="editetable(index)">edit</button> </td>
            <td class="border" v-if="edit_is_on"><button @click="updatetable(index)">update</button></td>
            <td class="border"><button @click="removetable(index)">delete</button></td>
        </tr> 
        </table>
    </div>

    
</template>

<script>
export default {
    name:"project_1",
    props:['arr'],
    data() {
        return {
            firstname:null,
            lastname:null,
            // arr:[],
            count:0,
            edit_is_on:false,
        }
    },
    methods:{
    //     getdata()
    //     {
    //         var obj={
    //             fname: this.firstname,
    //             lname: this.lastname
    //         }
    //         // this.arr.push(obj)
    //         // console.log(this.arr)
    //         this.make_null_value();
    //         this.count++;
           
    //     },
    //     make_null_value()
    //     {
    //         this.firstname=null;
    //         this.lastname=null;
    //     },
    //    removetable(index)
    //    {
    //         this.arr.splice(index,1)
    //         this.count--;
    //    },
    //    resetdata()
    //    {    
    //         this.make_null_value()
    //         this.arr.splice(this.arr)
    //    },
    //    editetable(index)
    //    {
    //         // this.firstname=this.arr[index].fname;
    //         // this.lastname=this.arr[index].lname;
    //         this.edit_is_on = true;
    //    },
    //    updatetable(index)
    //    {
    //         // this.arr[index].fname =this.firstname;
    //         // this.arr[index].lname = this.lastname;
    //         this.edit_is_on = false;
    //         this.make_null_value();
    //    },
    }
    
}
</script>

<style>
    .border
    {
        border: solid 1px;
        padding:10px;
    }
    .table
    {
        border: solid 1px;
        margin-left: auto;
        margin-right: auto;
    }
</style>