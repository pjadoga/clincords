<template>
	<v-container 
		align-content-start 
		fluid 
		grid-list-xl
		xs12
		shrink
	>
	 <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
	 height="auto">
	 <v-timeline align-top>
    <v-timeline-item
      v-for="about in abouts"
			:key="about.body"
      :color="about.color"
      :icon="about.icon"
      fill-dot
			large
    >
      <v-card
        :color="about.color"
        dark
      >
        <v-card-title class="title">{{about.name}}</v-card-title>
        <v-card-text class="white text--primary">
          <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
          <v-btn
            :color="about.color"
            class="mx-0"
            outline
          >
            View Detail
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
	</v-parallax>
  </v-container>
</template>
<script>
export default {
	data(){
		return{
			title: 'This is my About page',
			abouts:[
				{
					name:'Our Mission', 
					body:"The Mission of view-me App is to develop a standard application environment for all its members for the purpose of ease of carrying out specific  assignment. To be a member of this community, you must have a tested and proven knowledge of web application development or should be willing to learn within a short time frame if you dont have one.",
					show:false,
					color: 'red lighten-2',
          icon: 'nature_people'
				},
				{
					name:'Our Vision', 
					body:"The Vsion of view-me App is to develop a standard application environment for all its members for the purpose of ease of carrying out specific  assignment. To be a member of this community, you must have a tested and proven knowledge of web application development or should be willing to learn within a short time frame if you dont have one.",
					show:false,
					color: 'indigo',
          icon: 'wb_incandescent'
				},
				{
					name:'Our Core Values', 
					body:"The Core Values of view-me App is to develop a standard application environment for all its members for the purpose of ease of carrying out specific  assignment. To be a member of this community, you must have a tested and proven knowledge of web application development or should be willing to learn within a short time frame if you dont have one.",
					show:false,
					color: 'green lighten-1',
					icon: 'flag'
				},
				{
					name:'Our Competitive Edge', 
					body:"The Core Values of view-me App is to develop a standard application environment for all its members for the purpose of ease of carrying out specific  assignment. To be a member of this community, you must have a tested and proven knowledge of web application development or should be willing to learn within a short time frame if you dont have one.",
					show:false,
					color: 'deep-purple lighten-3',
					icon: 'score'
				},
				{
					name:'Professional Association', 
					body:"The Core Values of view-me App is to develop a standard application environment for all its members for the purpose of ease of carrying out specific  assignment. To be a member of this community, you must have a tested and proven knowledge of web application development or should be willing to learn within a short time frame if you dont have one.",
					show:false,
					color: 'orange lighten-1',
					icon: 'work'
				}
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
#bg{
	background-size: 100% 60%; background-attachment: fixed;
	background-color: #eebb99af; background-image: url(../../assets/ccwithbg.png);
	background-position: center;
}

</style>


