<template>
      <v-navigation-drawer
        v-model="drawer"
        :color="color"
        :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant"
        :right="right"
        :permanent="permanent"
        :src="bg"
        absolute
        dark
      >
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar class="avatar">
              <img src="../assets/me.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>name: {{ name }}</v-list-item-title>
              <v-list-item-subtitle>id: {{ uid }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item router-link to="/Userhome">
            <v-list-item-icon>
              <v-icon>mdi-car-connected</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Userhome</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item router-link to="/Onboard_ecus">
            <v-list-item-icon>
              <v-icon>mdi-car-cruise-control</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>ECUs</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item router-link to="/Onboard_map">
            <v-list-item-icon>
              <v-icon>mdi-map-marker-radius-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Map</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item router-link to="/Offboard_swupdate">
            <v-list-item-icon>
              <v-icon>mdi-download-network-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>SWupdate</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item router-link to="/Offboard_swvulnerability">
            <v-list-item-icon>
              <v-icon>mdi-timeline-alert-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>SWvulnerability</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item router-link to="/">
            <v-list-item-icon>
              <v-icon>mdi-account-arrow-right-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Signout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>

      </v-navigation-drawer>
</template>
<script>
    import firebase from 'firebase'

    export default {
    name: 'Userhome',
    data () {
        return {
        drawer: true,
        // name: firebase.auth().currentUser.email,
        // uid: firebase.auth().currentUser.uid,
        name: 'onogawa.mizuki',
        uid: 'e8gsmQnaAcfbZjtIb8KEBArSjY02',
        color: 'grey darken-2',
        right: false,
        permanent: true,
        miniVariant: false,
        expandOnHover: true,
        background: false,
      }
    },
    computed: {
      bg () {
        return this.background ? '../assets/me.jpg' : undefined
      }
    },
    methods: {
        signOut: function () {
        firebase.auth().signOut().then(() => {
            this.$router.push('/signin')
          })
        }
      }
    }
</script>
<style>
    h1 {
        color:grey ;
        font-weight: bold;
        font-size: 50px;
    }

    .userhome-dashboard {
        margin-top: 20px;
        margin-left: 300px;
        margin-right: 40px;
    }

    .img-card {
        margin-top: 300px;
    }

    .v-avatar.v-list-item__avatar.avatar {
      height: 27px !important;
      min-width: 27px !important;
      width: 27px !important;
    }

</style>