<template>
  <v-app :dark="setTheme">


    <v-navigation-drawer
      expand-on-hover
      app
      clipped
      temporary
      v-model="drawer"
      color="primary">


      <v-list>
        <v-list-item-group>
          <v-list-item
            nuxt
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon
                color="white"
                v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content
              class="white--text">
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar
      class="primary--text"
      color="grey lighten-4"
      flat app clipped-left
    >


      <v-app-bar-nav-icon @click="drawer = !drawer"
                          color="primary"></v-app-bar-nav-icon>

      <v-toolbar-title>Andrea &
        <span class="font-weight-bold">Beto</span>




      </v-toolbar-title>

      <v-spacer></v-spacer>



      <v-btn icon
             color="primary">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>



      <v-btn icon
             color="primary">
        <v-icon>mdi-heart</v-icon>
      </v-btn>




    </v-app-bar>
    <v-content>
      <nuxt/>
    </v-content>
    <v-footer

      color="grey lighten-3"
      paddles
      app

    >
      <v-row
        justify="center"
        no-gutters
      >

        <v-col
          class="lighten-1 py-4 text-center primary--text font-weight-regular"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>By Daniela González</strong>
        </v-col>
      </v-row>
      <darkMode></darkMode>
    </v-footer>
  </v-app>
</template>

<script>
    import darkMode from "../components/darkMode";

    export default {
        data() {
            return {
                drawer: false,
                items: [
                    {
                        icon: 'mdi-home', text: 'Bienvenidos', to: '/'
                    },
                    {
                        icon: 'mdi-map-marker', text: '¿Dónde nos casamos?', to: '/donde'
                    },
                    {
                        icon: 'mdi-hotel', text: 'Hospedaje', to: '/alojamiento'
                    },
                    {
                        icon: 'mdi-gift', text: 'Sugerencia de regalos', to: '/regalos'
                    },
                    {
                        icon: 'mdi-email', text: 'Contáctanos', to: '/contacto'
                    }
                ],
                photos: [
                    {
                        src: 'https://i.imgur.com/SQ4fIYN.png',
                    }
                ],
            }
        },
        components: {
            darkMode: darkMode
        },
        computed: {
            setTheme() {
                if (this.$store.state.isDark) {
                    return (this.$vuetify.theme.dark = true);
                } else {
                    return (this.$vuetify.theme.dark = false);
                }
            }
        }
    }
</script>
