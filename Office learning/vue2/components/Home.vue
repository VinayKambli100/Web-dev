<template>
    <h1> Hello this text from Home.vue  {{"hello there".length}}</h1>
    <h1>{{email}}</h1>
    <h1>{{mobile}}</h1>
    <h1>{{getName()}}</h1>
    <h1>{{addnum(50,30)}}</h1>
</template>

<script>
export default {
    name:"my_home",  //why is this line use for ???
    data(){
        return{
            email:"example@gmail.com",
            mobile:9999,
            getName()
            {
                return "hello there retrun form fucntion"
            },
            addnum(a,b)
            {
                let c = a+b
                return c;
            }
        }
    }
}
</script>

<style scoped>
h1{
    color: blue;
}
</style>