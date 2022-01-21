<template>
  <v-toolbar flat=true>
      <router-link to="/" class="navbar-brand">Vue Firebase Auth</router-link>
          <v-spacer></v-spacer>
          <template v-if="user.loggedIn">
            <div class="nav-item">{{user.data.email}}</div>
            <v-spacer></v-spacer>
            <v-link class="nav-item">
              <a  @click.prevent="signOutAuth">Sign out</a>
            </v-link>
          </template>
          <template v-else>
            <v-link class="nav-item">
              <router-link to="login">Login/</router-link>
            </v-link>
            <v-link class="nav-item">
              <router-link to="register">Register</router-link>
            </v-link>
          </template>

  </v-toolbar>
</template>
<script>
import { mapGetters } from "vuex"
import { getAuth, signOut } from "firebase/auth"

export default {
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signOutAuth() {
        const auth = getAuth();
        signOut(auth)
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
}
</script>