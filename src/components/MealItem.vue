<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <router-link :to="{name: 'mealDetail', params: {id: meal.idMeal}}">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-52 object-cover">
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quo, hic possimus nam molestiae perferendis
      </p>
      <div class="flex items-center">
        <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from './YouTubeButton.vue';


const { meal } = defineProps({
  meal: Object
})
</script>