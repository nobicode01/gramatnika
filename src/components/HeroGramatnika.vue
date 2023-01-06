<template>
    <!-- Hero Section Begin -->
    <section class="hero-section">
        <carousel :pauseAutoplayOnHover="true" :autoplay="3000" :wrap-around="true" :transition="1500"
            :items-to-show="1">
            <slide v-for="slide in slides" :key="slide.id">

                <div class="single-hero-items set-bg" :style="slide.img_url">
                    <div class="container">
                        <div class="row banner-info">
                            <div class="col-lg-5">
                                <span>Bag,kids</span>
                                <h1>Black friday</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore.</p>
                                <a href="#" class="primary-btn">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>

            </slide>
            <template #addons>
                <!-- <navigation /> -->
                <pagination />
            </template>
        </carousel>
    </section>
    <!-- Hero Section End -->
</template>

<script>
// @ is an alias to /src
import 'vue3-carousel/dist/carousel.css'
import {
    Carousel,
    Slide,
    Pagination,
    // Navigation
} from 'vue3-carousel';

import { defineComponent } from 'vue'
export default defineComponent({
    name: 'HeroGramatnika',
    components: {
        Carousel,
        Slide,
        Pagination,
        // Navigation
    },
    data: function () {
        return {
            slides: [
                {
                    id: 1,
                    img_url: { backgroundImage: "url('/img/hero-1.jpg')" }
                },
                {
                    id: 2,
                    img_url: { backgroundImage: "url('/img/hero-2.jpg')" }
                },
                {
                    id: 3,
                    img_url: { backgroundImage: "url('/img/hero-3.jpg')" }
                },
            ]
        };
    }
});

</script>

<style>
.set-bg {
    width: 100%;
    height: 500px;
}

.banner-info {
    margin-top: 139px;
}
</style>