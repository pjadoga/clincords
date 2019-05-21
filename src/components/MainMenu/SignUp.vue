<template>
    <v-container align-content-center>
        <v-layout >
            <v-flex xs12 sm8 class=" ma-auto align-center">
                <v-img :src="require('../../assets/ccwithbg.png')"
                                class="my-3"
                                contain
                                height="120">
                </v-img>
                <v-form aria-autocomplete >
                    <v-card dark color="blue-grey" 
                        row
                        class=" box">
                        <v-content class="mx-5 title">Fill the form to Sign Up</v-content>
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
                        </v-card-text> 
												
												 <v-card-text>
                            <v-text-field
														@keyup.stop = "confPassword()" 
                            type = "password" 
                            name = "confirmPassword" 
                            v-model = "confirmPassword"
                            class = "input"
                            placeholder = "Confirm Password *"
                            solo-inverted
                            required>
                            </v-text-field>
														<div id = "msg" class=" v-messages red" >
                              <div v-if = "password !== confirmPassword && confirmPassword !==''" 
                                  class = " info red--text white">
                              </div> 
                              <div v-if = "password == confirmPassword && confirmPassword !==''" 
                                  class = " info green--text white">
                              </div> 
                            </div>
                              <div class=" v-messages red">
                                <div class=" info red--text">{{error}}</div>
                              </div>
														<v-btn tag = "div" 
                                type = "submit" 
                                @click.native ="signUp()" 
                                :loading = "submit" 
                                class = " white--text indigo right" 
                                active-class>Sign Up
                            </v-btn>
														<v-btn tag = "div" 
                                type = "submit" 
                                @click.native ="reset()" 
                                class=" indigo--text white"
                                >Reset
                            </v-btn>
														<v-flex  >Already have an account? <router-link to="/signin" class=" pa-1 white">
                        		Sign in here</router-link></v-flex >
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
    name:'signup',
    data:()=>({
        email: '',
				password: '',
				confirmPassword: '',
        submit:false
    }),
    
    methods: {
      signUp () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
          this.$router.replace('/signin')
          this.submit= true;
            alert('You have successfully registered');
        }).catch((error) => {
          alert(error.message)
        });
      },   
      reset(){
        let clear = confirm('do you want to clear your info?');
        if(clear){
					this.email = ''
					this.password = ''
					this.confirmPassword = ''
					this.submit = false
				}
			},
			confPassword(){
				if(this.password !== this.confirmPassword){
					return document.getElementById('msg').innerHTML = 'Password do not match'
				} else{
					return document.getElementById('msg').innerHTML = 'Password Confirmed'
          document.getElementByTagName
				}
			}
    },
    computed:{
       
    }
    
}
</script>
