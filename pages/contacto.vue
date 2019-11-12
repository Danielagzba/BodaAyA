<template>
  <v-container fluid>
    <v-row align="start" justify="start"
    class="pa-3">


    <v-col cols="6" xs="12" sm="6">

      <form  action="https://formspree.io/mnqqdzbn"  method="post">


        <ValidationProvider :rules="{ name: true, email: true, message: true }">

        <v-text-field type="text" name="name" label="Your name" v-model="name" v-validate="'required|max:20'"></v-text-field>
          <v-text-field type="text" name="email" label="Your email:" v-model="email" v-validate="'required|email'"></v-text-field>
        <v-text-field type="text" name="message" label="Message:" v-model="message" v-validate="'required|message'"></v-text-field>



        <!-- your other form fields go here -->

        <v-btn type="submit">Send</v-btn>
        </ValidationProvider>

      </form>

    </v-col>
    </v-row>
  </v-container>
</template>

<script>

    export default {
        $_veeValidate: {
            validator: 'new',
        },

        data: () => ({
            name: '',
            email: '',
            message: '',

            dictionary: {
                attributes: {
                    email: 'E-mail Address',
                    // custom attributes
                },
                custom: {
                    name: {
                        required: () => 'Name can not be empty',
                        max: 'The name field may not be greater than 20 characters',
                        // custom messages
                    },
                    message: {
                        required: 'message field is required',
                    },
                },
            },
        }),

        methods: {
            submit () {
                this.validator.validate()
            },
            clear () {
                this.name = '',
                    this.email = '',
                    this.message = ''

            },
        },

        mounted () {
            this.validator.localize('en', this.dictionary)
        },

    }


</script>


<style scoped>

</style>
