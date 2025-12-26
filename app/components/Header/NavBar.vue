<template>
  <div>
    <UNavigationMenu :items="navItems" />
  </div>
</template>

<script lang="ts" setup>
  import type { NavigationMenuItem } from "@nuxt/ui";

  const navItems = ref<NavigationMenuItem[]>([
    { label: "Home", to: "/" },
    { label: "Test", to: "/test" },
    {
      label: "Movies",
      children: [
        {
          label: "Popular",
          to: "/movie/popular",
        },
      ],
    },
  ]);
</script>

<style scoped></style>
