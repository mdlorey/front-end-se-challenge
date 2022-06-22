<template>
  <div class="beer-finder">
    <h3 class="beer-finder__title">
      <FontAwesomeIcon class="beer-finder__logo" :icon="['fas', 'beer-mug-empty']" />
      Beer Me!
    </h3>
    <div v-if="breweries.length < 1" class="beer-finder__search-button">
      <RippleButton @click="search">
        Find Breweries Near Me
      </RippleButton>
    </div>
    <div class="beer-finder__breweries">
      <template v-for="(brewery, index) in breweries" :key="brewery.d">
        <div class="beer-finder__brewery">
          <div class="beer-finder__image">
            <div class="beer-finder__distance">
              {{ distance(parseFloat(brewery.latitude), parseFloat(brewery.longitude)) }} miles
            </div>
            <img src="https://placebeer.com/600/400">
            <div class="beer-finder__type">
              {{ brewery.brewery_type }}
            </div>
          </div>
          <div class="beer-finder__details">
            <h3 class="beer-finder__brewery-name">
              <a v-if="brewery.website_url" :href="brewery.website_url" target="_blank">{{ brewery.name }}</a>
              <template v-else>
                {{ brewery.name }}
              </template>
            </h3>
            <div class="beer-finder__brewery-address">
              <a :href="googleDirectionsLink(index)" target="_blank">{{ brewery.street }}</a>
            </div>
            <div class="beer-finder__brewery-address2">
              <a :href="googleDirectionsLink(index)" target="_blank">{{ brewery.city }}, {{ brewery.state }}, {{ brewery.postal_code.split('-')[0] }}</a>
            </div>
            <div v-if="brewery.phone" class="beer-finder__brewery-phone">
              {{ formatPhoneNumber(brewery.phone) }}
            </div>
          </div>
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

  function googleDirectionsLink(index: number): string {
    const { street, city, state, postal_code } = breweries[index]
    let url = 'https://www.google.com/maps/dir//&'
    url = `${url}${encodeURI(`${street.replaceAll(' ', '+')},+${city},+${state},+${postal_code}`)}`

    return url
  }

  function formatPhoneNumber(phone: string): string {
    let cleaned = `${phone}`.replace(/\D/g, '')
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`
    }

    return ''
  }
</script>

<style lang="scss">
.beer-finder {
  padding: 24px 12px;
  background-color: #f7f8fc;
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

.beer-finder__breweries {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  grid-auto-rows: minmax(100px, auto);
}

.beer-finder__brewery {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);

  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
}

.beer-finder__image {
  position: relative;
}

.beer-finder__distance {
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: bolder;
  position: absolute;
  top: 15px;
  left: 15px;
  color: white;
  background-color: #81b29a;
  padding: 5px 10px;
  border-radius: 5px;
}

.beer-finder__type {
  text-transform: uppercase;
  font-weight: bolder;
  position: absolute;
  bottom: 20px;
  left: 15px;
  color: white;
  background-color: #e07a5f;
  padding: 5px 10px;
  border-radius: 5px;
}

.beer-finder__details {
  color: #3d405b;
  padding: 15px;

  a {
    color: #05668d;
  }
}

.beer-finder__brewery-name {
  margin: 0 0 0.5rem;
}

.beer-finder__brewery-address,
.beer-finder__brewery-address2 {
  a {
    text-decoration: none;
  }
}

.beer-finder__brewery-phone {
  font-weight: bolder;
  margin-top: 0.5rem;
}
</style>