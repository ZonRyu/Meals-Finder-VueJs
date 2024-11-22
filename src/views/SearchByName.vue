<template>
  <div class="p-8">
    <h1 class="text-5xl font-bold text-orange-500 mb-8">Search Meals by Name</h1>
    <input v-model="keyword" type="text" class="rounded border-2 border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-orange-500 w-full" placeholder="Search for Meals"
      @change="searchMeals" />
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

const route = useRoute()
const meals = computed(() => store.state.searchedMeals.data)
const keyword = ref('')

function searchMeals() {
  if (keyword.value) {
    store.dispatch('searchMeals', keyword.value)
  } else {
    store.commit('setSearchMeals', [])
  }
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
</script>