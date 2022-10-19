<template>
  <div class="indicator m-4">
    <span class="indicator-item badge badge-primary">{{ getSummedEcts }}/30</span>
    <div class="card p-4 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Semester {{ this.semester.semesterNr }}</h2>
        <div class="flex justify-between gap-x-8">
          <div class="basis-full overflow-x-auto w-full">
            <table class="table table-zebra w-full">
              <thead>
              <tr>
                <th>Vorlesung</th>
                <th class="text-center">ECTS</th>
                <th class="text-center">Note</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="lecture in this.semester.lectures">
                <th>{{ lecture.name }}</th>
                <td class="text-center">{{ lecture.ects }}</td>
                <td class="text-center"><span v-show="lecture.grade > 0">{{
                    lecture.grade
                  }}</span></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="radial-progress text-primary flex-none" :style="`--value:${getEctsPercentage};`">{{ getEctsPercentage }}%</div>
        </div>
      </div>
      <div class="card-actions justify-end">
        <SemesterEditModal
            @newLecture="createNewLecture"
            @updateLecture="editLecture"
            @deleteLecture="deleteLecture"
            :data="this.semester"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {type PropType} from 'vue'
import {defineComponent} from 'vue'
import {Semester, Lecture} from '../types/interfaces';
import SemesterEditModal from "./SemesterEditModal.vue";

export default defineComponent({
  name: "Semester",
  components: {
    SemesterEditModal,
  },
  data() {
    return {}
  },
  props: {
    semester: {
      type: Object as PropType<Semester>,
      required: true,
    },
  },
  methods: {
    createNewLecture() {
      const isAlreadyTaken = this.semester.lectures.find((lecture: Lecture) => lecture.name === this.semester.lectureData.name)
      if (this.semester.lectureData.name && this.semester.lectureData.ects && !isAlreadyTaken) {
        this.semester.lectures.push({
          name: this.semester.lectureData.name,
          ects: this.semester.lectureData.ects,
          grade: this.semester.lectureData.grade ? this.semester.lectureData.grade : 0,
          edit: false,
        });

        // cleanup
        this.semester.lectureData.name = '';
        this.semester.lectureData.ects = 0;
        this.semester.lectureData.grade = 0;
      }
      this.$emit('change', this.semester);
    },
    deleteLecture(lectureName: string) {
      const removeIndex = this.semester.lectures.findIndex((lecture: Lecture) => lecture.name === lectureName);
      this.semester.lectures.splice(removeIndex, 1);
      this.$emit('change', this.semester);
    },
    editLecture(lecture: Lecture) {
      lecture.edit = !lecture.edit;
      this.$emit('change', this.semester);
    },
  },
  computed: {
    getSummedEcts() {
      if (!this.semester.lectures.length) {
        return 0;
      } else {
        return this.semester.lectures.map((item: Lecture) => item.ects).reduce((prev, next) => prev + next);
      }
    },
    getEctsPercentage() {
      const total = (100 / 30) * this.getSummedEcts;
      return Math.round(total);
    }
  }
})
</script>

<style scoped>

</style>