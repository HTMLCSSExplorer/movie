<template>
  <div>
    <button @click="() => getMedia('stream')">cliock</button>
  </div>
</template>

<script lang="ts" setup>
  import { shuffleArray } from "~~/shared/utils/shufflearray";

  const { media } = useMedia();
  const getMedia = async (value: TabValue) => {
    const res = await media(value);
    const suffelled = shuffleArray([...(res[0]?.results ?? []), ...(res[1]?.results ?? [])]);

    console.log(suffelled);
  };
</script>

<style scoped></style>
