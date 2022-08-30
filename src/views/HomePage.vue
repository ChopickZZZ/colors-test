<script setup lang="ts">
import MainSlider from '../components/MainSlider.vue';
import ProductList from '../components/ProductList.vue';
</script>

<template>
	<MainSlider />
	<Suspense>
		<ProductList />
	</Suspense>
</template>