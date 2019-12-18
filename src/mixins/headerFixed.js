import { mapMutations } from "vuex";

const headerFixed = {
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
                triggerElement: "#header__trigger"
            }).on("progress", () => {
                vm.MENU_TOGGLE();
            });

            this.$ksvuescr.$emit("addScene", "stickedNav", scene);
        },
        ...mapMutations("menuDesktop", [
            "MENU_VISIBLE",
            "MENU_HIDDEN",
            "MENU_TOGGLE"
        ])
    }
};

export default headerFixed;

// Вариант с использованием intersection observer

// import { mapMutations } from "vuex";

// const headerFixed = {
//     mounted() {
//         let vm = this;
//         const target = document.querySelector("#header__trigger");

//         const thresholdArray = steps =>
//             Array(steps + 1)
//                 .fill(0)
//                 .map((_, index) => index / steps || 0);

//         let previousY = 0;
//         // eslint-disable-next-line
//         let previousRatio = 0;

//         const handleIntersect = entries => {
//             entries.forEach(entry => {
//                 const currentY = entry.boundingClientRect.y;
//                 const currentRatio = entry.intersectionRatio;
//                 const isIntersecting = entry.isIntersecting;

//                 // Scrolling down/up
//                 if (currentY < previousY) {
//                     vm.MENU_VISIBLE();
//                 } else if (currentY > previousY && isIntersecting) {
//                     vm.MENU_HIDDEN();
//                 }

//                 previousY = currentY;
//                 previousRatio = currentRatio;
//             });
//         };

//         const observer = new IntersectionObserver(handleIntersect, {
//             threshold: thresholdArray(20)
//         });

//         observer.observe(target);
//     },
//     methods: {
//         ...mapMutations("menuDesktop", ["MENU_VISIBLE", "MENU_HIDDEN"])
//     }
// };

// export default headerFixed;
