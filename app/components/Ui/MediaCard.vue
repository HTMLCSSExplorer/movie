<template>
  <UCard
    class="group cursor-pointer duration-200 hover:scale-105"
    :ui="{ header: 'p-0 sm:p-0' }"
    @click="handleClick">
    <template #header>
      <div class="relative w-87.5">
        <NuxtImg
          class="w-full duration-200 group-hover:scale-120"
          src="https://media.themoviedb.org/t/p/w220_and_h330_face/65Jr1JAgWlu9em8zHhAfrNJJQBt.jpg" />
        <span :class="setRatingBackgroundColor()" class="rating"
          >vote</span
        >
      </div>
    </template>
    <template #default>
      <div
        class="space-y-4 transition-all duration-200 group-hover:mt-10">
        <h3 class="text-2xl font-bold capitalize">
          {{ mediaTitle() }}
        </h3>
        <p class="text-muted text-lg font-semibold">
          {{ mediaDate() }}
        </p>
      </div>
    </template>
  </UCard>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    media: MediaItem;
  }>();

  const mediaTitle = (): string => {
    return "title" in props.media
      ? props.media.title
      : props.media.name;
  };
  const mediaDate = (): string => {
    if (props.media.media_type === "movie") {
      return props.media.release_date;
    }
    if (props.media.media_type === "tv") {
      return props.media.first_air_date;
    }
    return "";
  };

  const setRatingBackgroundColor = (): string => {
    const vote = +props.media.vote_average;

    if (+vote >= 0 && +vote < 6) {
      return "bg-red-500";
    }

    if (+vote >= 6 && +vote < 7.5) {
      return "bg-amber-500";
    }

    return "bg-green-500";
  };

  const emit = defineEmits<{
    (e: "click", media: MediaItem): void;
  }>();

  const handleClick = () => {
    emit("click", props.media);
  };
</script>

<style scoped></style>
