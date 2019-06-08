<template>
  <v-container fluid text-xs-center wrap>
    <v-carousel
      delimiter-icon="stop"
      height="450"
      interval="3000"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      >
        <v-layout
          justify-center
          fill-height
          pa-3
          orange--text
        >
          <div class=" font-weight-bold display-2">{{item.label}} </div>
        </v-layout>  
      </v-carousel-item>
    </v-carousel>
        
    <v-flex my-4 xs12>
      <v-card light color="blue-grey">
        <v-responsive :aspect-ratio = "16/1">
          <v-card-text class="display-2 font-weight-bold mb-4" >
            Welcome to {{myApp}}
          </v-card-text>
        </v-responsive>
      </v-card>
      <p class="subheading font-weight-regular">
        For help and collaboration with other ClinCords' developers,
        <br> <mark aria-readonly> join our online platform </mark>
      </p>
    </v-flex>
    <!-- <v-layout> -->
    <v-card flat
      min-width= "100%"
      class="mx-auto hide-overflow"
      style="max-width: 100%;"
    >
      <v-layout justify-space-between>
        <v-flex xs8 d-flex mr-4>
          <v-card>
            <v-card-text class="headline justify-center font-weight-bold">Recent Posts</v-card-text>
            <v-expansion-panel focusable>
              <v-expansion-panel-content
                v-for="(post, i) in hposts"
                :key="i"
                :to="post.href"
                class="subheading mx-1"
                target="_blank"
              >
                <template v-slot:header >
                  <div class=" teal--text  headline justify-center font-weight-bold mb-3" >{{ post.title }}</div>
                </template>
                <v-divider></v-divider>
                <v-card>
                  <v-card-text class="blue lighten-5 elevation-1">{{ post.body }}</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-card>
        </v-flex >
        <v-flex xs4 class=" layout-xs-only">
          <v-img :src= "require('../assets/treatment.jpg')" ></v-img>
          <video width="100%" autoplay ba-4>
            <source src="C:/Users/AUDISYS/Videos/Annie.2014.720p.BluRay.x264.YIFY.mp4">
          </video>
        </v-flex>
      </v-layout>
    </v-card>

    <v-flex>
      <v-card dark color="blue-grey">
        <v-card-text class="headline font-weight-bold mb-3" >Moral Information</v-card-text>
      </v-card>
      <v-layout justify-center justify-space-between>
        <v-flex >
          <v-card flat 
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-1"
            target="_blank"
          >
            {{ link.text }}
          </v-card>
        </v-flex>
        <v-flex class=" grid-list-xs">
          <v-card>
            <v-layout class=" brown--text"
              v-for= "quote in quotes"
              :key= "quote.title">
              <v-card-text >
                <ins>{{quote.title}} </ins><br> {{quote.content}}
              </v-card-text>
              </v-layout>
              <v-pagination
                v-model= "page"
                circle
                :length= "5">
                
              </v-pagination>
            
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex>
      <v-card dark color="blue-grey" hover >
        <v-card-text class="headline font-weight-bold mb-3">In this website! </v-card-text>
      </v-card>
      <v-layout justify-space-around class=" flex-xs-only">
      <v-card 
          v-for="(next, i) in whatsNext"
          :key="i"
          :href="next.href"
          class="subheading align-center"
          target="_blank"
          color="../assets/treatment.jpg"
          width="32%"
        >
        <!-- <img > -->
          {{ next.text }}
        <!-- </a> -->
      </v-card>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>

  export default {
    name: 'home',
    data: () => ({
      myApp: 'ClinCords',
      page: 1, 
      // slider: '',
      hposts: [
        {
          title: 'vuetify-loader',
          body: 'This is the body content of my vuetify-loader post: https://github.com/vuetifyjs/vuetify-loader',
          href:'#'
        },
        {
          title: 'github',
          body: 'This is the body content of my github post: https://github.com/vuetifyjs/vuetify',
          href:'#'
        },
        {
          title: 'awesome-vuetify',
          body: 'This is the body content of my awesome-vuetify post: https://github.com/vuetifyjs/awesome-vuetify',
          href:'#'
        },
        {
          title: 'The vuetifier',
          body: 'This is the body content of my The vuetifier post: https://thevuetifier.com',
          href:'#'
        }
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com'
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com'
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuetifyjs.com'
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs'
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify'
        }
      ],
      whatsNext: [
        {
          text: 'Explore Clincords',
          href: 'https://vuetifyjs.com/components/api-explorer'
        },
        {
          text: 'Select a a desired plan',
          href: 'https://vuetifyjs.com/layout/pre-defined'
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
        }

      ],
       items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            label: ' Vuetify Squirrel'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            label: 'Vuetify Sky'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            label: 'Vuetify Bird'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            label: 'Vuetify Planet'
          },
           {
            src: require('../assets/april27.jpg'),
            label: "ClinCords' Just April 27"
          },
          {
            src: require('../assets/ccwithbg.png'),
            label: "ClinCords' logo with background"
          },
          {
            src: require('../assets/just_akimbo.jpg'),
            label: "ClinCords' Just Akimbo"
          },
           {
            src: require('../assets/ccnobg.png'),
            label: "ClinCords' logo without background"
          },
          {
            src: require('../assets/just_bold.jpg'),
            label: "ClinCords' Just Bold"
          },
         {
           src: 'https://imagizer.imageshack.com/img924/5020/2lPAuJ.jpg',
           label: 'My Image Shack photo 1'
          },
          {
            src: 'https://imagizer.imageshack.com/img924/9492/J2P1bT.png',
            label: 'My Image Shack photo 2'
          },
          {
            src: 'https://imagizer.imageshack.com/img923/3411/kg1lfd.png',
            label: 'My Image Shack photo 3'
         }
        ],
        quotes: [
          {title: 'health is wealth', content: 'health is wealth as well as wealth is life'},
          {title: 'love is life', content: 'health is wealth as well as wealth is life'},
          {title: 'joy is real', content: 'health is wealth as well as wealth is life'},
          {title: 'love is real', content: 'health is wealth as well as wealth is life'},
          {title: 'learn to live', content: 'health is wealth as well as wealth is life'}
        ]
    })
  }
</script>

<style>

</style>
