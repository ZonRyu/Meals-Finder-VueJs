<template>
  <header class="bg-white px-5 shadow h-16 flex justify-between items-stretch">
    <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full text-orange-500 font-bold">
      Home
    </router-link>
    <div class="flex items-center gap-x-4">
      <router-link :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white">
        Search Meals
      </router-link>
      <router-link :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white">
        Meals By Letter
      </router-link>
      <router-link :to="{ name: 'ingredient' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white">
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>