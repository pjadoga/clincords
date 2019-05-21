<template>
    <!-- <v-app> -->
        <v-container align-content-start fluid grid-list-xl>
            <v-layout align-start justify-center fill-height>
                <v-flex>
                    <v-card color="primary" fill-height>
                        <v-card-text>
                            <h1> View your notifications below</h1>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-spacer></v-spacer>
                    <v-flex>
                        <v-card flat>
                            <v-card-text>
                                <h1>This is a plain notification</h1>
                                <p>{{note}}</p>
                                <p>{{note}}</p>
                                <p>{{note}}</p>
                                <p>{{lorem}}</p>
                            </v-card-text>
                        </v-card>
                        <v-btn icon>
                            <v-icon>more_horiz</v-icon>
                        </v-btn>
                    </v-flex>
            </v-layout>
            <v-layout v-bind="binding"  justify-space-around>
                    <v-card>
                        <v-stepper>
                            <v-stepper-header>
                                This is the header
                            </v-stepper-header>
                            <v-stepper-step>
                                <v-stepper-items>
                                    <v-stepper-content>
                                        This is the content of this stepper
                                    </v-stepper-content>
                                </v-stepper-items>
                            </v-stepper-step>
                            <v-stepper-step>
                                <v-stepper-items>
                                    <v-stepper-content>
                                        This is the content of this stepper
                                    </v-stepper-content>
                                </v-stepper-items>
                            </v-stepper-step>
                        </v-stepper>
                    </v-card>
                </v-layout>
        </v-container>
    <!-- </v-app> -->
</template>
<script>
export default {
    data() {
        return{
            lorem: `Lorem ipsum dolor sit amet, mel at clita quando. 
            Te sit oratio vituperatoribus, 
            nam ad ipsum posidonium mediocritatem, 
            explicari dissentiunt cu mea. 
            Repudiare disputationi vim in, mollis iriure nec cu, 
            alienum argumentum ius ad. 
            Pri eu justo aeque torquatos.`,
            note: "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification.So you dont have to worry about the style."
        }

    },
    computed: {
      binding () {
        const binding = {}

        if (this.$vuetify.breakpoint.mdAndUp) binding.column = true

        return binding
      }
    }
    
}
</script>
<style scoped>

</style>




