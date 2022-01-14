<template>
      <v-card class="card__people" height="435" width="270">
          <v-img height="155" :src="card.Photo"></v-img>
          <v-card-title>{{ card.Name }}</v-card-title>
          <v-card-subtitle>{{ card.Title }}</v-card-subtitle>
          <v-card-text>Profit</v-card-text>
          <v-sheet color="#d7d7d7" height="10">
            <v-sheet
              :color="'#' + card.Profit[0].Color"
              height="10"
              :width="card.Profit[0].Amount / 10 + '%'"
            ></v-sheet>
          </v-sheet>

          <v-card-text>Attention</v-card-text>

          <v-sheet color="#d7d7d7" height="10">
            <v-row class="mx-0">
              <v-sheet :color="card.Tags[0]? '#' + card.Tags[0].Color: '#d7d7d7'" height="10" width="33%"></v-sheet>
              <v-sheet :color="card.Tags[1]? '#' + card.Tags[1].Color: '#d7d7d7'" height="10" width="33%"></v-sheet>
              <v-sheet :color="card.Tags[2]? '#' + card.Tags[2].Color: '#d7d7d7'" height="10" width="34%"></v-sheet>
            </v-row>
            
            
          </v-sheet>
          <br>
          <v-sheet v-for="elem in card.Attention" :key="elem.Color" color="#d7d7d7" height="10">
            <v-sheet
              :color="'#' + elem.Color"
              height="10"
              :width="elem.Amount + '%'"
            ></v-sheet>
          </v-sheet>
        </v-card>
</template>

<script>
export default {
    name: 'CardPeople',
    props:['card']
}
</script>
