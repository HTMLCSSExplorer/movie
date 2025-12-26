<template>
  <div>
    <UiSection :tabItems="tabItems" sectionTitle="section title" />
    <UiSection :tabItems="tabItems1" sectionTitle="section title" />
  </div>
</template>

<script setup lang="ts">
  const tabItems = ref<TabItem[]>([
    { label: "Today", value: "day" },
    { label: "This Weed", value: "week" },
  ]);
  const tabItems1 = ref<TabItem[]>([
    { label: "Stream", value: "stream" },
    { label: "Rent", value: "rent" },
  ]);
</script>

<style scoped></style>
