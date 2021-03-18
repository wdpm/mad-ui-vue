import { App } from 'vue'

import MadAfterImage from '@mad-ui/after-image'
import MadAlert from '@mad-ui/alert'
import MadBlock from '@mad-ui/block'
import MadBreadcrumb from '@mad-ui/breadcrumb'
import MadButton from '@mad-ui/button'
import MadCircleRipple from '@mad-ui/circle-ripple'
import MadCircularRipple from '@mad-ui/circular-ripple'
import MadCircularText from '@mad-ui/circular-text'
import MadCircularTextGroup from '@mad-ui/circular-text-group'
import MadClipPath from '@mad-ui/clip-path'
import MadCodeBlock from '@mad-ui/code-block'
import MadCollapseTransition from '@mad-ui/collapse-transition'
import MadColumn from '@mad-ui/column'
import MadContainer from '@mad-ui/container'
import MadCover from '@mad-ui/cover'
import MadDelete from '@mad-ui/delete'
import MadDivider from '@mad-ui/divider'
import MadDropdown from '@mad-ui/dropdown'
import MadExpansion from '@mad-ui/expansion'
import MadGear from '@mad-ui/gear'
import MadGrid from '@mad-ui/grid'
import MadHeader from '@mad-ui/header'
import MadIcon from '@mad-ui/icon'
import MadImage from '@mad-ui/image'
import MadImageCross from '@mad-ui/image-cross'
import MadImageOverlap from '@mad-ui/image-overlap'
import MadImageParallax from '@mad-ui/image-parallax'
import MadImageReveal from '@mad-ui/image-reveal'
import MadInput from '@mad-ui/input'
import MadInputAddOn from '@mad-ui/input-add-on'
import MadInsetBorder from '@mad-ui/inset-border'
import MadLetterBox from '@mad-ui/letter-box'
import MadLetterPaper from '@mad-ui/letter-paper'
import MadMedia from '@mad-ui/media'
import MadMenu from '@mad-ui/menu'
import MadModal from '@mad-ui/modal'
import MadNotification from '@mad-ui/notification'
import MadOrbitSpinner from '@mad-ui/orbit-spinner'
import MadPagination from '@mad-ui/pagination'
import MadProgress from '@mad-ui/progress'
import MadRow from '@mad-ui/row'
import MadSelect from '@mad-ui/select'
import MadShield from '@mad-ui/shield'
import MadShutter from '@mad-ui/shutter'
import MadTable from '@mad-ui/table'
import MadTag from '@mad-ui/tag'
import MadText from '@mad-ui/text'
import MadTextArea from '@mad-ui/text-area'
import MadTimeline from '@mad-ui/timeline'
import MadTreeItem from '@mad-ui/tree-item'
// import MadUtils from '@mad-ui/utils'
import MadWave from '@mad-ui/wave'

const components = [
  MadAfterImage,
  MadAlert,
  MadBlock,
  MadBreadcrumb,
  MadButton,
  MadCircleRipple,
  MadCircularRipple,
  MadCircularText,
  MadCircularTextGroup,
  MadClipPath,
  MadCodeBlock,
  MadCollapseTransition,
  MadColumn,
  MadContainer,
  MadCover,
  MadDelete,
  MadDivider,
  MadDropdown,
  MadExpansion,
  MadGear,
  MadGrid,
  MadHeader,
  MadIcon,
  MadImage,
  MadImageCross,
  MadImageOverlap,
  MadImageParallax,
  MadImageReveal,
  MadInput,
  MadInputAddOn,
  MadInsetBorder,
  MadLetterBox,
  MadLetterPaper,
  MadMedia,
  MadMenu,
  MadModal,
  MadNotification,
  MadOrbitSpinner,
  MadPagination,
  MadProgress,
  MadRow,
  MadSelect,
  MadShield,
  MadShutter,
  MadTable,
  MadTag,
  MadText,
  MadTextArea,
  MadTimeline,
  MadTreeItem,
  MadWave,
]

const plugins = [
  //
]

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component)
  })

  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}

export {
  MadAfterImage,
  MadAlert,
  MadBlock,
  MadBreadcrumb,
  MadButton,
  MadCircleRipple,
  MadCircularRipple,
  MadCircularText,
  MadCircularTextGroup,
  MadClipPath,
  MadCodeBlock,
  MadCollapseTransition,
  MadColumn,
  MadContainer,
  MadCover,
  MadDelete,
  MadDivider,
  MadDropdown,
  MadExpansion,
  MadGear,
  MadGrid,
  MadHeader,
  MadIcon,
  MadImage,
  MadImageCross,
  MadImageOverlap,
  MadImageParallax,
  MadImageReveal,
  MadInput,
  MadInputAddOn,
  MadInsetBorder,
  MadLetterBox,
  MadLetterPaper,
  MadMedia,
  MadMenu,
  MadModal,
  MadNotification,
  MadOrbitSpinner,
  MadPagination,
  MadProgress,
  MadRow,
  MadSelect,
  MadShield,
  MadShutter,
  MadTable,
  MadTag,
  MadText,
  MadTextArea,
  MadTimeline,
  MadTreeItem,
  MadWave,
  install,
}

export default {
  install,
}
