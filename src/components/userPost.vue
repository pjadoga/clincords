<template>
  <v-container>
    <!-- <v-card>
      <v-card-text>welcome {{userProfile.name}}</v-card-text>
    </v-card> -->
    <v-btn class="button logout" v-on:click= "logout">Logout</v-btn>

    <v-form @submit="addPost()">
      <v-card row>
      <h2>Add a New Post here</h2>
      <v-text-field 
          v-model="title" 
          class="input" 
          placeholder= "Your post title here"
          type= "text-box"
          solo
          title= "read alone"
          name = "title"
          required>
      </v-text-field>
      <v-text-field 
          v-model="author" 
          placeholder="Post Author" 
          class="input" 
          type=" text-box"
          solo-inverted
          name = "author"
          required>
      </v-text-field>

      <v-text-field 
          v-model="content" 
          placeholder="Post content" 
          class="input" 
          type=" text-area"
          solo-inverted
          name = "content"
          required>
      </v-text-field>
      <v-btn type="submit" class="button">Add New Post</v-btn>
      </v-card>
    </v-form>
    <v-spacer class=" ma-4"></v-spacer>
    <v-card v-for="(post, idx) in ccposts" :key="idx">
      <!-- <v-img style="margin: 10px" :src="post.image" height="291px" width="192px"></v-img> -->
      <p >{{ post.title }}</p>
      
      <div >{{post.content}}</div>
      <hr>
      <v-btn class="button" @click="deletePost(post.id)">
        Delete
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
import firebase from 'firebase'
import { db } from '../firebase'
import { error } from 'util'
import {mapState} from 'vuex'
const fb = require('./../firebase.js')
// import firebase from '@/firebase'
// Vue.use(axios)
export default {
  name: 'posts',
  data () {
    return {
       ccposts: [
          // title:"",
          // author:"",
          // content:"",
          // categories:[],
          // createdAt: new Date()  
      ],
      // justRead: 'Field is not editable'
    }
  },
  // firestore () {
  //   return {
  //     // ccposts: db.collection('ccposts').orderBy('createdAt')
  //   }
  // },
  methods: {
     addPosts(){
       db.collection('ccposts').add(this.ccposts).then((docRef)=> {
         console.log('your post has been added successfully:'+ docRef.id)
       }).catch((error)=> {
         console.log(error)
       })
     },
     getPosts(){
      //  add this later 
      //  . where("author", "==", "uid").orderBy('createdAt')
       db.collection('ccposts').get().then((querySnapshot) => {
          let ccposts= [];
          querySnapshot.forEach((doc) => {
            ccposts.push(doc.data())
            console.log('${doc.id} => ${doc.data()}');
            this.ccposts = ccposts
          });
        });
     },
    deletePost (id) {
      db.collection('posts').doc(id).delete()
       console.log('One post deleted successfully')
    },
    // logout () {
    //   firebase.auth().signOut().then(() => {
    //     this.$router.replace('signin')
       
    //   }).catch((error)=> console.log(error))
    // },
    logout() {
      fb.auth.signOut().then(() => {
        this.$store.dispatch('clearData')
        this.$router.push('/signin')
      }).catch(err => {
          console.log(err)
      })
    },
    justRead (field){
      alert( 'sorry, you can"t edit' + justRead(field) + 'field.')
    }
  },
  computed: {
    ...mapState(['userProfile'])
  }
}
</script>