<template>
  <v-app light>



    <v-navigation-drawer
      app
      clipped
      v-model="drawer"
      color="primary">



      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item
            nuxt
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar
      class="primary--text"
      color="grey lighten-5"
      flat app clipped-left
               >

      <v-app-bar-nav-icon @click="drawer = !drawer"
                          color="primary"></v-app-bar-nav-icon>

      <v-toolbar-title>Andrea&
        <span class="font-weight-bold">Beto</span>



      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-divider vertical></v-divider>

      <v-btn icon
      color="primary">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn icon
             color="primary">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-divider vertical></v-divider>


      <v-btn icon
             color="primary">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <nuxt/>

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
          class="lighten-1 py-4 text-center primary--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Naan</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
    export default{
        data() {
            return{
                drawer: false,
                items: [
                    {
                        icon: 'mdi-home', text: 'Bienvenidos'
                    },
                    {
                        icon: 'mdi-map-marker', text: '¿Dónde nos casamos?', to: '/'
                    },
                    {
                        icon: 'mdi-hotel', text: 'Hospedaje', to: '/work'
                    },
                    {
                        icon: 'mdi-gift', text: 'Sugerencia de regalos', to: '/aboutme'
                    },
                    {
                        icon: 'mdi-check', text: 'Confirma tu asistencia', to: '/contact'
                    },
                    {
                        icon: 'mdi-email', text:'Contactanos'
                    }
                ],
                model: 1,
                photos: [
                    {
                        src: 'https://i.imgur.com/SQ4fIYN.png',
                    }
                ],
            }
        },
        components: {},
        computed: {}
    }
</script>
