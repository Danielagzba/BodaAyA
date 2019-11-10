<template>
  <v-container fluid>
    <v-row align="start" justify="start"
    class="pa-3">


    <v-col cols="6" xs="12" sm="6">

      <form  action="https://send.pageclip.co/5ZSuYkrbAKOO5cBh0YVueXrYotXRj75K" class="pageclip-form" method="post">

        <v-text-field type="text" name="name" label="Name" :counter="20" :rules="nameRules"/>
        <v-text-field type="text" name="email" label="Email" value="" :rules="emailRules"/>
        <v-text-field type="text" name="text" label="Message"/>
        <v-btn tile class="button pageclip-form__submit font-weight-medium" type="submit">
          <span>Send</span>
        </v-btn>


      </form>

    </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 20) || 'Name must be less than 20 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
    })
    }


</script>


<style scoped>

</style>
