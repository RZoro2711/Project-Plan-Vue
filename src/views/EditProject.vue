<template>
    <h2>Edit {{ id }}</h2>
    <form @submit.prevent="addProject">
        <label for="">Title</label>
        <input type="text" placeholder="Enter Your Title" v-model="title">
        <label for="">Detail</label>
        <input type="text" placeholder="Enter Your Detail" v-model="detail">
        <button @click="updateProject">Update</button>
    </form>
</template>

<script>
export default {
    props: ["id"],
    data() {
        return {
            title: "",
            detail: "",
        }
    },
    methods: {
        updateProject() {
            fetch("http://localhost:3000/projects/" + this.id, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    'title': this.title,
                    'detail': this.detail
                })
            })
                .then(() => {
                    this.$router.push("/")
                })
                .catch((err) => {
                    console.log(err);
                })

        }
    },
    mounted() {
        fetch("http://localhost:3000/projects/" + this.id)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.title = data.title;
                this.detail = data.detail;
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
</script>

<style></style>