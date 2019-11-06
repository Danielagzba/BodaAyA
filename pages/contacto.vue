<template>
  <v-container fluid>
    <v-col cols="6">
      <v-form v-model="valid" ref="form">
        <v-text-field
          label="Name"
          v-model="name"
          :rules="nameRules"
          :counter="10"
          required
        ></v-text-field>
        <v-text-field
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          required
        ></v-text-field>
        <v-select
          label="Item"
          v-model="select"
          :items="items"
          :rules="[(v) => !!v || 'Item is required']"
          required
        ></v-select>
        <v-checkbox
          label="Do you agree?"
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue!']"
          required
        ></v-checkbox>

        <v-btn @click="submit" :class="{ primary: !valid, green: valid }">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
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
