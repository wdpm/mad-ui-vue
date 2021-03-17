<template>
  <mad-pagination v-for="size in sizes" :key="size" :size="size">
    <a class="pagination-previous">Previous</a>
    <ul class="pagination-list">
      <li>
        <a class="pagination-link">1</a>
      </li>
      <li>
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li>
        <a class="pagination-link">5</a>
      </li>
      <li>
        <a class="pagination-link current">6</a>
      </li>
      <li>
        <a class="pagination-link">7</a>
      </li>
      <li>
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li>
        <a class="pagination-link">17</a>
      </li>
    </ul>
    <a class="pagination-next" disabled>Next page</a>
  </mad-pagination>
</template>

<script>
import MadPagination from '@/components/MadPagination'
import { sizes } from '@/../../../packages/utils/propValidateHelper'

export default {
  name: 'MadPaginationUsageSize',
  components: {
    MadPagination,
  },
  data() {
    return {
      sizes,
    }
  },
}
</script>

<style scoped></style>
