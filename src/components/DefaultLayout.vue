<script setup>
import Navbar from './Navbar.vue';
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <Navbar />
    <main class="max-w-[1200px] mx-auto">
      <router-view />
    </main>
  </div>
</template>