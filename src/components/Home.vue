<template>
    <v-container fluid>
      <v-layout
        text-xs-center
        wrap
      >
        <v-breadcrumbs>
          <v-breadcrumbs-item>

          </v-breadcrumbs-item>
        </v-breadcrumbs>

        <!-- <v-slider
          v-model="slider"
          :min="18"
          :max="120"
          label="Age"
          thumb-label
        >
          <v-tabs-slider >
            <v-slide-x-transition></v-slide-x-transition>

            <v-slide-x-reverse-transition></v-slide-x-reverse-transition>
          </v-tabs-slider>
        </v-slider>
        <span class=" blue--text">{{slider}}</span> -->

        <v-carousel
        delimiter-icon="stop"
        height="450"
        interval="3000"
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src">
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
        <v-flex xs12>
          <v-img
            :src="require('../assets/ccwithbg.png')"
            class="my-3"
            contain
            height="200"
          ></v-img>
        </v-flex>
        <v-flex mb-4 xs12>
          <v-card dark color="blue-grey" hover>
            <v-responsive :aspect-ratio = "16/1">
              <v-card-text class="display-2 font-weight-bold mb-4" >
                Welcome to {{myApp}}
              </v-card-text>
            </v-responsive>
          </v-card>
          <p class="subheading font-weight-regular">
            For help and collaboration with other Vuetify developers,
            <br>please join our online platform 
          </p>
        </v-flex>

        <v-flex
          mb-8
          xs12
        >
        <v-card dark color=" blue-grey" class=" keyline-all" hover>
          <v-card-text class= "headline font-weight-bold mb-3">My Activities</v-card-text>
        </v-card>
          <v-layout justify-center class=" wrap lime--text">
            <v-card-text
              v-for="(post, i) in hposts"
              :key="i"
              :to="post.href"
              class="subheading mx-1"
              target="_blank"
            >
              {{ post.title }}
            </v-card-text>
           
          </v-layout>
        </v-flex>

      <!-- <v-layout > -->
        <v-flex
          class=" pr-1"
        >
        <v-card dark color="blue-grey"  hover>
          <v-card-text class="headline font-weight-bold mb-3" >Important Links</v-card-text>
        </v-card>
          <!-- <v-layout justify-center> -->
            <v-card flat >
            <a
              v-for="(link, i) in importantLinks"
              :key="i"
              :href="link.href"
              class="subheading mx-1"
              target="_blank"
            >
              {{ link.text }}
            </a>
            </v-card>
          <!-- </v-layout> -->
        </v-flex>
          <!-- <v-spacer></v-spacer> -->
        <v-flex
          
        >
        <v-card dark color="blue-grey" hover >
          <v-card-text class="headline font-weight-bold mb-3">In this website! </v-card-text>
        </v-card>
          <!-- <v-layout justify-center> -->
             <v-card flat>
                <a
              v-for="(next, i) in whatsNext"
              :key="i"
              :href="next.href"
              class="subheading mx-3"
              target="_blank"
            >
              {{ next.text }}
            </a>
             </v-card>
          <!-- </v-layout> -->
        </v-flex>
        <!-- </v-layout> -->
      </v-layout>
    </v-container>
</template>

<script>

  export default {
    name: 'home',
    data: () => ({
      myApp: 'ClinCords',
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
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer'
        },
        {
          text: 'Select a layout',
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
        ]
    })
  }
</script>

<style>

</style>
