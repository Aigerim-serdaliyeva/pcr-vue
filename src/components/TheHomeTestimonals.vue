<template lang="pug">

-
    var info = {
        title: 'Отзывы',
        list: [
            {
                text: ' Хочу отметить индивидуальный подход, доброжелательный персонал и самое главное, качественный ремонт моей квартиры.',
                name: 'Юлия'                
            },
            {
                text: 'Очень довольна компетентным и профессиональным персоналом компании «Центр профессионального ремонта», а также качеством выполненных ремонтных работ. Желаю успешного развития и достижения новых вершин в бизнесе!',
                name: 'Гульмира'
            },
            {
                text: 'В моем доме бригадой Центра профессионального ремонта выполнена чистовая отделка. Все работы были произведены качественно и в срок, а специалисты проявили себя как профессионалы своего дела.',
                name: 'Арман'
            },
            {
                text: 'Благодарю коллектив ЦПР за ремонт нашей квартиры. Бригада выполнила свои обязанности на самом профессиональном уровне, в общении вежливы и корректны. Мы довольны качеством материалов и конечным результатом.',
                name: 'Кирилл и Татьяна'
            },
            {
                text: 'Очень рад, что компания не только делает ремонт, но и разработывает дизайн-проект. Сразу наглядно понятно, что я получу в итоге. Порадовали цены и качество ремонтных работ',
                name: 'Ержан'
            }
        ]
    }

.home-testimonals#home-testimonals
    .home-testimonals__wrap.main-container.mx-auto
        h2.bebas-700= info.title
        .home-testimonals__slider.opsans-400
            each item in info.list
                .home-testimonals__slider-item
                    p= item.text
                    .line
                    p= item.name


</template>

<script>
import $ from "jquery";

export default {
    mounted() {
        $(".home-testimonals__slider").slick({
            dots: true
        });
    }
};
</script>

<style lang="scss">
.home-testimonals {
    padding: rem(70) 0;
    position: relative;
    color: #fff;
    @include overlay(rgba(0, 0, 0, 0.86));
    &__wrap {
        position: relative;
        z-index: 2;
        text-align: center;
        h2 {
            font-size: rem(48);
            color: $yellow;
            padding-bottom: rem(40);
        }
        p {
            @include fonted(rem(17), rem(23));
        }
        .line {
            @include sized(1px, rem(78));
            margin: rem(15) auto;
            background: #6c6c6c;
        }
        button {
            color: #fff;
        }
    }
    &__slider {
        .slick-dots li button:before,
        .slick-dots li.slick-active button:before {
            opacity: 1 !important;
        }
        .slick-dots li.slick-active button:before {
            color: #fff;
        }
        .slick-prev:before,
        .slick-next:before {
            font-size: rem(40);
        }
        .slick-dots li button:before {
            color: #6f6f6f;
            font-size: rem(14);
        }
    }
}

@media #{$desktop} {
    .home-testimonals {
        background: url("~@/assets/images/desktop/home-testimonals-bg.png");
        &__wrap {
            p {
                width: rem(420);
                margin: auto;
            }
        }
        &__slider {
            width: rem(800);
            margin: auto;
        }
    }
}

@media #{$mobile} {
    .home-testimonals {
        background: url("~@/assets/images/mobile/home-testimonals-bg.png");
        &__slider {
            width: 85%;
            position: relative;
            margin: auto;
        }
        .slick-prev {
            left: -30px;
        }
        .slick-next {
            right: -20px;
        }
    }
}
</style>
