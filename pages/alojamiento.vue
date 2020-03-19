<template>
  <v-container>
    <v-row>

      <v-col cols="12" xs="12" md="6">
        <v-row
          align="center"
          justify="center"

        >
          <!-- color="grey lighten-5" -->
          <v-card

            color="transparent"
            class="ma-9 pa-9"
            flat
            tile


          >

            <p

              class="display-2 text-center font-weight-black primary--text"

            >

              HOSPEDAJE
            </p>

            <p class="text-justify">
              Con ayuda de este mapa ubica los hoteles y airbnb más cercanos al lugar de la boda.

            </p>


            <P class="font-weight-medium">
              <a href="https://www.hotelrodavento.com/" target="_blank">Hotel Rodavento</a>

            </P>

            <P class="font-weight-medium">
              <a href="https://hotellascaballerizas.mx/wp/" target="_blank">Hotel las Caballerizas</a>

            </P>

            <P class="font-weight-medium">
              <a href="https://www.hotelesmision.com.mx/destinos/estado-de-mexico/hotel-mision-grand-valle-de-bravo//" target="_blank">Hotel Misión Valle de Bravo</a>

            </P>

            <P class="font-weight-medium">
              <a href="https://hotelavandaro.com.mx/" target="_blank">Hotel Avandaro</a>

            </P>


          </v-card>
        </v-row>
      </v-col>

      <v-col sm="12" xs="12" md="6">

        <iframe id="stay22-widget" width="100%" height="500" frameborder="0"
                src="https://www.stay22.com/embed/gm?lat=19.1583&lng=-100.05&venue=Optional%20Text&maincolor=BCC9C5&checkin=11/06/2020&checkout=11/08/2020">

        </iframe>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>



    export default {
        name: "alojamiento"
    }

</script>

<style scoped>

</style>
