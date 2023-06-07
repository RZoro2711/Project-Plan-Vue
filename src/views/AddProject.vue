<template>
    <h2>Add New Project</h2>
    <form @submit.prevent="addProject">
        <label for="">Title</label>
        <input type="text" placeholder="Enter Your Title" v-model="title">
        <label for="">Detail</label>
        <textarea name="" id="" cols="30" rows="10" placeholder="Enter Your Detail" v-model="detail"></textarea>
        <button>Add New</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            detail: ''
        }
    },
    methods: {
        addProject() {
            fetch("http://localhost:3000/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: this.title,
                    detail: this.detail,
                    complete: false
                })
            })
                .then(() => {
                    this.$router.push("/")
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}
</script>

<style>
h2 {
    text-align: center;
    margin-top: 50px;
}

form {
    background: white;
    padding: 20px;
    border-radius: 10px;
}

label {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0;
}

input {
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
}

textarea {
    border: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    height: 100px;
}

button {
    display: block;
    margin: 20px auto 0;
    background: #00Ce89;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
}</style>