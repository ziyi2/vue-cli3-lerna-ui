<template>
  <nav class="h-page-header">
    <span v-if="showTotal" class="h-page-total">共 {{ total }} 条</span>
    <ul :class="['h-pagination', radius ? `h-pagination-radius-${radius}` : '']">
      <li :class="{ 'disabled': current === 1 }" @click="pageClicked(current - 1)">上一页</li>
      <li v-if="hasFirst"
        :class="[{'active': isActive(1)}, 'number']"
        @click="pageClicked(1)"
        title="1">1</li>
      <li v-if="hasFirstEllipsis" class="ellipsis"
        @mouseenter="onMouseenter('left')"
        @mouseleave="quickprevClassIcon = 'fa fa-ellipsis-h'"
        @click="pageClicked(current - 5)">
        <i :class="quickprevClassIcon"></i>
      </li>
      <li v-for="page in pages" :key="page.id"
        :class="[{'active': isActive(page)}, 'number']"
        @click="pageClicked(page)">{{ page }}</li>
      <li v-if="hasLastEllipsis" class="ellipsis"
        @mouseenter="onMouseenter('right')"
        @mouseleave="quicknextClassIcon = 'fa fa-ellipsis-h'"
        @click="pageClicked(current + 5)">
        <i :class="quicknextClassIcon"></i>
      </li>
      <li v-if="hasLast && totalPages > 1"
        :class="[{'active': isActive(totalPages)}, 'number']"
        @click="pageClicked(totalPages)" :title="totalPages">{{ totalPages }}</li>
      <li :class="{ 'disabled': current === totalPages }" @click="pageClicked(current + 1)">下一页</li>
    </ul>
    <h-select v-if="pageOptions.length"
      :options="pageOptions" min-width="100px"
      @on-change="(size) => { this.size = size }"
      v-model="size" :radius="radius"
    ></h-select>
    <div class="h-pagination-jump" v-if="showJump">
      <span>前往</span><input type="text" v-model="jump" @keyup.enter="eventHandle" @blur="eventHandle"><span>页</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HPagination',
  props: {
    total: {
      type: Number,
      require: true
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSizes: {
      type: Array,
      default: () => ([])
    },
    pageSize: {
      type: Number,
      default: 20
    },
    showTotal: {
      type: Boolean,
      default: false
    },
    showJump: {
      type: Boolean,
      default: false
    },
    radius: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      current: this.currentPage,
      size: this.pageSize,
      quickprevClassIcon: 'fa fa-ellipsis-h',
      quicknextClassIcon: 'fa fa-ellipsis-h',
      jump: this.currentPage
    }
  },
  watch: {
    size (val) {
      this.$emit('on-page-size-change', val)
    },
    current (val) {
      this.jump = val
    }
  },
  computed: {
    pageOptions () {
      return this.pageSizes.map((val) => ({label: val + ' 条/页', value: val}))
    },
    totalPages () {
      return this.total % this.size ? parseInt(this.total / this.size) + 1 : this.total / this.size
    },
    hasFirst () {
      return this.current >= 4 || this.totalPages < 10
    },
    hasLast () {
      return this.current <= this.totalPages - 4 || this.totalPages < 10
    },
    hasFirstEllipsis () {
      return this.current >= 4 && this.totalPages >= 10
    },
    hasLastEllipsis () {
      return this.current <= this.totalPages - 4 && this.totalPages >= 10
    },
    pages () {
      return this.totalPages === undefined ? [] : this.pageLinks()
    }
  },
  methods: {
    onMouseenter (direction) {
      if (direction === 'left') {
        this.quickprevClassIcon = 'fa fa-angle-double-left'
      } else {
        this.quicknextClassIcon = 'fa fa-angle-double-right'
      }
    },
    eventHandle () {
      if (!/^[1-9]\d*$/.test(this.jump)) {
        this.jump = 1
      }
      if (this.jump > this.totalPages) {
        this.jump = this.totalPages
      }
      this.pageClicked(parseInt(this.jump))
    },
    isActive (page) {
      const current = this.current || 1
      return current === page
    },
    pageClicked (page) {
      if (page === this.current) {
        return
      } else if (page < 1) {
        page = 1
      } else if (page > this.totalPages) {
        page = this.totalPages
      }
      this.current = page
      this.$emit('on-page-change', page)
    },
    pageLinks () {
      const pages = []
      let left = 2
      let right = this.totalPages - 1
      if (this.totalPages >= 10) {
        left = Math.max(1, this.current - 2)
        right = Math.min(this.current + 2, this.totalPages)
        if (this.current <= 4) {
          right = 6
        } else if (this.totalPages - this.current < 4) {
          left = this.totalPages - 5
          right = this.totalPages
        }
      }
      for (let i = left; i <= right; i++) {
        pages.push(i)
      }
      return pages
    }
  }
}
</script>
