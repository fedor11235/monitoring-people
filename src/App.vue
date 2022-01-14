<template>
  <v-app>
    <v-main>
      <v-app-bar app>
        <b-col class="font-weight-bold black--text d-flex">
          <v-app-bar-title class="d-flex align-center">Cards</v-app-bar-title>
        </b-col>
      </v-app-bar>
      <v-container>
        <ListCardPeople></ListCardPeople>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ListCardPeople from "@/components/ListCardPeople";

export default {
  name: "App",

  components: {
    ListCardPeople,
  },

  data: () => ({
    //
  }),
};
</script>
