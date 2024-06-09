<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <slot></slot>
      <button @click="closeModal">بستن</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style>
/* استایل‌های مورد نیاز برای مدال */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* پشت‌زمینه‌ی تاریک با شفافیت */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
}

button {
  margin-top: 10px;
}
</style>
