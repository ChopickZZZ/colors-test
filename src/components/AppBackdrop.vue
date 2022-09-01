<script setup lang="ts">
const emit = defineEmits<{
	(event: 'backdrop-event'): void
}>()
</script>

<template>
	<Teleport to="body">
		<div class="backdrop" @click="emit('backdrop-event')" v-bind="$attrs"></div>
	</Teleport>
</template>

<style lang="scss" scoped>
.backdrop {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.3);
	overflow: hidden;
	cursor: pointer;
}
</style>