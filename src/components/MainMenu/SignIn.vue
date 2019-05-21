<template>
    <v-container align-content-center>
        <v-layout >
            <v-flex xs12 sm8 lg4 class=" ma-auto align-center">
                <v-img :src="require('../../assets/ccwithbg.png')"
                  class="my-3"
                  contain
                  height="120">
                </v-img>
                <v-form aria-autocomplete >
                    <v-card dark color="blue-grey" 
                        row
                        class=" box">
                        <v-content class="mx-5 title">Fill the form to Sign in</v-content>
                        <v-card-text>
                            <v-text-field 
                            color="primary"
                            type="text-box" 
                            name="email" 
                            v-model="email" 
                            placeholder="Input Email Address *"
                            solo-inverted
                            tooltip="insert username"
                            class="input"
                            required>
                            </v-text-field>
                        </v-card-text>
                        <v-card-text>
                            <v-text-field 
															type="password" 
															name="password" 
															v-model="password"
															class="input"
															placeholder="Input Password *"
															solo-inverted
															required>
                            </v-text-field>
														<v-btn 
															type="submit" 
															@click.native ="signIn()"
															:loading = "loading" 
															class =" white--text indigo right" 
															active-class 
														>
														Sign In
                        		</v-btn>
														<v-btn 
															tag="div" 
															type="submit" 
															@click.native ="reset()" 
															class=" indigo--text white"
														>
															Reset
														</v-btn>
														<v-card tag="p" >New Here? <router-link to="/signup" class=" text--white">
                        	Create a new account</router-link></v-card>
												</v-card-text>                        
                    </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import firebase from 'firebase'
export default {
    name:'signin',
    data:()=>({
        email: '',
        password: '',
        submit:false,
        loading:false
    }),
    
    methods: {
      signIn () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
          this.$router.replace('/posts')
        }).catch((error) => {
          alert(error.message)
        });
          this.loading=true
      },   
        reset(){
          let clear = confirm('do you want to clear your info?');
          if(clear){
              this.email = ''
              this.password = ''
          }
        }
    },
    computed:{
       
    }
    
}
</script>
