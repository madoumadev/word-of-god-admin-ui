<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AddVideoForm',
  emits: ['on-save-video'],
  data() {
    return {
      form: {
        title: '',
        link: '',
        preacher: '',
        file: null,
        status: ''
      }
    }
  },

  computed: {
    ...mapGetters({
      isOpen: 'isOpen'
    })
  },
  methods: {
    getFile() {
      this.form.file = this.$refs.file_input_note.files[0]
    },

    save() {
      // Add form validation
      let newForm = new FormData()

      newForm.append('title', this.form.title)
      newForm.append('link', this.form.link)
      newForm.append('preacher', this.form.preacher)
      newForm.append('file', this.form.file)
      newForm.append('status', this.form.status)

      this.$emit('on-save-video', newForm)
    },

    onClose() {
      this.$store.commit('SET_IS_OPEN', !this.isOpen)
    }
  }
}
</script>

<template>
  <form @submit.prevent="save">
    <h2 class="mb-4 font-semibold text-slate-800 text-lg first-letter:capitalize">
      добавление новой записи
    </h2>

    <div class="text-sm text-gray-500 space-y-4">
      <div class="space-y-2">
        <label for="name">НАЗВАНИЕ</label>
        <div>
          <input v-model="form.title" type="text" id="name" class="wfg-input" />
        </div>
      </div>
      <div class="space-y-2">
        <label for="video-link">Ссылка</label>
        <div>
          <input v-model="form.link" type="text" id="video-link" class="wfg-input" />
        </div>
      </div>
      <div class="space-y-2">
        <label for="name">ПРОПОВЕДНИК</label>
        <div>
          <input v-model="form.preacher" type="text" id="name" class="wfg-input" />
        </div>
      </div>
      <div class="space-y-2">
        <label for="status">АКТИВНОСТЬ</label>
        <select v-model="form.status" id="status" class="wfg-input">
          <option selected>Выберите статус</option>
          <option value="ACTIVE">Да</option>
          <option value="INACTIVE">Нет</option>
        </select>
      </div>

      {{ form.file }}
      <div>
        <label class="block mb-2 uppercase" for="file_input_note">Примечание</label>
        <input
          @change.prevent="getFile"
          class="block w-full wfg-input cursor-pointer focus:outline-none"
          aria-describedby="file_input_help"
          id="file_input_note"
          type="file"
          ref="file_input_note"
        />
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
          PDF | .TXT.
        </p>
      </div>
    </div>

    <div class="flex justify-start items-center space-x-4 mt-5">
      <button type="submit" class="wfg-btn-primary">добавить</button>
      <button
        @click="onClose"
        ref="cancelButtonRef"
        type="button"
        class="py-2 px-3 text-sm rounded-xl font-medium text-gray-500 bg-white border border-gray-200 hover:bg-gray-100"
      >
        Cancel
      </button>
    </div>
  </form>
</template>

<style scoped></style>
