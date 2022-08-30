<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { ref } from 'vue'

const swiperTextObj = ref([
	{
		title: 'Краски',
		text: 'Идеально подходит под цвет стен и других поверхностей. Найди свой идеальный цвет!',
		img: 'https://c.wallhere.com/photos/25/f6/Lamborghini_Gallardo_Lamborghini_Super_Car_vehicle_car-233958.jpg!d'
	},
	{
		title: 'Краски',
		text: 'Идеально подходит под цвет стен и других поверхностей. Найди свой идеальный цвет!',
		img: 'https://oir.mobi/uploads/posts/2019-12/1577794384_1-1.jpg'
	},
	{
		title: 'Краски',
		text: 'Идеально подходит под цвет стен и других поверхностей. Найди свой идеальный цвет!',
		img: 'https://w-dog.ru/wallpapers/15/16/294102124978111/tekstura-bumaga-ogon-korichnevyj-zheltyj-bumazhnyj-fon-treshhina-treshhiny.jpg'
	},
	{
		title: 'Краски',
		text: 'Идеально подходит под цвет стен и других поверхностей. Найди свой идеальный цвет!',
		img: 'https://main-cdn.sbermegamarket.ru/hlr-system/117/762/384/198/019/600004547074b0.jpeg'
	},
	{
		title: 'Краски',
		text: 'Идеально подходит под цвет стен и других поверхностей. Найди свой идеальный цвет!',
		img: 'https://zvetnoe.ru/upload/catalog/2017/12/MINIA40114.jpg'
	}
])
</script>

<template>
	<div class="slider">
		<div class="container" style="position: relative">
			<ul class="menu-path">
				<li class="menu-path__item">Главная</li>
				<li class="menu-path__item">Продукты</li>
				<li class="menu-path__item">Краски</li>
			</ul>
		</div>
		<Swiper :modules="[Pagination, Navigation, Autoplay]" :navigation="{ nextEl: '.next-arrow' }"
			:pagination="{ clickable: true }" :space-between="20" :loop="true">
			<div class="next-arrow">
				<svg width="22" height="42" viewBox="0 0 22 42" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 41L21 21L1 1" stroke="white" stroke-width="2" stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
			</div>
			<SwiperSlide v-for="(text, idx) in swiperTextObj" :key="idx">
				<div class="slide" :style="{ 'background-image': `url(${text.img})` }">
					<div class="container" style="width: 1838px; position: relative;">
						<div class="slide__inner">
							<h1 class="slide__title">{{ text.title }}</h1>
							<p class="slide__text">{{ text.text }}</p>
						</div>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style scoped lang="scss">
.slider {
	position: relative;
}

.swiper {
	height: 56rem;

	@media (max-width: 56.25em) {
		height: 42rem;
	}

	@media (max-width: 37.5em) {
		display: none;
	}
}

.slide {
	height: 100%;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;

	&__inner {
		width: 100%;
		height: 56rem;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	&__title {
		font-weight: 400;
		color: #fff;
		font-size: 7.2rem;
		letter-spacing: -0.02em;
		line-height: 88%;
		margin-bottom: 2.6rem;
	}

	&__text {
		text-align: center;
		max-width: 47.2rem;
		color: #fff;
		font-weight: 500;
		font-size: 1.6rem;
		line-height: 130%;
	}
}

.menu-path {
	position: absolute;
	top: 3.2rem;
	left: 0;
	list-style: none;
	display: flex;
	align-items: center;
	gap: 1.9rem;
	z-index: 50;
	padding-left: inherit;

	&__item {
		position: relative;
		font-size: 1rem;
		text-transform: uppercase;
		color: var(--color-light);
		letter-spacing: 0.06em;
	}

	&__item:not(:last-child)::after {
		content: "";
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: -1.15rem;
		width: 3px;
		height: 3px;
		border-radius: 50%;
		background-color: currentColor;
	}
}
</style>