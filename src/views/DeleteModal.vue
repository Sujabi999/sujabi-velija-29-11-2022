<template>
  <div class="fixed top-0 left-0 w-fill lg:w-screen h-fill lg:h-screen bg-black bg-opacity-40 flex justify-center items-center">
    <div class="flex flex-col bg-white h-48">
      <div class="text-xl border-b border-gray-300 p-4 flex justify-between items-center">
        <div>Delete Confirmation</div>
        <div class="text-gray-400 hover:text-gray-600 cursor-pointer">
          <span @click="hideDeleteModal">X</span>
        </div>
      </div>
      <div class="p-4 flex flex-grow flex-col overflow-y-auto">
        <div>Are you sure you want to delete the Selected User?</div>
      </div>
      <div class="border-t border-gray-300 p-4 flex justify-end items-center mb-0">
        <div>
          <button class="border border-black bg-gray-300 mr-2 w-20" @click="hideDeleteModal" >Cancel</button>
        </div>
        <div>
          <button class="border border-black bg-gray-300 w-20" @click="deleteStudent">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeleteModal',
  props: { deleteStudent: Function, hideDeleteModal: Function }

}
</script>
