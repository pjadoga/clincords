<template>
    <v-app>
        <v-container align-content-start fluid grid-list-xl justify-space-around>
            <v-layout class="allign-center">
                <v-flex tag="h1" class="headline" >
                        {{title}}
                </v-flex>
            </v-layout>
            <v-layout >
                <v-flex v-for="(contact, i) in contacts"
                    :key="i" @click="contact.show=!contact.show">
                    <v-flex>
                        <v-card color="primary" fixed hover>
                            <v-card-text>
                                <h1> {{contact.name}}</h1>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                <v-spacer></v-spacer>
                    <v-flex v-show="contact.show">
                        <v-card>
                            <v-card-text >
                                <em> Phone Number: {{contact.phone}}</em>
                                <address> Location: {{contact.address}}</address>
                                
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>
<script>
export default {
    data(){
        return{
            title: 'This is my contact page',
            contacts: [
                {name: 'Justin', address: 'New Haven, Enugu', phone:'09076984772', show:false},
                {name: 'PJ Adoga', address: 'New Haven-Extension, Enugu', phone:'08176353735', show:false},
                {name: 'Godwin', address: 'Abakaliki road, Enugu', phone:'09076984662', show:false},
                {name: 'Vwarhe', address: 'Ogui Road, Enugu', phone:'09076984772', show:false}
            ]
        }
    },
    methods:{

    },
    computed:{

    }
}
</script>
<style scoped>

</style>


