<template lang="pug">

-
    var info = {    
        title1: "<span>Пакет ремонтных работ </span> <span>«Стандарт»</span>",
        title2: "<span>Пакет ремонтных работ </span> <span>«Комфорт»</span>",
        descr: 'В стоимость пакета входит:',
        list: [
            {
                text:'• разработанный дизайн-проект'                                                                
            },
            {
                text: '• строительные материалы'
            },
            {
                text: '• ремонтные работы'
            },
            {
                text: '• консультирование и сопровождение клиента в течение ремонтных работ'
            },
        ],
        button: 'Подробнее',
        subtitle: "<span class='col-yel'>*</span>Пакеты услуг «<span class='col-yel'>Стандарт</span>» и «<span class='col-yel'>Комфорт</span>   » различаются строительным материалом и сложностью ремонтных работ."
    }

mixin tarif(title, descr, list)
    .home-tarif__item
        h2.bebas-400 !{title}
        .home-tarif__item-left
            .line
            p.opsans-400= descr
            article.opsans-400
                each item in list
                    p= item.text
        button.opsans-400(@click="TOGGLE_MODAL")= info.button 

section.home-tarif#home-tarif
    .home-tarif__wrap.main-container.mx-auto
        +tarif(info.title1, info.descr, info.list)
        +tarif(info.title2, info.descr, info.list)
        h3.w-100.tac.opsans-400 !{info.subtitle}         

</template>

<script>
import { mapMutations } from "vuex";

export default {
    methods: {
        ...mapMutations("modal", ["TOGGLE_MODAL"])
    }
};
</script>

<style lang="scss">
.home-tarif {
    color: #fff;
    padding: rem(70) 0;
    position: relative;
    @include overlay(rgba(0, 0, 0, 0.86));
    &__wrap {
        position: relative;
        z-index: 2;
        h2 {
            font-size: rem(40);
        }
        p {
            @include fonted(rem(18), rem(25));
        }
        article {
            margin-top: rem(30);
        }
        button {
            color: #fff;
            border: 2px solid #fff;
            border-radius: 46px;
            padding: rem(18) rem(78);
            font-size: rem(18);
        }
        h3 {
            @include fonted(rem(17), rem(23));
        }
    }
    .line {
        margin: rem(33) 0;
        background: $yellow;
    }
}

@media #{$desktop} {
    .home-tarif {
        background: url("~@/assets/images/desktop/home-tarif-bg.png");
        &__wrap {
            @include flex(space-between, flex-start);
            flex-wrap: wrap;
        }
        .line {
            @include sized(5px, rem(325));
        }
        &__item {
            width: 42%;
        }
        &__item-left {
            margin-left: rem(30);
        }
        button {
            margin: rem(42) 0 rem(60) rem(112);
        }
    }
}

@media #{$mobile} {
    .home-tarif {
        background: url("~@/assets/images/mobile/home-tarif-bg.png");
        &__wrap {
            h2 span {
                display: block;
            }
        }
        .line {
            @include sized(1px, 100%);
        }
        p {
            text-align: left;
        }
        button {
            margin: rem(30) auto rem(70);
        }
        h3 {
            text-align: center;
        }
    }
}
</style>
