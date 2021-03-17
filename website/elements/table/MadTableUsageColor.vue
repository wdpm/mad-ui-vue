<template>
  <mad-table v-for="color in colorMapValues" :key="color" :color="color">
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
  </mad-table>
</template>

<script>
import MadTable from '@/elements/MadTable'
import { colorMapValues } from '@/utils/propValidateHelper'

export default {
  name: 'MadTableUsageColor',
  components: {
    MadTable,
  },
  data() {
    return {
      colorMapValues,
    }
  },
}
</script>

<style scoped></style>
