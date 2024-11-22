<template>
  <div class="flex flex-wrap justify-center gap-2 mt-8">
    <router-link :to="{name: 'byLetter', params: { letter }}" v-for="letter of letters.split('')" :key="letter" class="text-xl font-semibold">
      {{ letter }}
    </router-link>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const meals = computed(() => store.state.mealsByLetter.data)


function searchMeals() {
  store.dispatch('searchMealsByLetter', route.params.letter)
}


watch(route, () => {
  searchMeals()
})

onMounted(() => {
  if (route.params.letter) {
    searchMeals()
  }
})
</script>