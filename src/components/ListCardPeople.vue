<template>
  <v-row class="card__component py-4">
    <v-row class="card__list mx-2">
      <v-col v-if="errored">We were unable to download the information!</v-col>
      <v-overlay :value="loading" class="text-center">
        <v-progress-circular indeterminate="true"></v-progress-circular>
      </v-overlay>
      <v-col
        v-for="card in cards"
        :key="card.Id"
        md="4"
        class="d-flex justify-center"
        id="card__list"
      >
        <CardPeople :card="card"></CardPeople>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import axios from "axios";
import CardPeople from "@/components/CardPeople";

export default {
  name: "ListCardPeople",
  data: () => ({
    cards: [],
    errored: false,
    loading: true,
    test: [],
    numberPage: 1
  }),
  components: {
    CardPeople,
  },

  methods: {
    getInitialCard() {
      axios
        .get(`https://api.in.dev-team.club/people?pp=6&p=0`)
        .then((response) => {
          this.loading = false
          this.cards = response.data;
        })
        .catch(error => {
          console.log(error)
          this.errored = true
          this.loading = false
          })
    },

    getNextCard() {
      window.onscroll = () => {
        let bottomOfWindow = 
          document.documentElement.scrollTop + window.innerHeight >
          document.documentElement.offsetHeight
        if (bottomOfWindow) {
          axios
            .get(`https://api.in.dev-team.club/people?pp=6&p=`+ this.numberPage)
            .then((response) => {
              this.cards = [].concat(this.cards, response.data)
              this.numberPage += 1
            })
            .catch(error => console.log(error))
        }
      };
    },
  },

  beforeMount() {
    this.getInitialCard();
  },

  mounted() {
    this.getNextCard();
  },
};
</script>
