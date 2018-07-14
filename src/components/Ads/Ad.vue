<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card>
                    <v-card-media
                        src="https://dummyimage.com/1440x500/f2f2f2"
                        height="300px"
                    >

                    </v-card-media>
                    <v-cart-text>
                        <h1 class="text--primary">Lorem</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, reprehenderit.</p>
                    </v-cart-text>
                    <v-cart-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="warning" flat>Edit</v-btn>
                        <v-btn class="success">Buy</v-btn>
                    </v-cart-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>