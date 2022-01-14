<template>
  <v-row class="card__component py-4">
    <v-row class="card__list mx-2">
      <v-col v-for="card in cards" :key="card.id" md="4">
        <v-card class="card__people" height="435" width="270" >
          <v-img height="155" :src="card.img"></v-img>
          <v-card-title>{{ card.name }}</v-card-title>
          <v-card-subtitle>{{ card.role }}</v-card-subtitle>
          <v-card-text>Profit</v-card-text>
          <v-progress-linear></v-progress-linear>
          <v-card-text>Attention</v-card-text>
          <v-progress-linear></v-progress-linear>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  name: "ListCardPeople",
  data: () => ({
    cards: [
      {
        id: 0,
        img: "",
        name: "Fedor",
        role: "Vue programmer",
        profit:200,
        attention:44,
      },
      {
        id: 1,
        img: "",
        name: "Fedor",
        role: "Vue programmer",
        attention:44,
      },
      {
        id: 2,
        img: "",
        name: "Fedor",
        role: "Vue programmer",
        attention:44,
      },
            {
        id: 3,
        img: "",
        name: "Fedor",
        role: "Vue programmer",
        attention:44,
      },
            {
        id: 4,
        img: "",
        name: "Fedor",
        role: "Vue programmer",
        attention:44,
      },
            {
        id: 5,
        img: "",
        name: "Fedor",
        role: "Vue programmer",
        attention:44,
      },
      {
        id: 6,
        img: "",
        name: "Fedor",
        role: "Vue programmer",
        attention:44,
      },
    ],
  }),
};
</script>
