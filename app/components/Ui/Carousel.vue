<template>
  <div>
    <UCarousel
      v-if="mediaItems.length"
      v-slot="{ item }"
      :items="mediaItems"
      :autoplay="{ delay: delay }"
      loop
      :ui="{
        item: 'md:basis-1/2 lg:basis-1/3 xlg:basis-1/4 ps-0',
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
            class="rating flex items-center justify-center rounded-full"
            :class="setRatingBgColor(item)">
            <span class="text-3xl"
              >{{ item.vote_average.toFixed(1) }}
            </span>
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
    delay: number;
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

  const setRatingBgColor = (item: MediaItem): string => {
    const vote = item.vote_average;
    if (vote >= 0 && vote < 6) return "bg-red-500";
    if (vote >= 6 && vote < 7.5) return "bg-yellow-500";
    return "bg-green-500";
  };
</script>

<style scoped></style>
