<template>
  <div>
    <button @click="addId">+</button>
    <UiLoadAnime v-if="pending" />
  </div>
</template>

<script setup lang="ts">
  const id = ref(0);
  const { data, pending } = useAsyncData(
    () => `id-${id.value}`,
    () => {
      return $fetch("/api/test");
    },
    {
      watch: [id],

      default() {
        "def";
      },
    }
  );

  watchEffect(() => {
    if (!pending.value) {
      console.log(data.value);
    }
  });

  const addId = () => {
    id.value++;
    console.log(id.value);
  };
</script>

<style scoped></style>
