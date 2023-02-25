<template>
    <!-- Women Banner Section Begin -->
    <section class="women-banner spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mt-5" v-if="slides.length > 0">
                    <carousel class="product-slider" :pauseAutoplayOnHover="true" :autoplay="3000" :wrap-around="true"
                        :transition="1500" :items-to-show="1">
                        <slide v-for="slide in slides" :key="slide.id">

                            <div class="product-item" v-for="itemProduct in slides" v-bind:key="itemProduct.id">
                                <div class="pi-pic">
                                    <img v-bind:src="itemProduct.galleries[0].photo" alt="" />
                                    <ul>
                                        <li class="w-icon active">
                                            <a href="#"><i class="icon_bag_alt"></i></a>
                                        </li>
                                        <li class="quick-view">
                                            <router-link v-bind:to="'/product/'+itemProduct.id">
                                                + Quick View
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="pi-text">
                                    <div class="catagory-name">{{itemProduct.type}}</div>
                                    <router-link to="/product">
                                        <h5>{{itemProduct.name}}</h5>
                                    </router-link>
                                    <div class="product-price">
                                        {{itemProduct.price}}
                                        <span>Rp.400000</span>
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

                <div class="col-lg-12" v-else>
                    <p>
                        Produk terbaru belum tersedia untuk saat ini.
                    </p>
                </div>

            </div>
        </div>
    </section>
    <!-- Women Banner Section End -->
</template>

<script>
// @ is an alias to /src
import 'vue3-carousel/dist/carousel.css'
import axios from 'axios';

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
            slides: []
        };
    },
    mounted(){
        axios
        .get("http://127.0.0.1:8000/api/products")
        .then(res => (this.slides = res.data.data.data))
        .catch(err => console.log(err));
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