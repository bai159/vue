import Vue from 'vue'

function create(Component,props){
    //组件构造函数如何获取
    const vm = new Vue({
        //h是createElement,返回VNode,是虚拟DOM
        //需要挂载才能变成真实DOM
        render: h=>h(Component,{props})
    }).$mount()//不指定宿主原素，会创建真实DOM，但是不会追加操作

    document.body.appendChild(vm.$el);
    const comp = vm.$children[0];

    //删除
    comp.remove = function(){
        document.body.removeChild(vm.$el);
        vm.$destroy();
    }
    return comp
}

export default create;