<template>
    <!-- Partner Logo Section Begin -->
    <div class="partner-logo">
        <div class="container">
            <carousel class="logo-carousel" :pauseAutoplayOnHover="true" :autoplay="3000" :wrap-around="true"
                :transition="1500" :items-to-show="5">
                <slide v-for="slide in slides" :key="slide.id">

                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img :src=slide.img alt="" />
                        </div>
                    </div>

                </slide>
                <template #addons>
                    <!-- <navigation /> -->
                    <pagination />
                </template>
            </carousel>
        </div>
    </div>
    <!-- Partner Logo Section End -->
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
    name: 'PartnerGramatnika',
    components: {
        Carousel,
        Slide,
        Pagination,
        // Navigation
    },
});
</script>

<style>
.carousel__pagination-button::after {
    display: none;
}

.logo-item {
    margin-right: 50px;
}
</style>