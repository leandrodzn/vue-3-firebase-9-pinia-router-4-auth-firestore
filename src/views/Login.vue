<script setup>
import { useUserStore } from "../stores/user";
import { ref } from "vue";
import { useRouter } from "vue-router";

const userStore = useUserStore();

const router = useRouter();

const email = ref("");
const password = ref("");

const handlerSubmit = async () => {
  if (!email.value || password.value.length < 6) {
    return alert("Llena los campos");
  }

  console.log("procesando");
  await userStore.loginUser(email.value, password.value);
  router.push("/");
};
</script>
<template>
  <h1>Login</h1>
  <form @submit.prevent="handlerSubmit">
    <input type="email" placeholder="Ingrese email" v-model.trim="email" />
    <input
      type="password"
      placeholder="Ingrese contraseña"
      v-model.trim="password"
    />
    <!-- disabled para que no se presione muchas veces el botón -->
    <button type="submit" :disabled="userStore.loadingUser">Acceder</button>
  </form>
</template>
