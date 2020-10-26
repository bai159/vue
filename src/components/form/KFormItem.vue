<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <!-- 校验信息显示 -->
        <p v-if="error" class="err">{{error}}</p>
    </div>
</template>

<script>
import Schema from 'async-validator';
export default {
    inject:['form'],
    data() {
        return {
            error: ''
        }
    },
    props: {
        label: {
            type: String,
            default: ''
        },
        prop:{
            type: String
        }
    },
    mounted () {
        this.$on('validate',()=>{
            this.validate();
        });
    },
    methods: {
        validate() {
            //规则
            const rules = this.form.rules[this.prop];
            //当前值
            const value = this.form.model[this.prop];

            const desc = {[this.prop]:rules};
            //创建schema实例
            const schema = new Schema(desc);
            return schema.validate({[this.prop]: value},errors=>{
                if(errors){
                    this.error = errors[0].message;
                }else{
                    this.error = "";
                }
            })
        }
    },
}
</script>

<style scoped>
.err{
    font-size: 12px;
    color: #ff0000;
}
</style>