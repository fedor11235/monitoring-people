<template>
  <v-row class="card__component py-4">
    <v-row class="card__list mx-2">
      <v-col v-if="errored">We were unable to download the information!</v-col>
      <v-col v-if="loading" class="text-center">
        <v-progress-circular indeterminate="true"></v-progress-circular>
      </v-col>
      <v-col v-for="card in cards" :key="card.Id" md="4" class="d-flex justify-center">
        <CardPeople :card="card"></CardPeople>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import axios from "axios";
import CardPeople from '@/components/CardPeople';

export default {
  name: "ListCardPeople",
  data: () => ({
    cards: [],
    errored: false,
    loading: true,
  }),
  components: {
    CardPeople,
  },
  mounted() {
    axios
      .get("https://api.in.dev-team.club/people")
      .then((response) => (this.cards = response.data))
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
