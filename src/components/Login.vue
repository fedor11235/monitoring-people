<template>
  <v-col>
    <v-card-title>Login</v-card-title>
    <v-card-subtitle v-if="error">{{ error }}</v-card-subtitle>
    <v-form ref="form" action="#" @submit.prevent="submit"  class="mx-4">
      <v-text-field v-model="form.email" label="E-mail" required></v-text-field>

      <v-text-field
        v-model="form.password"
        label="Password"
        type="Password"
        required
      ></v-text-field>
      <v-btn type="submit">Login</v-btn>
    </v-form>
  </v-col>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    submit() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.form.email, this.form.password)
        .then((data) => {
          const user = data.user;
          console.log(user.stsTokenManager);
          this.$router.replace({ name: "List" });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>