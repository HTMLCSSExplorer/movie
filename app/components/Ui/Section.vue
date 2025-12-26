<template>
  <section>
    <div class="flex items-center gap-4">
      <h2 class="font-sanspro text-lg font-semibold capitalize">
        {{ sectionTitle }}
      </h2>
      <UTabs
        :items="tabItems"
        :ui="{ root: 'gap-0' }"
        v-model="active" />
    </div>
    <div>
      <UiCarousel :mediaItems="mediaItems" />
    </div>
  </section>
</template>

<script setup lang="ts">
  const { startLoading, finishLoading } = useLoader();
  const mediaItems = ref<MediaItem[]>([]);
  const props = defineProps<{
    sectionTitle: string;
    tabItems: TabItem[];
  }>();
  const active = ref<TabValue>(props.tabItems[0]!.value);
  watch(active, async (newTab: TabValue) => {
    await getMedia(newTab);
  });

  const getMedia = async (tabValue: TabValue): Promise<void> => {
    startLoading();
    try {
      const response = await getShuffledMedia(tabValue);
      mediaItems.value = response;
    } catch (error: any) {
      console.log(`Error getting media items ${error.message}`);
    } finally {
      finishLoading();
    }
  };
  onMounted(async () => {
    await getMedia(active.value);
  });
</script>

<style scoped></style>
