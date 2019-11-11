<template>
  <v-container fluid>
    <v-row align="start" justify="start"
    class="pa-3">


    <v-col cols="6" xs="12" sm="6">

      <form  action="https://formspree.io/mnqqdzbn"  method="post">


        <v-text-field type="text" name="name" label="Your name"></v-text-field>
          <v-text-field type="text" name="_replyto" label="Your email:"></v-text-field>
        <v-text-field type="text" name="message" label="Message:"></v-text-field>



        <!-- your other form fields go here -->

        <v-btn type="submit">Send</v-btn>


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
