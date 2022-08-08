<template>
    <label for=""> first name</label>
    <input type="text" v-model="firstname">
    <label for=""> last name </label>
    <input type="text" v-model="lastname">
    <br>
    <button @click="getdata() "> sumbit </button>
    <button @click="resetdata()"> reset </button>
  <inputs :arr="arraylist" />
</template>

<script>
import inputs from './components/input.vue'

export default {
  name: 'App',
  components: {
    inputs
  },
  data() {
    return {
      firstname:'',
      lastname:'',
      arraylist:[],
      count:0,
    }
  },
  methods: {
    getdata()
        {
            var obj={
                fname: this.firstname,
                lname: this.lastname
            }
            this.arraylist.push(obj)
            this.make_null_value();
            this.count++;
         },
          make_null_value()
        {
            this.firstname=null;
            this.lastname=null;
        },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>