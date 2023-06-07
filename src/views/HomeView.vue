<template>
  <div class="home">
    <h2>Home Page</h2>
    <FilterNav @filterValue="current=$event" :current="current"></FilterNav>
    <div v-for="project in filterProjects" :key="project.id">
      <SingleProject :project="project" @delete="deleteProject" @complete="completeProject"></SingleProject>
    </div>
  </div>
</template>

<script>

import FilterNav from '../components/FilterNav'
import SingleProject from '../components/SingleProject'
export default {
  name: 'HomeView',
  components: {
    FilterNav,
    SingleProject,
  },
  data() {
    return {
      projects: [],
      current : 'all',
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
  },
  computed:{
    filterProjects(){
      if(this.current === 'complete'){
        return this.projects.filter((project)=>{
          return project.complete;
        })
      }
      if(this.current === 'pending'){
        return this.projects.filter((project)=>{
          return !project.complete;
        })
      }
      return this.projects;
    }
  }
}
</script>
<style>
h2 {
  text-align: center;
  margin: 30px auto;
}
</style>
