<template>
  <div>
    <UNavigationMenu :items="navItems" variant="link" />
  </div>
</template>

<script lang="ts" setup>
  import type { NavigationMenuItem } from "@nuxt/ui";

  const navItems = ref<NavigationMenuItem[]>([
    { label: "Home", to: "/" },
    { label: "Test", to: "/test" },
    { label: "Test2", to: "/test2" },
  ]);
</script>

<style scoped></style>
