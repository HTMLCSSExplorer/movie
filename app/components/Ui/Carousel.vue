<template>
  <div>
    <UCarousel
      v-if="mediaItems.length"
      v-slot="{ item }"
      :items="mediaItems"
      :ui="{
        item: 'basis-1/4 ps-0',
        prev: 'sm:start-8',
        next: 'sm:end-8',
        container: 'ms-0 gap-4  p-4',
      }">
      <div
        @click="handleClick(item)"
        class="group flex cursor-pointer flex-col gap-3 overflow-hidden rounded-2xl duration-200 hover:scale-105">
        <div class="relative w-auto">
          <NuxtImg
            class="w-full"
            :src="`https://image.tmdb.org/t/p/w600_and_h900_bestv2${
              item.poster_path ? item.poster_path : '/no-img.svg'
            }`" />
          <span
            class="bg-warning rating flex h-16 w-16 items-center justify-center rounded-full">
            <span class="text-2xl">{{
              item.vote_average.toFixed(0)
            }}</span>
          </span>
        </div>
      </div>
      <div class="p-4">
        <h3 class="text-md font-sanspro font-semibold">
          {{ "title" in item ? item.title : item.name }}
        </h3>
        <p>
          {{ getMediaDate(item) }}
        </p>
      </div>
    </UCarousel>
    <UiSkelton v-else />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    mediaItems: MediaItem[];
  }>();

  const getMediaDate = (item: MediaItem): string | null => {
    switch (item.media_type) {
      case "movie":
        return item.release_date;
      case "tv":
        return item.first_air_date;

      default:
        return null;
    }
  };
  const handleClick = (item: MediaItem) => {
    navigateTo(
      `/details/${item.media_type}/${item.id}-${sanitizeString("title" in item ? item.title : item.name)}`
    );
  };
</script>

<style scoped></style>
