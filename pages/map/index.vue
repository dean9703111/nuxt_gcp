<template>
  <div>
    <v-container style="max-width: none;">
      <v-flex xs12>
        <v-row justify="space-between" align="center">
          <h2>3倍券地圖</h2>
        </v-row>
      </v-flex>
      <v-row>
        <v-flex xs12>
          <div
            class="map"
            style="
              height: 580px;
              padding: 5px;
              border-width: 1px;
              border-width: 1px;
              border-color: rgba(0, 0, 0, 0.14);
              border-style: solid;
            "
          >
            <client-only>
              <l-map
                ref="LMap"
                style="z-index: 5;"
                :max-zoom="18"
                :zoom="7"
                :center="centerLocation"
                :options="{ zoomControl: false, drawControl: true }"
                @zoomend="mapZoomend()"
                @ready="mapReady()"
                @locationfound="onLocationFound"
              >
                <l-marker-cluster>
                  <l-marker
                    v-for="money in moneys"
                    :key="money.storeNm"
                    :lat-lng="[money.latitude, money.longitude]"
                    :icon="getIcon()"
                  >
                    <l-popup>
                      <h2>{{ money.storeNm }}</h2>

                      <h3>
                        地址：<a
                          :href="
                            'https://www.google.com.tw/maps/place/' + money.addr
                          "
                          target="_blank"
                          >{{ money.addr }}</a
                        >
                      </h3>
                      <h3>營業時間：{{ money.busiTime }}</h3>
                      <h3>
                        電話：<a :href="'tel:' + money.tel">{{ money.tel }}</a>
                      </h3>
                    </l-popup>
                  </l-marker>
                </l-marker-cluster>
                <!-- <l-control-layers position="topright"></l-control-layers> -->
                <l-tile-layer
                  v-for="tileProvider in tileProviders"
                  :key="tileProvider.name"
                  :name="tileProvider.name"
                  :visible="tileProvider.visible"
                  :url="tileProvider.url"
                  :attribution="tileProvider.attribution"
                  layer-type="base"
                />
                <l-geosearch :options="geosearchOptions"></l-geosearch>
              </l-map>
            </client-only>
          </div>
        </v-flex>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { OpenStreetMapProvider } from 'leaflet-geosearch'

export default {
  name: 'Map',
  components: {},
  data() {
    return {
      geosearchOptions: {
        provider: new OpenStreetMapProvider(),
        showMarker: true,
        autoClose: true,
        keepResult: true,
        // style: 'bar',
        marker: {
          draggable: false,
        },
      },
      tileProviders: [
        {
          name: 'OpenStreetMap',
          visible: true,
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        },
        {
          name: 'OpenTopoMap',
          visible: false,
          url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        },
      ],
      centerLocation: { lat: 23.858987, lng: 120.917631 },
    }
  },
  computed: {
    moneys() {
      return this.$store.state.leaflet.moneyMap
    },
  },
  watch: {},
  async mounted() {
    await this.$store.dispatch('leaflet/get3000MoneyMapJson')
  },
  methods: {
    getIcon() {
      return new L.Icon({
        iconUrl:
          'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      })
    },
    onResize() {
      console.log('onResize')
    },
    mapReady() {
      console.log('mapLoad')
      // 放入自我定位
      this.$L.control
        .locate({
          position: 'topright',
          strings: {
            title: 'Show me where I am, yo!',
          },
          initialZoomLevel: 15,
          drawCircle: false,
        })
        .addTo(this.$refs.LMap.mapObject)
      // 改變搜尋marker位置
      this.geosearchOptions.marker.icon = new L.Icon({
        iconUrl:
          'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      })
    },
    mapZoomend() {},
    onLocationFound(location) {
      console.log(location)
    },
  },
}
</script>
<style lang="stylus" scoped>
>>>.v-data-table thead tr {
  background-color: #ececec !important;
}

>>>.v-data-table tbody tr:nth-of-type(even) {
  background-color: rgba(0, 0, 0, 0.05);
}

.y-axis line {
  opacity: 0.2;
}

.y-axis path {
  display: none;
}

.line {
  fill: none;
  stroke-width: 1.5px;
  opacity: 0.75;
}

.overlay {
  fill: none;
  pointer-events: all;
}

.lineHoverText {
  text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
}

.hoverCircle {
  opacity: 0.75;
}

.content {
  display: block;
  width: 100%;
  height: 100%;
  min-width: 300px;
  max-width: 960px;
  max-height: 500px;
  overflow: hidden;
}

>>>.leaflet-control-locate a {
  color: red;
  width: 35px;
  height: 35px;
  padding-top:1px
}

>>>.leaflet-control-locate a span {
  font-size: 1.8em;
  cursor: pointer;
}

>>>.leaflet-control-locate.active a {
  color: #2074B6;
}
</style>
