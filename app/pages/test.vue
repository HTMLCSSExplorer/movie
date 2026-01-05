<template>
  <div>
    <UiSectionButtons
      :tab-items="tabItems"
      section-title="section "
      @tab-change="tabchange" />
  </div>
</template>

<script setup lang="ts">
  const tabItems = ref<TabsItem[]>([
    new TabsItem("Title1", "day"),
    new TabsItem("Title3", "week"),
  ]);
  const activeTab = ref<TabValue>(tabItems.value[0]!.value);

  const tabchange = (tabValue: TabValue): void => {
    activeTab.value = tabValue;
  };

  const asyncKey = computed(() => `media-${activeTab.value}`);
  const { data } = useAsyncData(
    asyncKey.value,
    () => {
      return $fetch("/api/media", {
        method: "POST",
        body: {
          tab: activeTab.value,
        },
      });
    },
    {
      immediate: true,
      watch: [activeTab],
    }
  );

  watch(data, () => {
    console.log(data.value);
  });
</script>

<style scoped></style>
