<template>
  <div class="home">
    <h2>Home Page</h2>
    <div v-for="project in projects" :key="project.id">
      <SingleProject :project="project" @delete="deleteProject" @complete="completeProject"></SingleProject>
    </div>
  </div>
</template>

<script>

import SingleProject from '../components/SingleProject'
export default {
  name: 'HomeView',
  components: {
    SingleProject,
  },
  data() {
    return {
      projects: []
    }
  },
  methods: {
    deleteProject(id) {
      this.projects = this.projects.filter((project) => {
        return project.id != id
      })
    },
    completeProject(id) {
      let findproject = this.projects.find((project) => {
        return project.id == id
      })
      findproject.complete = !findproject.complete
    }
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.projects = data;
      })
  }
}
</script>
<style>
h2 {
  text-align: center;
  margin: 30px auto;
}
</style>
