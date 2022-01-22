<template>
  <v-toolbar :flat="true">
      <router-link to="/">Vue Firebase Auth</router-link>
          <v-spacer></v-spacer>
          <template v-if="user.loggedIn">
            <div>{{user.data.email}}</div>
            <input class="mx-2 search-input">
            <v-spacer></v-spacer>
              <a  @click.prevent="signOutAuth">Sign out</a>
          </template>
          <template v-else>
              <router-link to="login">Login/</router-link>
              <router-link to="register">Register</router-link>
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

<style>
.search-input{
width: 189px;
height: 20px;
border: 1px solid #000000;
border-radius: 7px;
}

</style>