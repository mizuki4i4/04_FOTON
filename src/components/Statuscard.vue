<template>
<v-app>
    <div class="button-wrap">
    <v-btn class="ma-2" outlined color="indigo" max-width="344">OWNED CARS</v-btn>
    </div>
    <v-card
        class="mx-auto"
        max-width="344"
    >
        <v-img
        class="white--text align-end"
        height="200px"
        src="../assets/gtr2.jpg"
        >
        <v-card-title>GT-R:2018 バイブラントレッド </v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">OWNER: MIZUKI ONOGAWA</v-card-subtitle>

        <v-card-text class="text--primary">
        <div>LAST PERIODIC CHECK</div>
        <div>2019/05/28</div>
        <div>HOME POINT:</div>
        <div>東京都港区芝大門1-1-34 RESIDIA 401</div>
        </v-card-text>

        <v-card-actions>
           <v-btn x-large color="error" dark>NOW AUTO DRIVE</v-btn>
            <v-btn color="error" fab x-large dark router-link to="/Onboard_map">
                <v-icon>mdi-map-marker-radius-outline</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
    <br>
    <div class="button-wrap">
      <v-btn class="ma-2" outlined color="indigo" max-width="344">SW UPDATES</v-btn>
    </div>
    <br>
    <v-card
    class="mx-auto"
    max-width="344"
    outlined
    >
    <v-list-item three-line>
        <v-list-item-content>
            <div class="overline mb-4">UPDATE : SKIN</div>
            <v-list-item-title class="headline mb-1">#IVI MM319D-L/W/A</v-list-item-title>
            <v-list-item-subtitle>Update : your IVI skin type</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
            tile
            size="80"
            color="grey"
        ><v-icon>mdi-dock-window</v-icon></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
        <v-dialog
        v-model="dialog"
        width="500"
        >
        <template v-slot:activator="{ on }">
            <v-btn
            color="red lighten-2"
            dark
            v-on="on"
            >
            OK
            </v-btn>
        </template>

        <v-card>
            <v-card-title
            class="headline grey lighten-2"
            primary-title
            >
            Now Updating
            </v-card-title>

            <v-card-text>
            Software updates while driving can lead to unexpected errors. When updating, please use Home Point as much as possible.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="dialog = false"
            >
                I accept
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
      <v-btn text>CANCELL</v-btn>
    </v-card-actions>
  </v-card>
    <br>
    <v-card
    class="mx-auto"
    max-width="344"
    outlined
    >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">UPDATE : OS</div>
        <v-list-item-title class="headline mb-1">#IVI MM319D-L/W/A</v-list-item-title>
        <v-list-item-subtitle>Update : your IVI iso images</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ><v-icon>mdi-microsoft-azure</v-icon></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-dialog
        v-model="dialog"
        width="500"
        >
        <template v-slot:activator="{ on }">
            <v-btn
            color="red lighten-2"
            dark
            v-on="on"
            >
            OK
            </v-btn>
        </template>

        <v-card>
            <v-card-title
            class="headline grey lighten-2"
            primary-title
            >
            Now Updating
            </v-card-title>

            <v-card-text>
            Software updates while driving can lead to unexpected errors. When updating, please use Home Point as much as possible.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="dialog = false"
            >
                I accept
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
      <v-btn text>CANCELL</v-btn>
    </v-card-actions>
  </v-card>
    <br>
    <v-card
    class="mx-auto"
    max-width="344"
    outlined
    >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text>OK</v-btn>
      <v-btn text>CANCELL</v-btn>
    </v-card-actions>
  </v-card>
  <br>
</v-app>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
<style>
 .ma-2{
     text-align: center;
 }
 .button-wrap {
     text-align: center;
 }
</style>