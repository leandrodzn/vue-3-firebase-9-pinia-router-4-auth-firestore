<script setup>
import { auth } from "../firebase-config";
import { useUserStore } from "../stores/user";
import { onAuthStateChanged } from "firebase/auth";

const user = useUserStore();
</script>
<template>
  <h1>Home</h1>
  <h2>{{ user.userData }}</h2>
</template>
