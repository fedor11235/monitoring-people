<template>
  <v-card class="card__people" height="420" width="260">
    <v-img height="145" :src="photo"></v-img>
    <v-card-title class="pt-2 pb-3 px-3">
      <span>{{ name }}</span>
      <v-spacer></v-spacer>
      <v-menu bottom left :close-on-content-click="false">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-form ref="form" action="#" class="mx-4">
            <v-text-field
              v-model="name"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="title"
              label="Title"
              required
            ></v-text-field>
            
            <v-btn icon  type="submit" @click.prevent="editCard">Edit</v-btn>
          </v-form>
        </v-list>
      </v-menu>
    </v-card-title>

    <v-card-subtitle class="pb-1 px-3">{{title}}</v-card-subtitle>

    <v-divider class="mx-3"></v-divider>

    <v-card-text class="pb-1 pt-1 px-3">
      <span class="text-left">Profit</span>
      <span class="text-right card__text-right">+ $257</span>
    </v-card-text>
    <v-sheet class="mx-3 rounded" color="#d7d7d7">
      <v-sheet
        class="rounded"
        :color="'#' + card.Profit[0].Color"
        height="15"
        :width="card.Profit[0].Amount / 10 + '%'"
      ></v-sheet>
    </v-sheet>

    <v-card-text class="mg-1 pt-1 px-3">
      <span class="text-left">Attention</span>
      <span class="text-right card__text-right">48 h</span>
    </v-card-text>
    <v-row class="mx-3 mb-5">
      <v-sheet
        :color="card.Tags[2] ? '#' + card.Tags[2].Color : '#d7d7d7'"
        height="15"
        width="236"
        class="rounded"
      >
        <v-sheet
          :color="card.Tags[1] ? '#' + card.Tags[1].Color : '#d7d7d7'"
          height="15"
          width="160"
          class="rounded"
        >
          <v-sheet
            :color="card.Tags[0] ? '#' + card.Tags[0].Color : '#d7d7d7'"
            height="15"
            width="80"
            class="rounded"
          ></v-sheet>
        </v-sheet>
      </v-sheet>
    </v-row>

    <div class="card__attention">
      <v-sheet
        v-for="(elem, index) in card.Attention"
        :key="index"
        :color="'#' + elem.Color"
        :class="'rounded card__bar_' + classAttention(index)"
        height="37"
        :width="elem.Amount * 114 + '%'"
      >
        <span
          :class="'card__attention-interest_' + classAttentionInterest(index)"
          :style="styleAttentionInterest(index, elem.Amount)"
        >
          {{ elem.Amount }}%
        </span>
      </v-sheet>
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex"
import axios from "axios"

export default {
  name: "CardPeople",
  props: ["card"],
  data() {
    return {
      id: this.card.Id,
      name: this.card.Name,
      title: this.card.Title,
      photo: this.card.Photo,
    };
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },

  methods: {
    classAttention: (i) => {
      if (i === 0) return "right-top";
      if (i === 1) return "left-top";
      if (i === 2) return "right-bottom";
      if (i === 3) return "left-bottom";
    },

    classAttentionInterest: (i) => {
      if (i === 0) return "right";
      if (i === 1) return "left";
      if (i === 2) return "right";
      if (i === 3) return "left";
    },

    styleAttentionInterest: (i, amount) => {
      if (amount > 60) {
        if (i === 0) return "left: 10px !important;";
        if (i === 1) return "right: 10px !important;";
        if (i === 2) return "left: 10px !important;";
        if (i === 3) return "right: 10px !important;";
      }
    },

    editCard() {
      const headers = { "X-Auth-Token": this.user.data.authToken }
      const data = { Name: this.name, Title: this.title }
      const url = `https://api.in.dev-team.club/people/` + this.id
      axios
        .post(url, data, { headers: headers })
        .then((res) => {
          console.log(res.data)
        })
        .catch((error) => {
          console.error(error)
        });
    },
  },
};
</script>

<style>
.text-right {
  position: absolute;
  right: 16px;
}

.card__attention {
  position: relative;
  margin-left: 126px;
  width: 1px;
  height: 79px;
}

.card__bar_right-top {
  position: absolute;
  margin-right: 4px;
  right: 0;
  top: 0;
}

.card__bar_left-top {
  position: absolute;
  margin-left: 4px;
  left: 0;
  top: 0;
}

.card__bar_right-bottom {
  position: absolute;
  margin-right: 4px;
  right: 0;
  bottom: 0;
}

.card__bar_left-bottom {
  position: absolute;
  margin-left: 4px;
  left: 0;
  bottom: 0;
}

.card__attention-interest_right {
  position: absolute;
  top: 6px;
  left: -35px;
}

.card__attention-interest_left {
  position: absolute;
  top: 6px;
  right: -35px;
}
</style>
