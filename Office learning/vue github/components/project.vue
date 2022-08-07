<template>
    <label for="" >firstname</label>
    <input type="text" v-model="firstname">
    <label for="">lastname</label>
    <input type="text" v-model="lastname">
    <br>
    <button v-on:click="sumbit()"> sumbit </button>
    <button> reset </button>

    <table >
         <tr v-if="(count > 0)">
            <th class="table">first name</th>
            <th class="table">last name</th>
        </tr>
        <tr class="" v-for="(data,index) in arr" v-bind:key="index">
        
           <td class="table">{{data.fname}}</td>
           <td class="table">{{data.lname}}</td>
           <td class="table t_and_e_btn"> <button v-on:click="editbtn(index)">edit</button></td>
           <td class="table t_and_e_btn" v-if="edit_is_on"> <button v-on:click="update(index)" >update</button></td>
           <td class="table t_and_e_btn"><button v-on:click="deletetable(index)" >delete</button></td>
        </tr>
    </table>
</template>

<script>
    export default{
        name:"projectfile_1",
        data() {
            return{
                firstname:null,
                lastname:null,
                arr:[],
                displaytable:false,
                edit_is_on:false,
                count:0,
            }
        },
        methods: {
            sumbit()
            {
                var obj = {
                    fname: this.firstname,
                    lname:this.lastname
                }
                this.arr.push(obj)
                console.log(this.arr);
                // this.displaytable = true;
                this.resetinput()
                this.count++;
            },
            resetinput()
            {
                this.firstname = null;
                this.lastname = null;
            },
            deletetable(index)
            {
                this.arr.splice(index,1)
                this.count--;
            },
            editbtn(index)
            {
                this.firstname = this.arr[index].fname;
                this.lastname = this.arr[index].lname;
                this.edit_is_on = true;
            },
            update(index)
            {
                this.arr[index].fname = this.firstname;
                this.arr[index].lname = this.lastname;
                this.edit_is_on = false;
                this.resetinput();
            }
        },
    }
</script>

<style>
    .table{
        border: solid 1px;
    }
    .t_and_e_btn
    {
        padding: 10px;
    }
</style>