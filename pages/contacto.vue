<template>
  <v-container fluid>
    <v-col cols="6">
      <form  action="https://send.pageclip.co/5ZSuYkrbAKOO5cBh0YVueXrYotXRj75K" class="pageclip-form" method="post">

        <v-text-field type="text" name="name" label="name"/>
        <v-text-field type="text" name="email" label="Email" value=""/>
        <v-text-field type="text" name="text" label="message"/>
        <input type="submit" value="Send">


      </form>

    </v-col>
  </v-container>
</template>

<script>
    export default {
        name: "contacto"
    }


</script>


<style scoped>

</style>
