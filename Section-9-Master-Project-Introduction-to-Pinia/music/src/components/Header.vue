<template>
    <!-- Header -->
    <header id="header" class="bg-gray-700">
        <nav class="container mx-auto flex justify-start items-center py-5 px-4">
            <!-- App Name -->
            <router-link class="text-white font-bold uppercase text-2xl mr-4" :to="{name: 'home'}" exact-active-class="no-active"
            >Music</router-link
            >

            <div class="flex flex-grow items-center">
                <!-- Primary Navigation -->
                <ul class="flex flex-row mt-1">
                    <!-- Navigation Links -->
                  <li>
                    <router-link class="px-2 text-white" href="#" :to="{name: 'about' }">About</router-link>
                  </li>
                    <li v-if="!userStore.userLoggedIn">
                        <a @click.prevent="toggleAuthModal" class="px-2 text-white" href="#">Login / Register</a>
                    </li>
                    <template v-else>
                        <li>
                            <router-link class="px-2 text-white" href="#" :to="{name: 'manage' }">Manage</router-link>
                        </li>
                        <li>
                            <a class="px-2 text-white"
                               href="#"
                               @click.prevent="signOut()"
                            >LogOut</a>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import {mapStores} from "pinia"
import useModalStore from "@/stores/modal"
import useUserStore from "@/stores/user";

export default {
    name: "Header",
    computed: {
        ...mapStores(useModalStore, useUserStore)
    },
    methods:{
        toggleAuthModal(){
            this.modalStore.isOpen  = !this.modalStore.isOpen;
            console.log(this.modalStore.isOpen);
        },
      signOut() {
        // access the modal store signout
        this.userStore.signOut();
        console.log("Checking Current Route", this.$route)
        // we redirect the user by using 👇
        if (this.$route.meta.requiresAuth){
          this.$router.push({name: 'home'})
        }
      }
    }
}
</script>

<style scoped>

</style>