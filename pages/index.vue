<template>

  <v-container fluid>
    <v-row>

      <v-col cols="12">
        <v-row
          align="start"
          justify="start"


        >
          <!-- color="grey lighten-5" -->
          <v-card
            color="transparent"
            width="600px"
            class="ma-8 pa-8"
            flat
            tile


          >

            <p
              class="display-3 font-weight-black"

            >

              ¡NOS CASAMOS!
            </p>
            <p>
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
              to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.ing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy
            </p>
          </v-card>
        </v-row>
      </v-col>

    </v-row>
  </v-container>

</template>
<style>
  div {
    font-family: "Times New Roman", Times, serif;
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
