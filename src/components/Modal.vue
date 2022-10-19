<template>

  <input type="checkbox" class="modal-toggle" v-model="isOpen"/>
  <div class="modal">
    <div class="modal-box relative">
      <span @click="close" class="btn btn-sm btn-circle absolute right-2 top-2">✕</span>
      <h3 class="text-lg font-bold">
        <slot name="header">
          This is the default title!
        </slot>
      </h3>
      <div class="py-4">
        <slot name="body">
          This is the default body!
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Modal",
  data() {
    return {}
  },
  props: {
    isOpen: Boolean,
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
})
</script>

<!--<style scoped>-->
<!--.modal-backdrop {-->
<!--  position: fixed;-->
<!--  top: 0;-->
<!--  bottom: 0;-->
<!--  left: 0;-->
<!--  right: 0;-->
<!--  background-color: rgba(0, 0, 0, 0.3);-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--}-->

<!--.modal {-->
<!--  background: #363636;-->
<!--  box-shadow: 2px 2px 20px 1px;-->
<!--  overflow-x: auto;-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--}-->

<!--.modal-header,-->
<!--.modal-footer {-->
<!--  padding: 15px;-->
<!--  display: flex;-->
<!--}-->

<!--.modal-header {-->
<!--  position: relative;-->
<!--  border-bottom: 1px solid #eeeeee;-->
<!--  color: #4AAE9B;-->
<!--  justify-content: space-between;-->
<!--}-->

<!--.modal-footer {-->
<!--  border-top: 1px solid #eeeeee;-->
<!--  flex-direction: column;-->
<!--  justify-content: flex-end;-->
<!--}-->

<!--.modal-body {-->
<!--  position: relative;-->
<!--  padding: 20px 10px;-->
<!--}-->

<!--.btn-close {-->
<!--  position: absolute;-->
<!--  top: 0;-->
<!--  right: 0;-->
<!--  border: none;-->
<!--  font-size: 20px;-->
<!--  padding: 10px;-->
<!--  cursor: pointer;-->
<!--  font-weight: bold;-->
<!--  color: #4AAE9B;-->
<!--  background: transparent;-->
<!--}-->

<!--.btn-green {-->
<!--  color: white;-->
<!--  background: #4AAE9B;-->
<!--  border: 1px solid #4AAE9B;-->
<!--  border-radius: 2px;-->
<!--}-->
<!--</style>-->