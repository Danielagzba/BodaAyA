<template>


  <v-container fluid>


    <v-row>


      <v-col cols="12" xs="12" md="6" sm="12">
        <v-row align="start" justify="start">
          <v-card
            tile
            class="pa-3"
            width="100%"
            color="transparent"
            flat>


            <v-img

              src="https://i.imgur.com/WdjZ2qQ.jpg"
              aspect-ratio="1"
              max-width="600"
              max-height="500"
            ></v-img>

          </v-card>
        </v-row>
      </v-col>


      <v-col cols="12" xs="12" md="6">
        <v-row
          align="center"
          justify="center"

        >
          <!-- color="grey lighten-5" -->
          <v-card

            color="transparent"
            width="700px"
            class="ma-9 pa-9"
            flat
            tile


          >

            <p
              class="display-3 text-center font-weight-black primary--text"


            >
              ¡NOS CASAMOS!
            </p>
            <p class="text-justify">
              No hay nada que nos haga más ilusión que poder compartir contigo este día tan especial. Es por eso que
              estamos preparando una gran fiesta en la que seguro la pasaremos increíble.
            <p class="text-justify">
              Hemos creado esta página web para ayudarte con todas tus dudas sobre nuestro gran día, ver la ubicación de
              donde será el evento, cómo llegar, así como sugerencias de hospedaje en Valle de Bravo.
            </p>
            Gracias por tu colaboración en hacer de este día el más especial en nuestras vidas.

            </p>

            <p class="font-weight-bold primary--text" align="right">
              Andrea y Alberto
            </p>

            <p
              class="display-3 text-center font-weight-medium primary--text"


            >
              21.03.2020
            </p>

          </v-card>
        </v-row>
      </v-col>


    </v-row>
  </v-container>


</template>
<style>
  div {
    font-family: "roboto", Times, serif;
  }
</style>
<script>
    import Logo from '~/components/Logo.vue'
    import VuetifyLogo from '~/components/VuetifyLogo.vue'

    export default {
        data() {
            return {
                drawer: false,
                items: [
                    {
                        icon: 'mdi-home',
                        text: 'Home',
                    },
                    {
                        icon: 'mdi-camera',
                        text: 'Work',
                    },
                    {
                        icon: 'mdi-face',
                        text: 'About me',
                    },
                    {
                        icon: 'mdi-email',
                        text: 'Contact',
                    },
                ],
                model: 1,
                photos: [
                    {
                        src: 'https://i.imgur.com/WdjZ2qQ.jpg',
                    }
                ]
            }
        },
    }
</script>
