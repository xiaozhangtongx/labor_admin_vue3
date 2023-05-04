<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'

const props = defineProps({
  lng: {
    type: Number,
    required: true,
    default: 116.397428,
  },
  lat: {
    type: Number,
    require: true,
    default: 39.90923,
  },
})

const map = ref<any>(null)
const address = ref('')
const center = ref([116.397428, 39.90923])

onMounted(() => {
  // TODO: 初始化中心点
  if (props.lat !== null && props.lng !== null)
    center.value = [props.lng, props.lat]

  AMapLoader.load({
    key: 'b8fdf4fcb8c3449e4d3ef4e1a0172552',
    version: '2.0',
    plugins: ['AMap.Geolocation', 'AMap.Geocoder'],
  }).then((AMap: any) => {
    map.value = new AMap.Map('map', {
      center: center.value,
      zoom: 13,
    })

    // TODO: 逆地理编码输出地址
    const geocoder = new AMap.Geocoder({
      city: '全国',
      radius: 1000,
    })
    geocoder.getAddress([props.lng, props.lat], (status: string, result: any) => {
      if (status === 'complete' && result.regeocode)
        address.value = result.regeocode.formattedAddress
    })

    // TODO: 添加标点
    const marker = new AMap.Marker({
      position: new AMap.LngLat(116.39, 39.9), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      title: '打卡',
    })

    // 将创建的点标记添加到已有的地图实例：
    map.value?.add(marker)
    map.value.zoom = 18
  })
})
</script>

<template>
  <div class="map-container">
    <p><strong>经度：</strong>{{ props.lng || '还未打卡' }}  <strong class="ml-3"> 纬度：</strong>   {{ props.lat || '还未打卡' }}</p>
    <p><strong>地址：</strong>{{ address || '还未打卡' }}</p>
    <div id="map" />
  </div>
</template>

<style>
.map-container {
  height: 360px;
}

#map {
  height: 100%;
}
</style>
