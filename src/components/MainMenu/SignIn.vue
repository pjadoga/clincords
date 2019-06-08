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
                            v-model.trim = "signinForm.email" 
                            placeholder = "Input Email Address *"
                            solo-inverted
                            tooltip = "insert username"
                            class = "input"
                            required>
                            </v-text-field>
                            <v-text-field 
															type="password" 
															name="password" 
															v-model.trim = "signinForm.password"
															class="input"
															placeholder="Input Password *"
															solo-inverted
															required>
                            </v-text-field>
														<v-btn 
															type="submit" 
															@click.native ="signIn()"
															:loading = "submit" 
															class =" white--text indigo right" 
															active-class 
														>
														Sign In
                        		</v-btn>
														<v-btn 
															tag="div" 
															type="reset" 
															@click.native ="reset()" 
															class=" indigo--text white"
														>
															Reset
														</v-btn>
														<v-card flat color='transparent' >
                              <p>New Here? <router-link to="/signup" class=" text--white">
                        	Create a new account</router-link></p>
                          <p>Forgot password? <router-link to="/signup" class=" text--white">
                        	Reset now</router-link></p>
                          </v-card>
												</v-card-text>                        
                    </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import fb from '../../firebase.js'
export default {
    name:'signin',
    data:()=>({
      signinForm: {
          email: '',
          password: ''
      },
      submit:false
    }),
    
    methods: {
      signIn () {
        this.submit=true
        firebase.auth().signInWithEmailAndPassword(this.signinForm.email, this.signinForm.password).then((user) => {
          this.$store.commit('setCurrentUser', user.user)
          // .replace('/posts')
          this.submit = false
          this.$store.dispatch('fetchUserProfile')
          this.$router.push('/posts')
        }).catch((error) => {
          alert(error.message)
          this.submit = false
        });
      },   
        reset(){
          let clear = confirm('Sure to clear info?');
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
<style scoped>
a{
  color: tomato;
  text-decoration: none;
  text-anchor: start
}

</style>
