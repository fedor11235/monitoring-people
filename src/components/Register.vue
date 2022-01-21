<template>
  <div>
    <v-card-title>Register</v-card-title>
    <v-card-subtitle v-if="error">{{ error }}</v-card-subtitle>
    <v-form ref="form" action="#" @submit.prevent="submit" class="mx-4">
      <v-text-field v-model="form.name" label="Name" required></v-text-field>
      <v-text-field v-model="form.email" label="E-mail" required></v-text-field>
      <v-text-field
        v-model="form.password"
        label="Password"
        type="Password"
      ></v-text-field>
      <v-btn type="submit">Login</v-btn>
    </v-form>
  </div>
</template>


<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    submit() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
        .then((data) => {
          console.log(data.user);
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>