import Vue from 'vue'
import Vuetify, {
  VContainer,
  VLayout,
  VFlex,
  VDataTable,
  VChip,
  VBtn,
  VIcon,
  VTabs,
  VTab,
  VTabItem,
  VTooltip,
  VLabel,
  VCard,
  VCardText,
  VCardTitle,
  VProgressLinear,
  VCardActions,
  VSpacer,
  VAlert,
  VForm,
  VTextField,
  VList,
  VListItem,
  VListItemTitle,
  VListItemIcon,
  VDialog,
  VCol,
  VRow,
  VDivider,
  VMenu,
  VSubheader,
  VAutocomplete,
  VCombobox,
} from 'vuetify/lib'
import { Ripple, Scroll } from 'vuetify/lib/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const opts = {
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
}

Vue.use(Vuetify, {
  components: {
    VContainer,
    VLayout,
    VFlex,
    VDataTable,
    VChip,
    VBtn,
    VIcon,
    VTabs,
    VTab,
    VTabItem,
    VTooltip,
    VLabel,
    VCard,
    VCardText,
    VCardTitle,
    VProgressLinear,
    VCardActions,
    VSpacer,
    VAlert,
    VForm,
    VTextField,
    VList,
    VListItem,
    VListItemTitle,
    VListItemIcon,
    VDialog,
    VCol,
    VRow,
    VDivider,
    VMenu,
    VSubheader,
    VAutocomplete,
    VCombobox,
  },
  directives: {
    Ripple,
    Scroll,
  },
})
const vuetify = new Vuetify(opts)

// new Vue({
//   vuetify: new Vuetify(opts)
// })
export default vuetify
