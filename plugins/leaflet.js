import Vue from 'vue'
import * as L from 'leaflet'
import VGeosearch from 'vue2-leaflet-geosearch'
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'
import LeafletHeatmap from 'vue2-leaflet-heatmap'
import 'leaflet.locatecontrol'
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css'
Vue.component('l-marker-cluster', Vue2LeafletMarkerCluster)
Vue.component('l-geosearch', VGeosearch)
Vue.component('l-heatmap', LeafletHeatmap)
const LeafletPlugin = {
  install(Vue) {
    // Expose Leaflet
    Vue.prototype.$L = L
  },
}

Vue.use(LeafletPlugin)
