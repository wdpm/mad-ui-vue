<template>
  <mad-table striped>
    <template v-slot:default>
      <thead>
        <tr>
          <th>Name</th>
          <th>Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Frozen Yogurt</td>
          <td>159</td>
        </tr>
        <tr>
          <td>Ice cream sandwich</td>
          <td>237</td>
        </tr>
        <tr>
          <td>Eclair</td>
          <td>262</td>
        </tr>
      </tbody>
    </template>
  </mad-table>
</template>

<script>
import MadTable from '@/elements/MadTable'

export default {
  name: 'MadTableUsageStriped',
  components: {
    MadTable,
  },
}
</script>

<style scoped></style>
