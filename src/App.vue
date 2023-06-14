<script setup>
import { useUserStore } from "./stores/user";

const userStore = useUserStore();
</script>

<template>
  <nav v-if="!userStore.loadingSession">
    <RouterLink to="/" v-if="userStore.userData">Home</RouterLink> |
    <RouterLink to="/login" v-if="!userStore.userData">Login</RouterLink> |
    <RouterLink to="/register" v-if="!userStore.userData">Register</RouterLink>
    <button @click="userStore.logoutUser" v-if="userStore.userData">
      Cerrar sesión
    </button>
  </nav>
  <div v-else>Loading user...</div>
  <h1>App base</h1>
  <RouterView />
</template>
