<template lang="pug">

-
    var info = {
        title: 'Получить консультацию',
        subtitle: 'Заполните поля для получения персональной консультации, наш оператор обязательно вам перезвонит.'
    }


.home-modal(v-if="modal_state" @touchmove="prevent($event)") 
    .home-modal__overlay(@click="TOGGLE_MODAL")
    .home-modal__wrap
        .home-modal__content
            .home-modal__close(@click="TOGGLE_MODAL")
                img(src="@/assets/images/desktop/modal-close.svg")
            h2.bebas-400= info.title
            p.opsans-400= info.subtitle
            transition(name="modal-success")
                .home-modal__success(v-if="success")
                    p Вы успешно отправили заявку                
            form.opsans-400(v-if="!success" @submit.prevent="submit")
                input(type="text" v-model="name" placeholder="Ваше имя" required)
                input(type="text" v-model="phone" v-mask="'8(###)###-##-##'" placeholder="Ваш телефон" required)
                .w-100
                    span.no-m.opsans-400(v-if="err") Номер не заполнен полностью
                button.opsans-400(type="submit") {{button}}

</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";
import { VueMaskDirective } from "v-mask";

export default {
    directives: {
        mask: VueMaskDirective
    },
    data() {
        return {
            name: "",
            phone: "",
            success: false,
            err: false,
            publicPath: process.env.BASE_URL,
            button: "Отправить"
        };
    },
    watch: {
        phone(val) {
            val.length === 15 ? (this.err = false) : (this.err = true);
        },
        modal_state(isOpen) {
            isOpen
                ? document.body.classList.add("stop-scrolling")
                : document.body.classList.remove("stop-scrolling");
        }
    },
    computed: {
        ...mapState("modal", ["modal_state"])
    },
    methods: {
        ...mapMutations("modal", ["TOGGLE_MODAL"]),
        submit() {
            const options = {
                method: "POST",
                data: {
                    name: this.name,
                    phone: this.phone
                },
                url: `${this.publicPath}mailer.php`
            };
            if (!this.err) {
                this.button = "Заявка отправляется...";
                axios(options)
                    .then(() => {
                        this.success = true;
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            }
        },
        prevent(e) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
};
</script>

<style lang="scss">
.home-modal {
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    @include sized(100vh, 100%);
    @include flex(center, center);
    z-index: 100;
    &__overlay {
        position: absolute;
        top: 0;
        left: 0;
        @include sized(100%, 100%);
        background: rgba(0, 0, 0, 0.7);
        z-index: 1;
    }
    &__wrap {
        position: relative;
        display: block;
        width: rem(860);
        max-width: 90%;
        padding: rem(60) 0;
        background: #ededed;
        box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.62);
        border-radius: 5px;
        z-index: 2;
        h2 {
            font-size: rem(40);
            margin-bottom: rem(50);
        }
        p {
            @include fonted(rem(17), rem(23));
            margin-bottom: rem(30);
        }
        form {
            @include flex(space-between, center);
            flex-wrap: wrap;
        }
        span {
            margin-top: rem(10);
            display: block;
            @include fonted(rem(18), rem(25));
            color: $danger;
        }
        input {
            width: 45%;
            font-size: rem(18);
            text-align: left;
            padding: rem(17) 0 rem(17) rem(20);
            background: #ffffff;
            border-radius: 11px;
            &::placeholder {
                font-size: rem(18);
            }
        }
        button {
            font-size: rem(18);
            box-shadow: 5px 13px 20px rgba(0, 0, 0, 0.25);
            border-radius: 11px;
            margin: rem(30) auto 0;
            background: $yellow;
            padding: rem(12) rem(70);
            &:active {
                box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
            }
        }
    }
    &__close {
        position: absolute;
        top: rem(10);
        right: rem(10);
        img {
            cursor: pointer;
            padding: rem(20);
            @include sized(rem(30), rem(30));
        }
    }
    &__content {
        width: 80%;
        margin: auto;
    }
    &__success {
        p {
            background: $success;
            box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.2);
            border-radius: 12px;
            text-align: center;
            color: #fff;
            margin: auto;
            padding: rem(14) 0;
            width: 80%;
        }
    }
}

@media #{$mobile} {
    .home-modal {
        &__wrap {
            input {
                width: 90%;
                text-align: center;
                margin: auto;
                & + input {
                    margin-top: rem(15);
                }
            }
        }
        &__close {
            img {
                padding: rem(5);
            }
        }
    }
}
</style>
