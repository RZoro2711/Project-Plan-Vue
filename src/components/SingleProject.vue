<template>
    <div class="project" :class="{ complete: project.complete }">
        <div class="flexing">
            <div>
                <h3 @click="showDetail = !showDetail">{{ project.title }}</h3>
            </div>
            <div>
                <i @click="deleteProject" class="fas fa-trash"></i>
                <router-link :to="{ name: 'EditProject', params: { id: project.id } }"><i
                        class="fa-solid fa-pencil"></i></router-link>
                <i @click="completeProject" class="fa-solid fa-check"></i>
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
            api: "http://localhost:3000/projects/",
        }
    },
    methods: {
        deleteProject() {
            fetch(this.api + this.project.id, { method: "Delete" })
                .then(() => {
                    this.$emit('delete', this.project.id)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        completeProject() {
            fetch(this.api + this.project.id, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        complete: !this.project.complete
                    }
                )
            })
                .then(() => {
                    this.$emit('complete', this.project.id)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}
</script>

<style>
.project {
    padding: 20px;
    background-color: #f2f2f2;
    margin: 10px;
    border-radius: 10px;
    border-left: 6px solid crimson;
}

h3 {
    color: indigo;
    cursor: pointer;
}

.flexing {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

i {
    margin-left: 10px;
    font-size: 20px;
}

i:hover {
    color: #7777;
    cursor: pointer;
}

.complete {
    border-left: 6px solid green;
}</style>