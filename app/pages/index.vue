<template>
  <div>
    <UiSection
      :delay="2000"
      :tabItems="tabItems"
      sectionTitle="section title" />
    <UiSection
      :delay="1000"
      :tabItems="tabItems"
      sectionTitle="section title" />
  </div>
</template>

<script setup lang="ts">
  const tabItems = ref<TabItem[]>([
    { label: "Today", value: "day" },
    { label: "This Weed", value: "week" },
  ]);
</script>

<style scoped></style>
