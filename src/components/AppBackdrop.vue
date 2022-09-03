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
	z-index: 50;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0);
	overflow: hidden;
	transition: background-color .3s ease;
	pointer-events: none;
	cursor: pointer;
}

.backdrop.active {
	pointer-events: all;
	background-color: rgba(0, 0, 0, 0.7);
}
</style>