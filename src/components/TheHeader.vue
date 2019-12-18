<template lang="pug">
    
-
    var info = {
        text: 'Надежность <br> Качество <br> Результат'
    }

mixin arrow
    <svg viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.763 10.453a1.044 1.044 0 0 1 1.525 0L24 33.196l21.712-22.743a1.044 1.044 0 0 1 1.525 0 1.168 1.168 0 0 1 0 1.598L24.96 35.388a1.12 1.12 0 0 1-.17.232 1.05 1.05 0 0 1-.789.33 1.05 1.05 0 0 1-.788-.33 1.127 1.127 0 0 1-.17-.232L.761 12.051a1.168 1.168 0 0 1 0-1.598z" fill="#FFDC0A"/><path d="M6.572.6a.783.783 0 0 1 1.144 0L24 17.656 40.284.599a.783.783 0 0 1 1.144 0 .876.876 0 0 1 0 1.199L24.718 19.3a.844.844 0 0 1-.127.174.787.787 0 0 1-.591.248.787.787 0 0 1-.591-.248.844.844 0 0 1-.128-.174L6.571 1.799a.876.876 0 0 1 0-1.199z" fill="#FFDC0A"/></svg>

header.header#header 
    the-nav
    .header__content
        .header__content-wrap.main-container.mx-auto
            img(src="~@/assets/images/desktop/home-header-svg.svg")
            h2.bebas-400 !{info.text}
    .header__arrow(v-scroll-to="'#home-advantages'")
        .header__arrow-wrap.main-container.mx-auto
            +arrow    

</template>

<script>
import TheNav from "@/components/TheNav";

export default {
    components: {
        TheNav
    }
};
</script>

<style lang="scss">
.header {
    color: #fff;
    position: relative;
    @include overlay(rgba(0, 0, 0, 0.86));
    &__content-wrap,
    &__arrow-wrap {
        position: relative;
        z-index: 2;
    }
    &__content-wrap {
        h2 {
            @include fonted(rem(75.22), rem(75));
        }
    }
    &__arrow {
        text-align: center;
        position: relative;
        z-index: 2;
        cursor: pointer;
        -webkit-animation: ghost 2.5s ease-in-out infinite both;
        animation: ghost 2.5s ease-in-out infinite both;
        @-webkit-keyframes ghost {
            0% {
                -webkit-transform: translateY(20px);
                transform: translateY(20px);
            }
            50% {
                -webkit-transform: translateY(0);
                transform: translateY(0);
            }
            to {
                -webkit-transform: translateY(20px);
                transform: translateY(20px);
            }
        }
        svg {
            @include sized(rem(36), rem(48));
        }
    }
}

@media #{$desktop} {
    .header {
        padding: rem(30) 0 rem(292);
        background: url("~@/assets/images/desktop/home-header-bg.png");
        &__content {
            margin: rem(184) 0;
        }
        &__content-wrap {
            @include flex(center, center);
            img {
                margin-right: rem(50.5);
                @include sized(rem(396), rem(551.84));
            }
        }
    }
}

@media #{$mobile} {
    .header {
        padding-bottom: rem(52.4);
        background: url("~@/assets/images/mobile/home-header-bg.png");
        &__content {
            padding-top: rem(114);
            h2 {
                @include flex(center, center);
                padding: rem(50) 0 rem(98);
                text-align: left;
            }
        }
    }
}
</style>
