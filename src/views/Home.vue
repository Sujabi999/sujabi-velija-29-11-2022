<template>
<div>
  <DashboardHeader/>
  <div class="h-screen w-full">
    <div class="flex flex-row justify-between mt-2">
  <input aria-label="username" class="ml-2 px-3 py-1.5 border border-gray-400 rounded-xl"
         v-model="search"
         type="text" placeholder="Search"/>
      <div>
      <button class="border border-black px-3 py-1.5 border border-gray-400 rounded-xl bg-gray-300" @click='showModalView(false, null)'>Register New Student</button>
      <Modal :isEdit="isEdit" :studentData="selectedStudentData" :editStudent="editStudent" :addStudent="addStudent" v-show="showModal" :showModalView='showModalView'/>
      </div>
    </div>
  <table class="border-collapse w-full mt-4">
    <tr class="bg-gray-300">
    <th class="border border-black p-1 text-left">Index</th>
    <th class="border border-black p-1 text-left">
      <div class="flex flex-row justify-between">
      <span class="mt-2.5">Name</span>
        <div class="flex flex-col">
          <span class="cursor-pointer" @click="sort(1)"><font-awesome-icon icon="fa-solid fa-arrow-up-wide-short" /></span>
          <span class="cursor-pointer" @click="sort(-1)"><font-awesome-icon icon="fa-solid fa-arrow-down-wide-short" /></span>
        </div>
      </div>
    </th>
    <th class="border border-black p-1 text-left">
      <div class="flex flex-row justify-between">
        <span class="mt-2.5">DoB</span>
        <div class="flex flex-col">
          <span class="cursor-pointer" @click="sort(1)"><font-awesome-icon icon="fa-solid fa-arrow-up-wide-short" /></span>
          <span class="cursor-pointer" @click="sort(-1)"><font-awesome-icon icon="fa-solid fa-arrow-down-wide-short" /></span>
        </div>
      </div>
    </th>
    <th class="border border-black p-1 text-left">
      <div class="flex flex-row justify-between">
        <span class="mt-2.5">Municipality</span>
        <div class="flex flex-col">
          <span class="cursor-pointer" @click="sort(1)"><font-awesome-icon icon="fa-solid fa-arrow-up-wide-short" /></span>
          <span class="cursor-pointer" @click="sort(-1)"><font-awesome-icon icon="fa-solid fa-arrow-down-wide-short" /></span>
        </div>
      </div>
    </th>
    <th class="border border-black p-1 text-left">Action</th>
    </tr>
    <tr v-for="(student,i) in recordsPerPage" :key="i">
      <td class="border border-black p-1">{{student.id}}</td>
      <td class="border border-black p-1">{{student.name}}</td>
      <td class="border border-black p-1">{{student.dob}}</td>
      <td class="border border-black p-1">{{student.mp}}</td>
      <td class="border border-black p-1 text-blue-500">
        <span class="cursor-pointer border-b border-b-blue-500" @click="showModalView(true, student)">Edit</span>
        <span class="ml-2 cursor-pointer border-b border-b-blue-500" @click="showDeleteModal(student.id)">Delete</span>
      </td>
    </tr>
    <DeleteModal v-show="deleteModal" :deleteStudent="deleteStudent" :hideDeleteModal="hideDeleteModal" />
  </table>
    <div class="flex flex-row justify-end m-2">
      <Pagination :pagination="{ currentPage, numberOfRows, hasPrev, hasNext, hasPrevStart, hasNextEnd, prevPage, nextPage, prevStartPage, nextEndPage, goTo}"/>
    </div>
  </div>
</div>
</template>

<script>
import { StudentInfo } from '@/studentInfo'
import Modal from '@/views/Modal'
import Pagination from '@/views/Pagination'
import DashboardHeader from '@/views/DashboardHeader'
import DeleteModal from '@/views/DeleteModal'
export default {
  name: 'HomeView',
  components: { DeleteModal, DashboardHeader, Pagination, Modal },
  data () {
    return {
      students: StudentInfo,
      search: '',
      showModal: false,
      deleteModal: false,
      rowsPerPage: 10,
      currentPage: 1,
      selectedStudentData: null,
      isEdit: false,
      currStudent: null
    }
  },
  methods: {
    showModalView (isEdit = false, studentData = null) {
      if (this.showModal) {
        this.selectedStudentData = null
      }
      this.showModal = !this.showModal
      this.selectedStudentData = studentData
      this.isEdit = isEdit
    },
    showDeleteModal (currStudentIndex) {
      this.deleteModal = true
      this.currStudent = currStudentIndex
    },
    hideDeleteModal () {
      this.currStudent = null
      this.deleteModal = false
    },
    sort (direction) {
      if (direction === 1) {
        this.students = this.students.sort((a, b) => a.name.localeCompare(b.name))
      } else if (direction === -1) {
        this.students = this.students.sort((a, b) => b.name.localeCompare(a.name))
      } else if (direction === 1) {
        this.students = this.students.sort((a, b) => a.dob.localeCompare(b.dob))
      } else if (direction === -1) {
        this.students = this.students.sort((a, b) => b.dob.localeCompare(a.dob))
      } else if (direction === 1) {
        this.students = this.students.sort((a, b) => a.mp.localeCompare(b.mp))
      } else {
        this.students = this.students.sort((a, b) => b.mp.localeCompare(a.mp))
      }
    },
    addStudent (name, dob, mp, index) {
      this.students.push({
        name: name,
        dob: dob,
        mp: mp,
        id: index
      })
    },
    editStudent (name, dob, mp, index) {
      this.students = this.students.map((it) => {
        if (it.id === index) {
          return {
            name, dob, mp, index
          }
        } else return it
      })
    },
    deleteStudent: function () {
      this.students = this.students.filter((it) => it.id !== this.currStudent)
      this.deleteModal = false
    },
    filteredSearch: function () {
      return this.students.filter((student) => {
        return student.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    goTo (page) {
      this.currentPage = page
    },
    prevPage () {
      if (this.hasPrev) {
        this.goTo(this.currentPage - 1)
      }
    },
    nextPage () {
      if (this.hasNext) {
        this.goTo(this.currentPage + 1)
      }
    },
    nextEndPage () {
      if (this.hasNextEnd) {
        this.goTo(this.numberOfRows)
      }
    },
    prevStartPage () {
      if (this.hasPrevStart) {
        this.goTo(this.currentPage - this.currentPage + 1)
      }
    }
  },
  computed: {
    numberOfRows () {
      return StudentInfo ? Math.ceil(StudentInfo.length / this.rowsPerPage) : 1
    },
    hasPrev () {
      return this.currentPage > 1
    },
    hasNext () {
      return this.currentPage < this.numberOfRows
    },
    hasPrevStart () {
      return this.currentPage > 1
    },
    hasNextEnd () {
      return this.currentPage < this.numberOfRows
    },
    recordsPerPage () {
      return (this.filteredSearch() ?? []).slice(this.rowsPerPage * (this.currentPage - 1), this.currentPage * this.rowsPerPage)
    }
  }
}
</script>
