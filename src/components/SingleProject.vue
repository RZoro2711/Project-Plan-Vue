<template>
    <div class="project">
        <div class="flexing">
            <div>
                <h3 @click="showDetail= !showDetail">{{ project.title }}</h3>
            </div>
            <div>
                <i class="fas fa-trash"></i>
                <i class="fa-solid fa-pencil"></i>
                <i class="fa-solid fa-check"></i>
            </div>
        </div>
        <p v-if="showDetail">{{ project.detail }}</p>

    </div>
</template>

<script>
export default {
    props: ['project'],
    data() {
        return {
            showDetail: false,
        }
    }
}
</script>

<style>
.project {
    padding: 20px;
    background-color: #f2f2f2;
    margin: 10px;
    border-left: 6px solid crimson;
}

h3 {
    color: indigo;
    cursor: pointer;
}
.flexing{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
i{
    margin-left: 10px;
    font-size: 20px;
}
i:hover{
    color: #7777;
    cursor: pointer;
}
</style>