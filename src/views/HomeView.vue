<template>
    <div class="home">
        <HeaderGramatnika />
        <HeroGramatnika />
        <WomenGramatnika />
        <InstaGramatnika />
        <PartnerGramatnika />
        <FooterGramatnika />

    </div>
</template>

<script>
// @ is an alias to /src
import HeaderGramatnika from '@/components/HeaderGramatnika.vue';
import HeroGramatnika from '@/components/HeroGramatnika.vue';
import WomenGramatnika from '@/components/WomenGramatnika.vue';
import InstaGramatnika from '@/components/InstaGramatnika.vue';
import PartnerGramatnika from '@/components/PartnerGramatnika.vue';
import FooterGramatnika from '@/components/FooterGramatnika.vue';

import { defineComponent } from 'vue';
export default defineComponent({
    name: 'HomeView',
    components: {
        HeaderGramatnika,
        HeroGramatnika,
        WomenGramatnika,
        InstaGramatnika,
        PartnerGramatnika,
        FooterGramatnika,
    },
});

</script>
