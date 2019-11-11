<template>
  <v-container fluid>
    <v-row align="start" justify="start"
    class="pa-3">


    <v-col cols="6" xs="12" sm="6">

      <form  action="https://formspree.io/mnqqdzbn"  method="post">

        <label>
          Your email:
          <input type="text" name="_replyto">
        </label>
        <label>
          Your message:
          <textarea name="message"></textarea>
        </label>

        <!-- your other form fields go here -->

        <button type="submit">Send</button>


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
