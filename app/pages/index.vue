<script setup>
const { data } = await useFetch('/api/cat-fact')
</script>

<template>
  <div class="p-10 max-w-2xl mx-auto">
    <h1 class="text-3xl mb-4">🐈 Random cat fact</h1>
    <p class="mb-6">{{ data.fact }}</p>

    <p style="font-style:italic;">The external API is fetched server-side, you won't see the real URL (https://catfact.ninja/fact) in devtools.</p>
  </div>
</template>
