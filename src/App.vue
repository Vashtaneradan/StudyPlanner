<script lang="ts">
import Modal from './components/Modal.vue'
import Semester from './components/Semester.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  components: {
    Modal,
    Semester,
  },
  data() {
    return {
      count: 1,
      newSemesterNumber: 2,
      semesterData: [
        {
          semesterNr: 1,
          lectures: [],
          lectureData:
              {
                name: '',
                ects: 0,
                grade: 0,
                edit: false,
              }
        }
      ],
    }
  },
  methods: {
    createNewSemester() {
      if (this.semesterData.length) {
        this.semesterData.push({
          semesterNr: this.newSemesterNumber,
          lectures: [],
          lectureData: {
            name: '',
            ects: 0,
            grade: 0,
            edit: false,
          }
        })
      }
      this.newSemesterNumber++
    },
  }
})
</script>

<template>
  <div class="container mx-auto my-8 text-center">
    <h1 class="text-3xl my-4 font-bold underline">Study Planner 2000</h1>
    <button class="btn mx-auto block" @click="createNewSemester">Neues Semester anlegen</button>

    <template v-for="data in semesterData" :key="data.semesterNr">
      <semester :semester="data"></semester>
    </template>
  </div>
  <!--  <HelloWorld msg="Vite + Vue" />-->
</template>

<style scoped>
/*.semester__card {*/
/*  padding: 10px;*/
/*  margin: 5px 0;*/
/*  background-color: #363636;*/
/*}*/
</style>
