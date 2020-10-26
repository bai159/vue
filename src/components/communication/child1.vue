<template>
    <div>
        <h2>child1</h2>
        <p>{{msg}}</p>
        <button @click="sendToParent">给父组件发送消息</button>
        <span class="spanstyle">这是一条测试信息</span>
    </div>
</template>

<script>

    export default {
        props: {
            msg: {
                type: String,
                default: ''
            },
        },
        methods: {
            sendToParent() {
                this.$emit('toParent','我是由子组件传递出来的信息');
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>