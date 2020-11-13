<template>
  <div>
    <portal to="toolbar">
      <template v-if="title">
        {{ title }}
      </template>
      <slot name="tools"></slot>
    </portal>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>