<template lang="pug">

.nav#nav
    menu-mobile.mob
    menu-desktop.desk
    menu-desktop.desk.menu-desktop__sticky(        
    )

</template>

<script>
import MenuMobile from "@/components/MenuMobile";
import MenuFixed from "@/components/MenuFixed";
import MenuDesktop from "@/components/MenuDesktop";

export default {
    components: {
        MenuMobile,
        MenuFixed,
        MenuDesktop
    }
};
</script>
