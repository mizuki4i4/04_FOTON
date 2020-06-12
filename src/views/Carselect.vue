<template>
  <div class="carselect">
    <div class="text_wrap">
        <h1>Select your car</h1>
    </div>
    <ul class="carselect_ul">
        <v-card
            :loading="loading1"
            class="mx-auto my-12"
            max-width="374"
        >
                <v-img
                height="250"
                src="../assets/gtr2.png"
                ></v-img>

                <v-card-title>Nissan GT-R
                    <v-chip
                        class="ma-2"
                        color="success"
                        outlined
                        >
                    <v-icon left>mdi-account</v-icon>
                    OWNED CAR
                    </v-chip></v-card-title>

                <v-card-text>


                <div class="my-4 subtitle-1">
                    HOMEPOINT:〒156-0052 東京都世田谷区経堂2
                </div>

                <div>Lastperiodic Check 2019/08</div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title>Today's availability</v-card-title>

                <v-card-text>
                <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                >
                    <v-chip class="green darken-2 white--text">ALLDAY</v-chip>

                </v-chip-group>
                </v-card-text>

                <v-card-actions>
                <v-btn
                    color="green darken-2"
                    text
                    @click="reserve"
                    router-link to="/Userhome"
                >
                    Userhome
                </v-btn>
                </v-card-actions>
            </v-card>

        <v-card
            :loading="loading2"
            class="mx-auto my-12"
            max-width="374"
        >
            <v-img
            height="250"
            src="../assets/ARIYA.jpg"
            ></v-img>

            <v-card-title>Nissan ARIYA
                <v-chip
                    class="ma-2"
                    color="deep-purple"
                    outlined
                    >
                <v-icon left>mdi-account-group-outline</v-icon>
                SHARED CAR
                </v-chip></v-card-title>

            <v-card-text>

            <div class="my-4 subtitle-1">
                HOMEPOINT:〒155-0031 東京都世田谷区北沢
            </div>

            <div>Lastperiodic Check 2020/01</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Today's availability</v-card-title>

            <v-card-text>
            <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip>8:00PM ~ </v-chip>
                <v-chip>9:00PM ~ </v-chip>
                <v-chip>10:00PM ~ </v-chip>
            </v-chip-group>
            </v-card-text>

            <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
            >
                Reserve
            </v-btn>
            </v-card-actions>
        </v-card>

        <v-card
        :loading="loading3"
        class="mx-auto my-12"
        max-width="374"
        >
            <v-img
            height="250"
            src="../assets/highace.jpg"
            ></v-img>

            <v-card-title>TOYOTA ハイエース
                                <v-chip
                    class="ma-2"
                    color="deep-purple"
                    outlined
                    >
                <v-icon left>mdi-account-group-outline</v-icon>
                SHARED CAR
                </v-chip></v-card-title>

            <v-card-text>

            <div class="my-4 subtitle-1">
                HOMEPOINT:〒155-0031 東京都世田谷区北沢
            </div>

            <div>Lastperiodic Check 2018/12</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Today's availability</v-card-title>

            <v-card-text>
            <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip>9:00PM ~ </v-chip>
                <v-chip>10:30PM ~ </v-chip>
            </v-chip-group>
            </v-card-text>

            <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
            >
                Reserve
            </v-btn>
            </v-card-actions>
        </v-card>
    </ul>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading1: false,
      loading2: false,
      loading3: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading1 = true
        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.text_wrap {
    width: 1200px;
    margin-left: 60px;
}

h1 {
    text-align: center;
}
.v-content__wrap {
  background-color: black;
}
.carselect_ul {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    width: 1200px
}
</style>