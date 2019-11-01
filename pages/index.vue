<template>

  <v-row align="center" justify="right">
  <v-img
    src="https://i.imgur.com/SQ4fIYN.png"
    aspect-ratio="1"
    class="grey lighten-2"
    align="center"
    max-width="700"
    max-height="500"
  ></v-img>
  </v-row>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import VuetifyLogo from '~/components/VuetifyLogo.vue'
    export default {
        data() {
            return{
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
                        src: 'https://i.imgur.com/SQ4fIYN.png',
                    }
                    ]
            }
        },
    }
</script>
