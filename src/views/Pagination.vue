<template>
  <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
    <div class="flex items-center">
      <div class="flex flex-row items-center">
        <button
          type="button"
          class="w-full p-2 border text-base rounded-l-xl text-gray-600 bg-white hover:text-blue-500"
          @click="pagination.prevStartPage"
        >
          <span> {{'<<'}} </span>
        </button>
        <button
          type="button"
          class="w-full p-2 border-t border-b border-r text-base  text-gray-600 bg-white hover:text-blue-500"
          @click="pagination.prevPage"
        >
          <span>{{'<'}}</span>
        </button>
        <d></d>
        <div v-for="(button, i) in pageNumbers" :key="i">
          <button
            class="w-full px-4 py-2 border-t border-b text-base hover:bg-gray-100 hover:text-blue-500"
            @click="changeCurrentPage(button)"
          >
            <span>{{button.num}}</span>
          </button>
        </div>
        <button
          type="button"
          class="w-full p-2 border-t border-b border-l text-base  text-gray-600 bg-white hover:text-blue-500"
          @click="pagination.nextPage"
        >
          <span>{{'>'}}</span>
        </button>
        <button
          type="button"
          class="w-full p-2 border-t border-b border-r border-l text-base  rounded-r-xl text-gray-600 bg-white hover:text-blue-500"
          @click="pagination.nextEndPage"
        >
          <span>{{'>>'}}</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Pagination',
  props: { pagination: Object, recordsPerPage: Array },
  data () {
    return {
      currentButton: this.pagination.currentPage,
      arrOfCurrButtons: []
    }
  },
  computed: {
    pageNumbers () {
      return [...Array(this.pagination.numberOfRows).keys()].map((i) => ({ num: i + 1 }))
    }
  },
  watch: {
    currentButton () {
      let tempNumberOfPages = [...this.arrOfCurrButtons]
      const dotsInitial = '...'
      const dotsLeft = '...'
      const dotsRight = '...'
      if (this.pageNumbers.length < 6) {
        tempNumberOfPages = this.pageNumbers
      } else if (this.currentButton >= 1 && this.currentButton <= 3) {
        tempNumberOfPages = [
          {
            num: 1
          },
          {
            num: 2
          },
          {
            num: 3
          },
          {
            num: 4
          },
          {
            num: dotsInitial
          },
          {
            num: this.pageNumbers.length
          }
        ]
      } else if (this.currentButton === 4) {
        const sliced = this.pageNumbers.slice(0, 5)
        tempNumberOfPages = [
          ...sliced,
          {
            num: dotsInitial
          },
          {
            num: this.pageNumbers.length
          }
        ]
      } else if (this.currentButton > 4 && this.currentButton < this.pageNumbers.length - 2) {
        const sliced1 = this.pageNumbers.slice(this.currentButton - 2, this.currentButton)
        const sliced2 = this.pageNumbers.slice(this.currentButton, this.currentButton + 1)
        tempNumberOfPages = [
          {
            num: 1
          },
          {
            num: dotsLeft
          },
          ...sliced1,
          ...sliced2,
          {
            num: dotsRight
          },
          {
            num: this.pageNumbers.length
          }
        ]
      } else if (this.currentButton > this.pageNumbers.length - 3) {
        const sliced = this.pageNumbers.slice(this.pageNumbers.length - 4)
        tempNumberOfPages = [
          {
            num: 1
          },
          {
            num: dotsLeft
          },
          ...sliced
        ]
      } else if (this.currentButton === dotsInitial) {
        // eslint-disable-next-line vue/no-mutating-props
        this.pagination.currentPage = this.arrOfCurrButtons[this.arrOfCurrButtons.length - 3].num + 1
      } else if (this.currentButton === dotsRight) {
        // eslint-disable-next-line vue/no-mutating-props
        this.pagination.currentPage = this.arrOfCurrButtons[3].num + 2
      } else if (this.currentButton === dotsLeft) {
        // eslint-disable-next-line vue/no-mutating-props
        this.pagination.currentPage = this.arrOfCurrButtons[3].num - 2
      }
      this.arrOfCurrButtons = tempNumberOfPages
      this.pagination.goTo(this.currentButton)
    }
  },
  methods: {
    changeCurrentPage (currButtons) { this.pagination.goTo(currButtons.num) }
  }
}
</script>
