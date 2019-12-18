<template lang="pug">
    .home#home         
        the-home-advantages
        the-home-tarif
        the-home-galery
        the-home-testimonals
        the-home-map        
        //- Modal
        the-home-modal

</template>

<script>
import TheHomeAdvantages from "@/components/TheHomeAdvantages";
import TheHomeTarif from "@/components/TheHomeTarif";
import TheHomeGalery from "@/components/TheHomeGalery";
import TheHomeTestimonals from "@/components/TheHomeTestimonals";
import TheHomeModal from "@/components/TheHomeModal";
import TheHomeMap from "@/components/TheHomeMap";

export default {
    components: {
        TheHomeAdvantages,
        TheHomeTarif,
        TheHomeGalery,
        TheHomeTestimonals,
        TheHomeModal,
        TheHomeMap
    }
};
</script>

<style lang="scss">
.home {
    position: relative;
}

@media #{$mobile} {
}
</style>
