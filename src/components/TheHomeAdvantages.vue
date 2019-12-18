<template lang="pug">

-
    var info = {
        title: 'Наши <span>преимущества</span>',
        list: [
            {
                text: 'Собственная проектная группа'
            },
            {
                text: 'Гарантия своевременного окончания ремонтных работ'
            },
            {
                text: 'Собственные ремонтные бригады'
            },
            {
                text: 'Отличный сервис и индивидуальный подход'
            },
            {
                text: 'В стоимость пакетов услуг «Стандарт» и «Комфорт» входит разработанный дизайн-проект квартиры!'
            },
            {
                text: 'Приемлемые цены'
            }
        ]
    }

section.home-advantages#home-advantages
    .home-fixed-top.desk(
        :class="{ 'home-fixed-active': fixed }"
        v-scroll-to="'#header'"
    )    
        img(src="@/assets/images/desktop/fixed-top.svg")
    .home-advantages__wrap.main-container.mx-auto
        h2.bebas-700 !{info.title}        
        each item, index in info.list
            article.opsans-400
                .home-advantages__circle
                    img(src=`~@/assets/images/desktop/advantages-${index + 1}.png`)
                h3= item.text    
    #scroll_trigger
        
</template>

<script>
export default {
    data() {
        return {
            fixed: false
        };
    },
    mounted() {
        this.$nextTick(this.sticky);
    },
    destroyed() {
        this.$ksvuescr.$emit("destroy");
    },
    methods: {
        sticky() {
            let vm = this;

            const scene = new this.$scrollmagic.Scene({
                triggerElement: "#scroll_trigger"
            }).on("progress", () => {
                this.fixed = !this.fixed;
            });

            this.$ksvuescr.$emit("addScene", "stickedNav", scene);
        }
    }
};
</script>

<style lang="scss">
.home-advantages {
    position: relative;
    padding: rem(70) 0;
    &__wrap {
        text-align: center;
        h2 {
            font-size: rem(48);
            span {
                color: #ffdc0a;
            }
        }
        h3 {
            @include fonted(rem(22), rem(30));
            margin-top: rem(40);
        }
    }
    &__circle {
        @include sized(rem(104), rem(104));
        margin: auto;
        @include flex(center, center);
        background: #ffdc0a;
        border-radius: 100%;
    }
}

@media #{$desktop} {
    .home-advantages {
        &__wrap {
            @include flex(space-between, flex-start);
            flex-wrap: wrap;
            h2 {
                width: 100%;
            }
            article {
                margin-top: rem(70);
                width: 32%;
            }
        }
    }
    .home-fixed-top {
        position: absolute;
        top: 0;
        right: 10%;
        z-index: 3;
        cursor: pointer;
        img {
            position: relative;
            top: rem(-5);
        }
    }
    .home-fixed-active {
        position: fixed !important;
    }
    #scroll_trigger {
        position: absolute;
        top: 0;
        right: 0;
        top: rem(550);
    }
}

@media #{$mobile} {
    .home-advantages {
        &__wrap {
            article {
                margin: rem(70) auto 0;
                width: rem(300);
            }
        }
        &__circle {
            img {
                max-width: rem(60);
            }
        }
    }
}
</style>
