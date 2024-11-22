<template>
  <div class="flex flex-col p-8">
    <h1 class="text-4xl font-bold mb-4 text-center">Welcome to Meal Finder</h1>
    <p class="text-center font-semibold">Search for Meals by name, letter or ingredients</p>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import axiosClient from '../axiosClient'
import store from '../store'
import Meals from '../components/Meals.vue';

const ingredients = ref([])

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
  console.log(response)
  ingredients.value = response.data
})

</script>
