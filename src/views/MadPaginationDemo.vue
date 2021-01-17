<template>
  <h2>normal size</h2>
  <mad-pagination>
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
        <a class="pagination-link">6</a>
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

  <h2>small size</h2>
  <mad-pagination size="small">
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
        <a class="pagination-link">6</a>
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

  <h2>medium size</h2>
  <mad-pagination size="medium">
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
        <a class="pagination-link">6</a>
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

  <h2>large size</h2>
  <mad-pagination size="large">
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
        <a class="pagination-link">6</a>
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

export default {
  name: 'MadPaginationDemo',
  components: {
    MadPagination,
  },
}
</script>

<style scoped></style>
