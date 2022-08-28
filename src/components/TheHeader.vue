<script setup lang="ts">
import { ref } from 'vue'

const menuShow = ref(false)
</script>

<template>
	<div class="container">
		<header class="header">
			<div class="logo">
				<h1 class="logo__title">Colors</h1>
				<div class="logo__dot"></div>
			</div>
			<div :class="['btn-hamburger', { close: menuShow }]" @click="menuShow = !menuShow">
				<div class="btn-hamburger__bar"></div>
				<div class="btn-hamburger__bar"></div>
				<div class="btn-hamburger__bar"></div>
			</div>
			<ul :class="['navigation-list', { show: menuShow }]">
				<li class="navigation-list__item">
					<a class="navigation-list__link" href="#">Продукты</a>
				</li>
				<li class="navigation-list__item">
					<a class="navigation-list__link" href="#">Цвета</a>
				</li>
				<li class="navigation-list__item">
					<a class="navigation-list__link" href="#">Вдохновение</a>
				</li>
				<li class="navigation-list__item">
					<a class="navigation-list__link" href="#">Советы</a>
				</li>
				<li class="navigation-list__item">
					<a class="navigation-list__link" href="#">Найти магазин</a>
				</li>
			</ul>
			<div class="order">
				<div class="order__phone">+7(495)221-77-69</div>
				<button class="order__btn-inline">Заказать звонок</button>
			</div>
			<div class="utils">
				<button class="utils__btn">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
						<title>search</title>
						<path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4"
							stroke-width="1.7455" stroke="#000"
							d="M14.667 25.333c5.891 0 10.667-4.776 10.667-10.667s-4.776-10.667-10.667-10.667c-5.891 0-10.667 4.776-10.667 10.667s4.776 10.667 10.667 10.667z">
						</path>
						<path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4"
							stroke-width="1.7455" stroke="#000" d="M28 28l-5.8-5.8"></path>
					</svg>
				</button>
				<button class="utils__btn">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
						<title>profile</title>
						<path fill="none" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4"
							stroke-width="1.7455" stroke="#000"
							d="M28.218 33.455c0 6.748-5.47 12.218-12.218 12.218s-12.218-5.47-12.218-12.218c0-6.748 5.47-12.218 12.218-12.218s12.218 5.47 12.218 12.218z">
						</path>
						<path fill="none" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4"
							stroke-width="1.7455" stroke="#000"
							d="M20.945 10.182c0 2.731-2.214 4.945-4.945 4.945s-4.945-2.214-4.945-4.945c0-2.731 2.214-4.945 4.945-4.945s4.945 2.214 4.945 4.945z">
						</path>
					</svg>
				</button>
				<button class="utils__btn">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
						<title>heart</title>
						<path fill="none" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4"
							stroke-width="1.7455" stroke="#000"
							d="M16.001 27.636c-0.372 0-0.732-0.135-1.012-0.38-1.055-0.923-2.078-1.792-2.978-2.558-2.329-1.855-4.505-3.895-6.505-6.1-1.613-1.738-2.536-4.003-2.596-6.373-0.036-2.056 0.706-4.050 2.076-5.585 0.665-0.724 1.475-1.301 2.377-1.693s1.876-0.591 2.86-0.584c1.493-0.007 2.944 0.493 4.115 1.418 0.634 0.496 1.194 1.081 1.662 1.736 0.469-0.655 1.029-1.239 1.664-1.735 1.17-0.925 2.619-1.425 4.111-1.42 0.984-0.007 1.958 0.192 2.86 0.584s1.712 0.969 2.377 1.693c1.371 1.534 2.112 3.528 2.076 5.585-0.059 2.369-0.981 4.634-2.592 6.373-1.999 2.203-4.173 4.242-6.5 6.096-0.901 0.767-1.922 1.637-2.983 2.564-0.281 0.245-0.641 0.379-1.013 0.378v0z">
						</path>
					</svg>
				</button>
				<button class="utils__btn-cart">4</button>
			</div>
		</header>
	</div>
</template>

