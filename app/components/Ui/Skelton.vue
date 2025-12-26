<template>
  <UCarousel
    :items="Array.from({ length: 20 }, (_, i) => i)"
    :ui="{
      item: 'basis-1/4 ps-0',
      prev: 'sm:start-8',
      next: 'sm:end-8',
      container: 'ms-0 gap-4  p-4',
    }">
    <div
      class="group flex cursor-pointer flex-col gap-3 overflow-hidden rounded-2xl duration-200 hover:scale-105">
      <div class="relative w-auto">
        <NuxtImg class="w-full" src="/no_img.svg" />
        <span
          class="bg-warning rating flex h-16 w-16 items-center justify-center rounded-full">
          <span class="text-2xl"> 0</span>
        </span>
      </div>
    </div>
  </UCarousel>
</template>

<script setup lang="ts"></script>

<style scoped></style>
