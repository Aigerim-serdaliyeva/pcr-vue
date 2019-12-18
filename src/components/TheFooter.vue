<template lang="pug">

-
    var info = {
        title: 'Контакты',
        list: [
            {
                text: `
                    Моб.: <a href="+77010316713">+7(701) 031-67-13</a>
                `
            },
            {   
                text: `
                    Instagram: <a>profrem_kz</a>
                `   
            },
            {
                text: `
                    e-mail: <a>info@profrem.kz</a>
                `
            },
            {
                text: `
                    Мы находимся по адресу: <br>
                    <a>г. Алматы, ул. Тлендиева, 223, ЖК «Жағалау», офис 148</a>
                `
            }
        ]
    }

footer.footer#footer
    .footer__wrap.main-container.mx-auto            
        img(src="@/assets/images/desktop/home-header-svg.svg")
        article
            h2.bebas-700= info.title
            each item,index in info.list                
                .footer__link.rob-400 !{item.text}                    

</template>

<style lang="scss">
.footer {
    padding: rem(80) 0;
    position: relative;
    @include overlay(rgba(0, 0, 0, 0.7));
    &__wrap {
        position: relative;
        z-index: 2;
        color: #fff;
        h2 {
            font-size: rem(36);
            margin-bottom: rem(26);
        }
        article {
            width: rem(253);
        }
    }
    &__link {
        @include fonted(rem(17), rem(20));
        &:nth-child(4) {
            margin-bottom: rem(26);
        }
        a {
            color: $yellow;
        }
    }
}

@media #{$desktop} {
    .footer {
        background: url("~@/assets/images/desktop/home-footer-bg.png");
        &__wrap {
            @include flex(flex-start, center);
            svg {
                margin-right: rem(50.5);
                @include sized(rem(396), rem(551.84));
            }
        }
    }
}

@media #{$mobile} {
    .footer {
        background: url("~@/assets/images/mobile/home-footer-bg.png");
        &__wrap {
            img {
                max-width: 80%;
            }
            h2 {
                margin-top: rem(26);
            }
            article {
                margin: auto;
            }
        }
    }
}
</style>
