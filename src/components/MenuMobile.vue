<template lang="pug">

mixin hamburger(type)
    if type == 'default'
        <svg width="53" height="69" viewBox="0 0 53 69" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 39.8l6.625-11.475 1.093-1.894V0h37.564v26.431l1.093 1.894L53 39.8l-6.625 11.475-6.625 11.474h-26.5L6.625 51.275 0 39.8z" fill="#1F1D1A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 45.908l6.625-11.475 2.374-3.892 35.074.007 2.302 3.885L53 45.908l-6.625 11.474-6.625 11.475h-26.5L6.625 57.383 0 45.907z" fill="#FFDC0A"/><path stroke="#fff" stroke-width="3" stroke-linecap="round" d="M14.5 40.5h24M14.5 47.5h24M14.5 54.5h24"/></svg>
    else
        <svg width="68" height="53" viewBox="0 0 68 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.8 53l-11.475-6.626-1.894-1.093H0V7.718h25.431l1.894-1.093L38.8 0l11.475 6.625 11.474 6.624v26.5l-11.474 6.625L38.8 53z" fill="#1F1D1A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M44.908 53l-11.475-6.626L29.54 44l.008-35.074 3.884-2.301L44.908 0l11.475 6.625 11.474 6.624v26.5l-11.474 6.625L44.908 53z" fill="#FFDC0A"/><path d="M53.5 38.5L39.912 27.254a1 1 0 0 1-.015-1.527L53.5 14M53.5 38.5v-24" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>

mixin mobileMenuContentWrap
    .mobile-menu__content-wrap(@touchmove="prevent($event)")
        .mobile-menu__content-toggle(@click="menuToggle")
            +hamburger('open')
        .mobile-menu__content-main
            .mobile-menu__content-logo
                img(src="@/assets/images/desktop/home-header-svg.svg")
            nav.rob-400                
                a(
                    v-for="(item, index) in menu"                    
                    :key="item.id"
                    v-scroll-to="item.href"
                    @click="menuToggle"
                    :class="{ 'mobile-menu__content-clicked': menu_clicked === index }"
                ) {{item.text}}
           

.mobile-menu
    .mobile-menu__wrap
        .mobile-menu__toggle(@click="menuToggle") 
            +hamburger('default')            
    .mobile-menu__content(
        :class="{ 'mobile-menu__hidden': !menu_state }"        
    )
        +mobileMenuContentWrap
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            menu_state: false,
            menu_clicked: null,
            menu: require("@/assets/json/menu.json")
        };
    },
    watch: {
        menu_state(isOpen) {
            isOpen
                ? document.body.classList.add("stop-scrolling")
                : document.body.classList.remove("stop-scrolling");
        }
    },

    methods: {
        menuToggle() {
            this.menu_state = !this.menu_state;
        },
        prevent(e) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
};
</script>

<style lang="scss">
.mobile-menu {
    width: 100%;
    position: relative;
    z-index: 10;
    &__wrap {
        padding: rem(10) 0;
        position: absolute;
        top: 0;
        left: 0;
        @include flex(space-between, center);
    }
    &__toggle {
        svg {
            margin-left: rem(15);
        }
    }
    &__content {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        transform: translateY(0);
        transition: 0.3s ease-in-out;
        @include sized(100vh, 100%);
        background: url("~@/assets/images/mobile/home-menu-content.png");
        @include overlay(rgba(0, 0, 0, 0.7));
    }
    &__content-wrap {
        position: relative;
        z-index: 2;
    }
    &__content-toggle {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        svg {
            margin-top: rem(29);
        }
    }
    &__content-main {
        text-align: center;
        padding: rem(56) 0 rem(45);
        color: $maincol;
        nav {
            padding: rem(50) 0;
            a {
                color: #fff;
                display: block;
                @include fonted(rem(25), rem(32));
                padding: rem(15) 0;
            }
        }
    }
    &__content-logo {
        img {
            max-width: 70%;
        }
    }
    &__content-clicked {
        background: linear-gradient(
            90deg,
            #ffffff 0%,
            #ffffff 49.69%,
            #ffffff 99.48%
        );
        box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.14);
        color: #7e251e !important;
    }
    &__content-icons {
        @include flex(center, center);
        a {
            font-size: rem(36);
            & + a {
                margin-left: rem(33);
            }
        }
    }
    &__hidden {
        visibility: hidden;
        transform: translateX(-100%);
    }
}

@media #{$mobile} {
    .menu-sticky {
        .mobile-menu {
            &__wrap {
                padding: rem(5) rem(10);
                position: relative;
            }
            &__toggle {
                svg {
                    rect {
                        fill: #fff !important;
                    }
                }
            }
        }
    }
}
</style>
