<template lang="pug">
    
-
    var info = {
        title1: "«Стандарт»",
        title2: "«Комфорт»"
    }
    

mixin slider-item(indexFor, indexImg, indexGal, name )
    .home-galery__slider-item        
        -   for(let i = 0; i< indexFor; i++)
                a.home-galery__slider-link(          
                    href=`${name}/img-${i + indexImg}.jpg`          
                    data-fancybox=`gallery-${indexGal}`                    
                )
                    img.home-galery__image(                                
                        src=`@/assets/images/desktop/${name}/img-${i + indexImg}.jpg`
                    )    
        -

section.home-galery#home-galery.bebas-700         
    .home-galery__standard        
        h2= info.title1
        .home-galery__slider.desk
            +slider-item(8, 1, 1, 'galery-standard')             
            +slider-item(8, 9, 1, 'galery-standard')
            +slider-item(8, 17, 1, 'galery-standard')        
    
        .home-galery__slider.mob
            +slider-item(6, 1, 1, 'galery-standard')             
            +slider-item(6, 7, 1, 'galery-standard')
            +slider-item(6, 13, 1, 'galery-standard')        
            +slider-item(2, 19, 1, 'galery-standard')        
            
    .home-galery__comfort
        h2= info.title2
        .home-galery__slider.desk
            +slider-item(8, 1,2,'galery-comfort')             
            +slider-item(8, 9,2,'galery-comfort')
            +slider-item(8, 17,2,'galery-comfort')
            +slider-item(8, 25,2,'galery-comfort')
            +slider-item(6, 33,2,'galery-comfort')

        .home-galery__slider.mob
            +slider-item(6, 1,2,'galery-comfort')             
            +slider-item(6, 7,2,'galery-comfort')
            +slider-item(6, 13,2,'galery-comfort')
            +slider-item(6, 19,2,'galery-comfort')
            +slider-item(6, 25,2,'galery-comfort')
            +slider-item(6, 31,2,'galery-comfort')
            +slider-item(2, 37,2,'galery-comfort')

</template>

<script>
var $ = require("jquery");
window.jQuery = $;
var slick = require("slick-carousel");
// eslint-disable-next-line
var fancybox = require("@fancyapps/fancybox");
import "@fancyapps/fancybox/dist/jquery.fancybox.min.css";

export default {
    mounted() {
        const createSlick = (classVar, speed) => {
            $(`${classVar} > .home-galery__slider`).slick({
                vertical: true,
                arrows: false,
                slidesToShow: 1,
                infinite: false,
                cssEase: "linear",
                autoplay: true,
                autoplaySpeed: 0,
                speed: speed,
                pauseOnFocus: false,
                pauseOnHover: false,
                dots: false,
                pauseOnDotsHover: false
            });
        };
        const createFancy = index => {
            $(`[data-fancybox="gallery-${index}"]`).fancybox({
                hash: false,
                loop: true,
                thumbs: {
                    autoStart: true // Display thumbnails on opening
                }
            });
        };
        createSlick(".home-galery__standard", 24000);
        createSlick(".home-galery__comfort", 19000);

        createFancy(1);
        createFancy(2);
    }
};
</script>

<style lang="scss">
.home-galery {
    display: flex;
    &__standard,
    &__comfort {
        flex: 1;
    }
    &__standard h2 {
        position: relative;
        &::after {
            @include pseudo;
            right: -1px;
            top: 0;
            @include sized(100%, 2px);
            background: #fff;
        }
    }
    h2 {
        font-size: rem(40);
        padding: rem(18) 0;
        background: $yellow;
    }

    &__image {
        @include sized(100%, 100%);
        display: inline-block !important;
        vertical-align: middle;
        object-fit: cover;
        object-position: center center;
    }
}

@media #{$desktop} {
    .home-galery {
        &__standard {
            h2 {
                text-align: right;
                padding-right: rem(251);
            }
        }
        &__comfort {
            h2 {
                text-align: left;
                padding-left: rem(251);
            }
        }
        &__slider-link {
            @include sized(rem(323), 50%);
            display: inline-block;
            position: relative;
            @include overlay(rgba(0, 0, 0, 0.7));
            &::before {
                @include pseudo;
                z-index: 2;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                @include sized(rem(39.62), rem(39.62));
                background: url("~@/assets/images/desktop/loupe.svg");
            }
            &::after,
            &::before {
                transition: 0.2s;
                opacity: 0;
                visibility: hidden;
            }
            &:hover {
                &::after,
                &::before {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
    }
}

@media #{$mobile} {
    .home-galery {
        h2 {
            text-align: center;
        }
        &__image {
            height: rem(150);
        }
    }
}
</style>
