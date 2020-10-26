<template>
    <div>
        <h2><slot name="header"></slot></h2>
        <slot></slot>
        <slot name="footer" :fc="'底部内容'"></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>