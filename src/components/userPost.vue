<template>
  <v-container>
    <v-btn class="button logout" v-on:click="logout">Logout</v-btn>

    <v-form @submit="addPost()">
      <v-card row>
      <h2>Add a New Post here</h2>
      <v-text-field 
          v-model="title" 
          placeholder="Post Name" 
          class="input" 
          type=" text-box"
          solo-inverted
          required>
      </v-text-field>
      <v-text-field 
          v-model="author" 
          placeholder="Post Author" 
          class="input" 
          type=" text-box"
          solo-inverted
          required>
      </v-text-field>

      <v-text-field 
          v-model="content" 
          placeholder="Post content" 
          class="input" 
          type=" text-area"
          solo-inverted
          required>
      </v-text-field>
      <v-btn type="submit" class="button">Add New Post</v-btn>
      </v-card>
    </v-form>
    <v-spacer class=" ma-4"></v-spacer>

      <v-card v-for="(post, idx) in posts" :key="idx">
        <v-img style="margin: 10px" :src="post.image" height="291px" width="192px"></v-img>
        <p >{{ posts.title }}</p>
        
        <div >{{posts.content}}</div>
        <hr>
        <v-btn class="button" @click="deletePost(post.id)">
          Delete
        </v-btn>
      </v-card>
  
 
  </v-container>
</template>

<script>
import firebase from 'firebase'
// import axios from 'axios'
import { db } from '../firebase'
import { error } from 'util'
// import firebase from '@/firebase'
// Vue.use(axios)
export default {
  name: 'posts',
  data () {
    return {
       posts: {
          title:"",
          author:"",
          content:"",
          categories:[],
          createdAt: new Date()  
      },
    }
  },
  firestore () {
    return {
      posts: db.collection('posts').orderBy('createdAt')
    }
  },
  methods: {
     addPosts(){
       db.collection('posts').add(this.posts).then((docRef)=> {
         console.log('your post has been added successfully:', docRef.id)
       }).catch((error)=> {
         console.log(error)
       })
     },
     getPosts(){
       db.collection('posts').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log('${doc.id} => ${doc.data()}');
    });
});
     },
    deletePost (id) {
      db.collection('posts').doc(id).delete()
       console.log('One post deleted successfully')
    },
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('signin')
       
      }).catch((error)=> console.log(error))
    }
  }
}
</script>