<style scoped lang="scss">
.header {
	height: 10.4rem;
	display: flex;
	align-items: center;

	@media (max-width: 37.5em) {
		justify-content: space-between;
	}
}

.logo {
	position: relative;
	margin-right: calc(182 / 1790 * 100%);

	&__title {
		color: var(--color-primary);
		font-size: 3rem;
		line-height: 1;
		text-transform: uppercase;
	}

	&__dot {
		position: absolute;
		top: 2px;
		right: -1rem;
		width: .8rem;
		height: .8rem;
		background-color: var(--color-primary);
		border-radius: 50%;
	}

	@media (max-width: 75em) {
		margin-right: calc(91 / 1790 * 100%);
	}

	@media (max-width: 56.25em) {
		margin-right: auto;
	}

	@media (max-width: 37.5em) {
		margin: 0;
	}
}

.btn-hamburger {
	position: relative;
	width: 24px;
	height: 14px;
	cursor: pointer;
	display: none;
	z-index: 101;

	&__bar {
		position: absolute;
		width: 24px;
		height: 2px;
		background: var(--color-primary);
		transform-origin: center;
		transition: all 0.3s;
	}

	&__bar:nth-child(2) {
		top: 50%;
		transform: translateY(-50%);
	}

	&__bar:last-child {
		bottom: 0;
	}

	.close &__bar:first-child {
		transform: translateY(6px) rotate(-45deg);
	}

	.close &__bar:last-child {
		transform: translateY(-6px) rotate(45deg);
	}

	.close &__bar:nth-child(2) {
		transform: scale(0);
	}

	@media (max-width: 56.25em) {
		display: block;
		order: -1;
		margin-right: calc(182 / 1790 * 100%);
	}

	@media (max-width: 37.5em) {
		margin: 0;
	}
}

.navigation-list {
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2.4rem;
	margin-right: auto;
	transition: .3s ease;

	&__link {
		font-size: 1.4rem;
		text-decoration: none;
		color: var(--color-primary);
		letter-spacing: 0.06em;
		transition: .25s ease;

		@media (max-width: 56.25em) {
			font-size: 2.5rem;
			font-weight: 500;
		}
	}

	&__link:hover {
		color: var(--color-green);
	}

	@media (max-width: 56.25em) {
		flex-direction: column;
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		width: 100%;
		height: 75vh;
		background-color: #fff;
		padding: 3rem;
		transform: translateY(-100%);
	}
}

.navigation-list.show {
	transform: translateY(0);
}

.order {

	&__phone {
		font-size: 1.6rem;
		font-weight: 500;
		letter-spacing: -0.02em;
		line-height: 1;
	}

	&__btn-inline {
		display: inline-block;
		background-color: transparent;
		border: none;
		font-size: 1.4rem;
		color: var(--color-primary-light);
		cursor: pointer;
	}

	&__btn-inline:focus {
		outline: none;
	}

	@media (max-width: 37.5em) {
		display: none;
	}
}

.utils {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 3.4rem;
	margin-left: calc(118.5 / 1790 * 100%);

	&__btn-cart {
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 500;
		font-size: 1.2rem;
		width: 2.4rem;
		height: 2.4rem;
		background-color: var(--color-green);
		border: none;
		border-radius: 50%;
		letter-spacing: 0.06em;
		transition: .3s ease;
		cursor: pointer;
	}

	&__btn {
		display: flex;
		align-items: center;
		background-color: transparent;
		border: none;
		cursor: pointer;

		@media (max-width: 37.5em) {
			display: none;
		}
	}

	&__btn svg {
		width: 2.2rem;
		height: 2.2rem;
		transition: .3s ease;
	}

	&__btn-cart:hover,
	&__btn:hover svg {
		transform: scale(1.2);
	}

	@media (max-width: 75em) {
		gap: 2rem;
		margin-left: calc(90 / 1790 * 100%);
	}

	@media (max-width: 56.25em) {
		margin-left: calc(118.5 / 1790 * 100%);
	}

	@media (max-width: 37.5em) {
		margin: 0;
		padding-left: 5px;
	}
}
</style>