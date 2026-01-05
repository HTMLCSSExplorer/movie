<template>
  <div class="flex gap-4">
    <h2 class="font-sanspro text-2xl font-bold capitalize">
      {{ sectionTitle }}
    </h2>
    <UTabs
      :items="tabItems"
      :ui="{ root: 'p-0 sm:p-0' }"
      v-model="active" />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    sectionTitle: string;
    tabItems: TabsItem[];
  }>();

  const active = ref<TabValue>(props.tabItems[0]!.value);

  const emit = defineEmits<{
    (e: "tab-change", tabValue: TabValue): void;
  }>();

  watch(
    () => active.value,
    (newTabValue) => {
      emit("tab-change", newTabValue);
    }
  );
</script>

<style scoped></style>
