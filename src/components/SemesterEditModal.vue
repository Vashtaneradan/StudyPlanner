<template>
  <button
      type="button"
      class="btn btn-primary modal-button"
      @click="showModal"
  >
    🖊
  </button>

  <Modal
      :isOpen="isModalVisible"
      @close="closeModal"
  >
    <template v-slot:header>
      Semester {{ data.semesterNr }} bearbeiten / Vorlesung anlegen
    </template>

    <template v-slot:body>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <!-- head -->
          <thead>
          <tr>
            <th>Vorlesung</th>
            <th>ECTS</th>
            <th>Note</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          <!-- row 1 -->
          <tr v-for="lecture in data.lectures">
            <td v-if="lecture.edit"><input type="text" v-model="lecture.name"></td>
            <td v-else>{{ lecture.name }}</td>

            <td v-if="lecture.edit"><input type="number" v-model="lecture.ects"></td>
            <td v-else>{{ lecture.ects }}</td>

            <td v-if="lecture.edit"><input type="number" v-model="lecture.grade"></td>
            <td v-else>{{ lecture.grade }}</td>
            <!--            <td v-else v-show="lecture.grade > 0">{{ lecture.grade }}</td>-->
            <td>
              <button class="btn" @click="$emit('updateLecture', lecture)">
                <span v-if="!lecture.edit">🖊</span>
                <span v-else>✔</span>
              </button>
            </td>
            <td>
              <button class="btn" @click="$emit('deleteLecture', data, lecture.name)">🗑</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <form @submit.prevent="$emit('newLecture', data)">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Vorlesung</span>
<!--            <span class="label-text-alt">Alt label</span>-->
          </label>
          <input v-model="data.lectureData.name" required type="text" placeholder="z.B. Mathe" class="input input-bordered w-full max-w-xs" />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">ECTS</span>
<!--            <span class="label-text-alt">Alt label</span>-->
          </label>
          <input v-model="data.lectureData.ects" required type="number" placeholder="z.B. 5" class="input input-bordered w-full max-w-xs" />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Note</span>
            <span class="label-text-alt">1-6</span>
          </label>
          <input v-model="data.lectureData.grade" required type="number" placeholder="z.B. 2" class="input input-bordered w-full max-w-xs" />
        </div>
        <button class="btn button&#45;&#45;round">➕</button>


<!--        <div class="overflow-x-auto">-->
<!--          <table class="table table-zebra w-full">-->
<!--            <tr>-->
<!--              <td><input id="lectureName" type="text" v-model="data.lectureData.name" required></td>-->
<!--              <td><input id="lectureEcts" type="number" v-model="data.lectureData.ects" required></td>-->
<!--              <td><input id="lectureGrade" type="number" v-model="data.lectureData.grade"></td>-->
<!--              <td></td>-->
<!--              <td>-->
<!--                <button class="btn button&#45;&#45;round">➕</button>-->
<!--              </td>-->
<!--            </tr>-->
<!--          </table>-->
<!--        </div>-->
      </form>
    </template>

    <!--        <template v-slot:footer>-->
    <!--          This is a new modal footer.-->
    <!--        </template>-->
  </Modal>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Modal from "./Modal.vue";

export default defineComponent({
  components: {
    Modal,
  },
  name: "SemesterEditModal",
  data() {
    return {
      isModalVisible: false,
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  props: {
    data: Object,
  },
})
</script>

<style scoped>
/*.lecture__table {*/
/*  margin: 0 auto;*/

/*}*/

/*td {*/
/*  width: calc(100% / 5);*/
/*}*/

/*tr {*/
/*  border-bottom: 1px solid #ddd;*/
/*}*/
</style>