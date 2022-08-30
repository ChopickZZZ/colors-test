<script setup lang="ts">
import MainSlider from '../components/MainSlider.vue';
import ProductList from '../components/ProductList.vue';
import AppCart from '../components/AppCart.vue';
</script>

<template>
	<MainSlider />
	<Suspense>
		<ProductList />
	</Suspense>
	<AppCart />
</template>