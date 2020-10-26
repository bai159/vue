<template>
    <div>
        <h2>插槽</h2>
        <layout>
            <!-- 具名插槽 -->
            <template v-slot:header>带有标题的插槽</template>
            <!-- 匿名插槽 -->
            <template>content....</template>
            <!-- 作用域插槽 -->
            <template v-slot:footer="{fc}">{{fc}}</template>
        </layout>
    </div>
</template>

<script>
import layout from '@/components/slots/layout.vue';
    export default {
        components: {
            layout,
        },
    }
</script>

<style scoped>

</style>