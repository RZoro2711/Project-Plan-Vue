<template>
    <nav class="filter-nav">
        <button @click="filerby('all')" :class="{active : current == 'all'}">All</button>
        <button @click="filerby('pending')" :class="{active : current == 'pending'}">Pending</button>
        <button @click="filerby('complete')" :class="{active : current == 'complete'}">Complete</button>
    </nav>
</template>

<script>
export default {
    props:['current'],
methods:{
    filerby(value){
        this.$emit('filterValue',value)
    }
}
}
</script>

<style scoped>
.filter-nav button{
    background: none;
    border: none;
    color: #bbb;
    outline:  none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
}
button.active{
    color: #00cd89;
}
</style>