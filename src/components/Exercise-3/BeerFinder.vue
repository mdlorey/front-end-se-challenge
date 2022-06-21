<template>
  <div class="beer-finder">
    <h3 class="beer-finder__title">
      <FontAwesomeIcon class="beer-finder__logo" :icon="['fas', 'beer-mug-empty']" />
      Find Beer Near Me
    </h3>
    <div v-if="breweries.length < 1" class="beer-finder__search-button">
      <RippleButton @click="search">
        Find Breweries Near Me
      </RippleButton>
    </div>
    <div class="beer-finder__breweries">
      <template v-for="brewery in breweries" :key="brewery.d">
        <div class="beer-finder__brewery">
          Distance: {{ distance(brewery.latitude, brewery.longitude) }} miles
          {{ brewery }}
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { reactive } from 'vue'
  import { ActiveLoader, useLoading } from 'vue-loading-overlay'
  import RippleButton from '@/components/RippleButton.vue'

  type Brewery = {
    id: string,
    name: string,
    brewery_type: string,
    street: string,
    address_2?: string,
    address_3?: string,
    city: string,
    state: string,
    county_province?: string,
    postal_code: string,
    country: string,
    longitude: string,
    latitude: string,
    phone: string,
    website_url: string,
    updated_at: Date,
    created_at: Date,
  }

  const breweries: Brewery[] = reactive([])
  const baseUrl = 'https://api.openbrewerydb.org/breweries'
  const $loading = useLoading()
  let loader: ActiveLoader
  let latitude: number
  let longitude: number

  async function search(): Promise<void> {
    // get latitude and longitude if they are not already available
    if (!latitude && !longitude) {
      loader = $loading.show()
      const { lat, long } = await getCoords()
      latitude = lat
      longitude = long
    }
    getLocalBreweries()
  }

  async function getCoords(): Promise<{ lat: number, long: number }> {
    const { coords: { latitude: lat, longitude: long } }: GeolocationPosition
      = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position),
          (error) => reject(error),
        )
      })

    return { lat, long }
  }

  async function getLocalBreweries(): Promise<void> {
    const url = `${baseUrl}?by_dist=${latitude},${longitude}&per_page=10`
    const response = await fetch(url)
    const data = await response.json()
    loader.hide()
    breweries.push(...data)
  }

  function distance(destLat: number, destLon: number): number {
    if (latitude == destLat && longitude == destLon) {
      return 0
    }

    const radlat1 = Math.PI * latitude/180
    const radlat2 = Math.PI * destLat/180
    const theta = longitude - destLon
    const radtheta = Math.PI * theta/180
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
    if (dist > 1) {
      dist = 1
    }
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    return Math.round(dist * 10) / 10
  }
</script>

<style lang="scss">
.beer-finder {
  padding: 24px 12px;
}

.beer-finder__title {
  margin-top: 0;
  text-align: center;
}

.beer-finder__search-button {
  text-align: center;
  .ripple-button {
    width: auto;
  }

}
</style>