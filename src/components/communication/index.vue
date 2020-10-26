<template>
    <div>
        <h2>组件通信</h2>
        <Child1 msg="some msg from parent" @toParent="getChild"></Child1>
        <Child2 @click="onClick('from parent',$event)"></Child2>
        <button @click="onClick('hello vue',$event)" value="提交的内容" v-bind:disabled="isButton">submit</button>
    </div>
</template>

<script>
    import Child1 from './child1';
    import Child2 from './child2';
    export default {
        name: 'index',
        data() {
            return {
                title: '',
                isButton: true
            }
        },
        components: {
            Child1,
            Child2
        },
        methods: {
            getChild(val) {
                //接收子组件发送的信息
                console.log(val)
            },
            onClick(message,event){
                console.log(message,event)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>