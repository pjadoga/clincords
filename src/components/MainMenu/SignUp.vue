<template>
  <!-- <v-container align-content-center> -->
    <v-layout justify-center>
      <v-flex xs12 sm8 class=" ma-auto align-center">
        <v-img :src="require('../../assets/ccwithbg.png')"
          class="my-3"
          contain
          height="120"
        >
        </v-img>
        <v-form aria-autocomplete >
          <v-card dark color="blue-grey" 
            row
            class=" box"
          >
            <v-card-actions class="mx-1 title justify-space-around">Fill the form to Sign Up</v-card-actions>
            <v-card-text>
              <v-text-field 
                color="primary"
                type="text-box" 
                name="name" 
                v-model.trim= "signupForm.name" 
                placeholder="Input your full name *"
                solo-inverted
                tooltip="your full name"
                class="input"
                required>
              </v-text-field>
              <v-text-field 
                color="primary"
                type="text-box" 
                name="username" 
                v-model.trim= "signupForm.username" 
                placeholder="Input your username *"
                solo-inverted
                tooltip="your username"
                class="input"
                required>
              </v-text-field>
              <v-text-field 
                color="primary"
                type="text-box" 
                name="email" 
                v-model.trim = "signupForm.email" 
                placeholder="Input Email Address *"
                solo-inverted
                tooltip="insert email address"
                class="input"
                required>
              </v-text-field>
              <v-text-field 
                type="password" 
                name="password" 
                v-model.trim = "signupForm.password"
                class="input"
                placeholder="Input Password *"
                solo-inverted
                required>
              </v-text-field>
              <v-text-field
                @keyup.stop = "confPassword()" 
                type = "password" 
                name = "confirmPassword" 
                v-model.trim = "confirmPassword"
                class = "input"
                placeholder = "Confirm Password *"
                solo-inverted
                required>
              </v-text-field>
              <div class=" v-messages " >
                <v-card tag="h3" 
                  flat 
                  color="transparent" 
                  id = "msg" 
                  v-if = "signupForm.password !== confirmPassword && confirmPassword !==''" 
                  class = " red--text"
                >
                </v-card > 
                <v-card 
                  tag="h3" 
                  flat 
                  color="transparent" 
                  id = "msg" 
                  v-if = "signupForm.password === confirmPassword && confirmPassword !==''" 
                  class = " green--text">
                </v-card > 
              </div>
                <!-- <div class=" v-messages red">
                  <div class=" info red--text">{{error}}</div>
                </div> -->
              <v-btn tag = "div" 
                  type = "submit" 
                  @click.native ="signUp()" 
                  :loading = "submit" 
                  class = " white--text indigo right" 
                  active-class>Sign Up
              </v-btn>
              <v-btn tag = "div" 
                  type = "reset" 
                  @click.native ="reset()" 
                  class=" indigo--text white"
                  >Reset
              </v-btn>
              <v-flex  >Already have an account? <router-link to="/signin" >
              Sign in here</router-link></v-flex >
            </v-card-text>  
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  <!-- </v-container> -->
</template>
<script>
import router from './../../router'
import firebase from 'firebase'
import { error } from 'util';
export default {
    name:'signup',
    data:()=>({
      signupForm:{
        name: '',
        username: '',
        email: '',
        password: '',
      },
      confirmPassword: '',
      submit:false
    }),
    
    methods: {
      signUp(){
        this.submit = true
        firebase.auth().createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password).then((user) => {
          this.$store.commit('setCurrentUser', user)
          // create user obj
          fb.usersCollection.doc(user.uid).set({
              name: this.signupForm.name,
              username: this.signupForm.username
          }).then(() => {
            this.$store.dispatch('fetchUserProfile')
            this.$router.push('/signin')
            // this.$router.replace('/signin')
            this.submit= false;
            alert('You have successfully registered');
          }).catch((error)=>{
            console.log(error.message)
            this.submit = false
          })
        }).catch((error) => {
          alert(error.message)
          this.submit= false;
        });
      },   
      reset(){
        let clear = confirm('do you want to clear your info?');
        if(clear){
					this.signupForm.email = ''
					this.signupForm.password = ''
					this.confirmPassword = ''
					this.submit = false
				}
			},
			confPassword(){
				if(this.signupForm.password !== this.confirmPassword){
					return document.getElementById('msg').innerHTML = 'Password do not match'
				} else{
					return document.getElementById('msg').innerHTML = 'Password Confirmed'
          // document.getElementByTagName
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