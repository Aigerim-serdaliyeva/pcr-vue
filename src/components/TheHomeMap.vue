<template lang="pug">

section.home-map#map-wrap
    iframe(src='https://yandex.ru/map-widget/v1/?um=constructor%3A81282d8df54573868d9013b790aa4152e8451f527d48ff035425b74ac0891913&source=constructor', width='100%', height='702', frameborder='0')


</template>

<script>
export default {
    mounted() {
        document.addEventListener("click", function(e) {
            var map = document.querySelector("#map-wrap iframe");
            if (e.target.id === "map-wrap") {
                map.style.pointerEvents = "all";
            } else {
                map.style.pointerEvents = "none";
            }
        });
    }
};
</script>

<style lang="scss">
.home-map {
    iframe {
        height: rem(800);
        pointer-events: none;
    }
}

@media #{$mobile} {
    .home-map {
        iframe {
            height: rem(400);
        }
    }
}
</style>
