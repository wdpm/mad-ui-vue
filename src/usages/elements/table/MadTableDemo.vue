<template>
  <!--default style-->
  <h2>default</h2>
  <mad-table>
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

  <h2>colors</h2>
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

  <h2>narrow</h2>
  <mad-table narrow>
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

  <h2>fullwidth</h2>
  <mad-table fullwidth>
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

  <h2>horizontal-lined</h2>
  <mad-table horizontal-lined>
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

  <h2>borderless</h2>
  <mad-table borderless>
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

  <h2>striped</h2>
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

  <h2>hoverable</h2>
  <mad-table hoverable>
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

  <h2>combination</h2>
  <mad-table striped hoverable narrow horizontal-lined borderless>
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
  name: 'MadTableDemo',
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
