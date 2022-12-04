<template>
  <div class="fixed top-0 left-0 w-fill lg:w-screen h-fill lg:h-screen bg-black bg-opacity-40 flex justify-center items-center">
  <div class="flex flex-col bg-white h-80">
  <div class="text-xl border-b border-gray-300 p-4 flex justify-between items-center">
    <div>Add/Edit user</div>
    <div class="text-gray-400 hover:text-gray-600 cursor-pointer">
      <span @click="closeModal">X</span>
    </div>
  </div>
  <div class="p-4 flex flex-grow flex-col overflow-y-auto">
    <div class="flex flex-row">
    <div class="flex flex-col">
      <div>
        <span>Index</span>
        </div>
      <div class="mt-2">
        <span>Name</span>
      </div>
      <div class="mt-2">
        <span>DoB</span>
      </div>
      <div class="mt-2">
        <span>Municipality</span>
      </div>
    </div>
      <div class="flex flex-col ml-2">
        <div>
          <input v-model="form.id" class="border border-black w-28" type="text">
        </div>
        <div class="mt-1">
          <input v-model="form.name" class="border border-black w-36" type="text">
        </div>
        <div class="mt-1">
          <input v-model="form.dob" class="border border-black w-36" type="date">
        </div>
        <div class="mt-1">
          <input v-model="form.mp" class="border border-black w-36" type="text">
        </div>
      </div>
    </div>
  </div>
    <div>
      <ul class="flex flex-col ml-24" v-for="item in errors" :key="item">
        <li class="text-red-500 font-light text-sm">The field {{item}} is not valid!</li>
      </ul>
    </div>
  <div class="border-t border-gray-300 p-4 flex justify-end items-center mb-0">
    <div>
      <button class="border border-black bg-gray-300 mr-2 w-20" @click="closeModal">Cancel</button>
    </div>
    <div>
      <button class="border border-black bg-gray-300 w-20" @click="callAddOrEditStudent">Save</button>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ModalView',
  data () {
    return {
      form: {
        name: '',
        dob: '',
        mp: '',
        id: null
      },
      errors: []
    }
  },
  props: { showModalView: Function, addStudent: Function, isEdit: Boolean, editStudent: Function, studentData: Object },
  methods: {
    submit () {
      this.errors = []
      for (const item in this.form) {
        if (this.form[item] === '') {
          this.errors.push(item)
        }
      }
      if (this.errors.length === 0) {
        console.log()
        this.addStudent(this.form.name, this.form.dob, this.form.mp, this.form.id)
        alert('The data has been submitted!')
        this.closeModal()
      }
      console.warn(this.errors)
    },
    closeModal () {
      this.showModalView()
      this.setDefaultData()
      this.setErrors()
    },
    callAddOrEditStudent () {
      if (this.isEdit) {
        this.editStudent(this.form.name, this.form.dob, this.form.mp, this.form.id)
        this.closeModal()
      } else {
        this.submit()
      }
    },
    setDefaultData () {
      this.form.name = ''
      this.form.dob = ''
      this.form.mp = ''
      this.form.id = null
    },
    setErrors () {
      this.errors = []
    }
  },
  watch: {
    studentData () {
      if (this.studentData) {
        this.form.name = this.studentData.name
        this.form.dob = this.studentData.dob
        this.form.mp = this.studentData.mp
        this.form.id = this.studentData.id
      }
    }
  }

}
</script>
