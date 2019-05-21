<template>
  <v-app >
    <!-- add class="hidden-sm-and-up" later -->
    <v-navigation-drawer
      v-model="drawer"
      hide-overlay
      app
      fixed
      temporary
      
    >
      <v-list 
        dense 
        class="navdraw"
      >
        <v-card dark flat color="blue-grey">
          <v-card-title  class="headline">
            <v-avatar

              :size="60"
              color="grey lighten-4"
            >
              <img :src="require('./assets/ccwithbg.png')" alt="avatar">
            </v-avatar>
            {{myApp}}
          </v-card-title>
        </v-card>
        <v-list-tile 
        v-for="item in menus.filter(item => item.left)" 
        :key="item.tag"
        router
        :to="item.url">
          <v-list-tile-action>
            <v-icon medium color="blue">{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.tag}}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      color="blue-grey"
      dark
      app
      class=" pt-2"
        >
        <!-- add class="hidden-sm-and-up" later -->
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class=" "></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase ">
        <v-layout> 
          <v-flex
            grow
            sm4
          >
            <v-card  flat color="transparent" :to = "'/'" hover >
              <v-avatar tile>
              <v-img :src="require('./assets/ccnobg.png')"> </v-img>
              </v-avatar>
              <span 
                class=" red--text font-weight-bold  headline "
              >
                {{myApp}}
              </span>
            </v-card>
          </v-flex>
        </v-layout> 
      </v-toolbar-title>
      <v-spacer align-start justify-end row> </v-spacer>
      <v-toolbar-items class="hidden-xs-only" dense>
        <v-menu open-on-hover bottom offset-y>
          <template v-slot:activator= "{ on }">
            <v-btn 
              flat 
              :style = "color='button'" 
              v-for ="(menu, i) in menus.filter(item => item.main )" 
              :key = 'i' 
              :to= "menu.url"
              v-on="on"
            >
              <v-icon medium color="orange">{{menu.icon}}</v-icon>
                {{menu.tag}} 
            </v-btn>
          </template>
          <v-list>
            <v-list-tile
              v-for ="men in menus.filter(item =>item.sub)" 
              :key = 'men.ta.subtag' 
              @click= "men.ta.url"
            >
              <v-list-tile-title>{{ men.ta.subtag }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
          </v-menu>
<!-- A badge is included here -->
          <v-badge overlap >
            <template v-slot:badge>
              <span class=" white--text" >{{slider}}</span>
            </template>
            <v-avatar
              color="purple red--after"
            >
              <v-icon dark>notifications</v-icon>
            </v-avatar>
          </v-badge>
        
      </v-toolbar-items>
    </v-toolbar>

    <v-layout
    light
    class=" pt-4 mt-5 red lighten-5 elevation-0"
    >
    
      <v-flex class="subheading pl-2">Get connected with us on:</v-flex>
      <v-spacer></v-spacer>
      <v-btn
        v-for = "icon in icons"
        :key = "icon.name"
        class="mr-4  light-blue--text"
        dark
        icon
        round
        :to = "icon.name"
      >
        <v-icon size="24px">{{ icon.icon }}</v-icon>
      </v-btn>
    </v-layout>
     <v-slider
          xs10
          v-model = "slider"
          :min= "18"
          :max= "120"
          label= "Age"
          thumb-label
      >
      </v-slider>
      <span class=" blue--text">{{slider}}</span>
  
    <v-content >
      <router-view></router-view>
    </v-content>

    <v-footer 
      height="auto" 
    >
      <v-card 
      min-width= "100%"
      >
        <v-card-title
        class=" blue-grey lighten-1 justify-center font-weight-bold lime--text "
        dark
        >
          <v-btn 
            :style="color='button'"
            dense 
            flat
            round
            v-for="(menu, i) in menus.filter(item => item.foot)" 
            :key='i'
            :to="menu.url"
            :loading="loading"
            >
            {{menu.tag}}
          </v-btn> 
        </v-card-title>

    <v-card-actions class=" lighten-3 blue-grey justify-center">
     &copy; {{myDate()}}— <strong> {{myApp}}</strong>
    
      </v-card-actions>
      </v-card>
      </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      myApp: 'ClinCords',
      drawer: false,
      drawerRight: null,
      left: false,
      loading:false,
      slider: '',
      menus:[
          {tag: 'Home',          url:'/',              icon:'home',    main:true, left:true},
          {tag: 'Contact Us',    url:'/contact',       icon:'', main:true, foot:true},
          {tag: 'About Us', 
          ta:[
            {subtag: 'Our Vision', url: ''},
            {subtag: 'Our Mission', url: ''},
            {subtag: 'Our History', url: ''}
          ],                     url:'/about',         icon:'',        main:true, foot:true, sub: true},
          {tag: 'Posts',         url:'/posts',         icon:'add', main:true, left:true},
          {tag: 'Reference',     url:'/ref',           icon:'',        main:true},
          {tag: 'Affiliates',    url:'/affiliates',    icon:'',        main:true, foot:true},
          {tag: 'Sign In',       url:'/signin',        icon:'person',  main:true, left:true, user:true},
          {tag: 'Sign UP',       url:'/signup',        icon:'person_add', main:true, left:true, user:true},
          {tag: 'Terms',         url:'/terms',         icon:'',        foot:true},
          {tag: 'Privacy',       url:'/privacy',       icon:'',        foot:true},
          {tag: 'FAQ',           url:'/faq',           icon:'',        foot:true},
          {tag: 'Location',      url:'/location',      icon:'',        foot:true},
          {tag: 'Facebook',      url:'/facebook',      icon:'',        foot:true},
          {tag: 'Twitter',       url:'/twitter',       icon:'',        foot:true},
          {tag: 'Notifications', url:'/notifications', icon:'notifications', left:true},
          {tag: null,              url:'/notifications', icon:'notifications', main:true, user:true},
          {tag: 'Users',         url:'/users',         icon:'people',  left:true},
          {tag: null,       url:'/profile',       icon:'people',  main:true, user:true},

      ],
      icons: [
        {name: 'facebook', icon: 'fab fa-facebook'},
        {name: 'twitter', icon: 'fab fa-twitter'},
        {name: 'google-plus', icon: 'fab fa-google-plus'},
        {name: 'linkedIn', icon: 'fab fa-linkedin'},
        {name: 'instagram', icon: 'fab fa-instagram'}
      ]
    }
  },
  methods:{
  myDate() {
    var y= new Date;
      return y.getUTCFullYear();
    
  }
  },
    props: {
    source: String
    }
  
}
</script>
<style scoped>
.draw{
  background-color: transparent;
  background-blend-mode: difference;
}
.router-link-exact-active{
  background:transparent;
  color:rgb(202, 233, 236);
}
button{
  color:rgb(202, 233, 236);
}
.navdraw{
  background-color: rgba(204, 223, 224, 0.226);
}
.contain{
  height: contain;
}
.footer{
  width: 100%;
}
</style>
