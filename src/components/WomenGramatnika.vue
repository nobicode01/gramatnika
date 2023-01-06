<template>
    <!-- Women Banner Section Begin -->
    <section class="women-banner spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mt-5">
                    <carousel class="product-slider" :pauseAutoplayOnHover="true" :autoplay="3000" :wrap-around="true"
                        :transition="1500" :items-to-show="3">
                        <slide v-for="slide in slides" :key="slide.id">

                            <div class="product-item">
                                <div class="pi-pic">
                                    <img :src=slide.img alt="" />
                                    <ul>
                                        <li class="w-icon active">
                                            <a href="#"><i class="icon_bag_alt"></i></a>
                                        </li>
                                        <li class="quick-view">
                                            <router-link to="/product">
                                                + Quick View
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="pi-text">
                                    <div class="catagory-name">Coat</div>
                                    <router-link to="/product">
                                        <h5>Mickey Baggy</h5>
                                    </router-link>
                                    <div class="product-price">
                                        $14.00
                                        <span>$35.00</span>
                                    </div>
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
        </div>
    </section>
    <!-- Women Banner Section End -->
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
    name: 'WomenGramatnika',
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
                    img: "img/mickey1.jpg"
                },
                {
                    id: 2,
                    img: "img/products/women-2.jpg"
                },
                {
                    id: 3,
                    img: "img/products/women-3.jpg"
                },
                {
                    id: 4,
                    img: "img/products/women-4.jpg"
                },
            ]
        };
    }
});

</script>

<style>
.product-item {
    width: 100%;
    height: 500px;
    margin-right: 25px;
}
</style>