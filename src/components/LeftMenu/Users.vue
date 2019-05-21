<template>
<v-app app >
  <v-layout row >
    <v-flex xl12 >
      <v-card flat >
          <v-responsive aspect-ratio = "auto">
          <v-layout>
                <v-btn icon >
                    <v-icon>arrow_back</v-icon>
                </v-btn>
                    <v-toolbar-title>My User Albums</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>search</v-icon>
                </v-btn>

          </v-layout>
        <v-subheader>May</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="i in 9" :key="i" xs4>
              <img :src="`https://randomuser.me/api/portraits/men/${i+7 }.jpg`" class="image" alt="lorem" width="100%" height="100%">
            </v-flex>
          </v-layout>
        </v-container>
        <v-subheader>June</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="i in 6" :key="i" xs4>
              <img :src="`https://randomuser.me/api/portraits/women/${i + 5}.jpg`" class="image" alt="lorem" width="100%" height="100%">
            </v-flex>
          </v-layout>
        </v-container>
       </v-responsive>
      </v-card>
    </v-flex>
  </v-layout>
  </v-app>
</template>
<script>
export default {
    data (){
        return{
            
        }
    }
}
</script>
