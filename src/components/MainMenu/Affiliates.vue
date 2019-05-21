<template>
	<div class=" pb-1">
  <v-layout pb-4 >
			<v-card flat min-width = "100%" class=" title header text--primary transparent">
				<!-- <v-responsive :aspect-ratio= "16/0.2" grow> -->
				<v-card-title class=" v-responsive justify-center fill-height display-1">
					Click on the name of organisations to view details about each of our Associates/ Affiliates
				</v-card-title>
				<!-- </v-responsive> -->
				<v-divider solid></v-divider>
			</v-card>
			</v-layout>
    <v-layout >
      <v-flex xs12 lg6 mb-1>
				<div class=" title justify-center py-4 elevation-1 ma-auto">
					Our Medical/medical related Associates and Affiliates
				</div>
        <v-expansion-panel popout class=" blue-grey lighten-1 ">
          <v-expansion-panel-content
            v-for = "affiliate in affiliates.filter(item => item.popout)"
            :key = "affiliate.icon"
						class=" blue-grey lighten-5"
          >
            <template v-slot:header >
              <div><v-icon color=" blue">{{affiliate.icon}}</v-icon>{{affiliate.title}} </div>
            </template>
            <v-card 
								class = "mx-auto"
								max-width="100%">
							<v-img :src = "affiliate.img" :height = "60">
								<v-layout
									align-end
									fill-height
									pa-3
									white--text
								>
									<div class = "title font-weight-light">Explore our beaches</div>
								</v-layout>
							</v-img>
              <v-card-text>{{affiliate.content}}</v-card-text>
							<v-divider class= "blue"></v-divider>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn
									color = "primary"
									dark
									depressed
									:to = "affiliate.url"
								>
									Explore
								</v-btn>
							</v-card-actions>
						</v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>

      <v-flex xs12 lg6 offset-lg1>
				<div class=" title justify-center py-4 elevation-1 ma-auto">
					Our Technological Associates and Affiliates
				</div>
        <v-expansion-panel inset class = "blue-grey lighten-1 ">
          <v-expansion-panel-content
            v-for = "affiliate in affiliates.filter(item => item.inset)"
            :key = "affiliate.icon"
						class = "blue-grey lighten-5"
          >
            <template v-slot:header>
              <div><v-icon color="blue">{{affiliate.icon}} </v-icon>{{affiliate.title}}</div>
            </template>
            <v-card>
							<v-img :src = "affiliate.img" :height= "60">
								<v-layout
									align-end
									fill-height
									pa-3
									white--text
								>
									<div class="title font-weight-light">Explore our beaches</div>
								</v-layout>
							</v-img>
              <v-card-text>{{affiliate.content}} </v-card-text>
							<v-divider class=" blue"></v-divider>
							<v-card-actions>
							<v-spacer></v-spacer>
								<v-btn
									color="primary"
									dark
									depressed
									:to="affiliate.url"
								>
									Explore
								</v-btn>
							</v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
	name: 'affiliates',
	data: () => ({
		affiliates: [
			{
				title: 'Nigeria Medical Association of Nigeria', 
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
				 				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				icon: 'check_circle',
				url: '#',
				img: 'https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg',
				popout: true
			},
			{
				title: 'Nigeria Association of Pharmacist', 
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
				 				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				icon: 'check_circle',
				url: '#',
				img: 'https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg',
				popout: true
			},
			{
				title: 'Medical Laboratory Scientists of Nigeria', 
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
				 				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				icon: 'check_circle',
				url: '#',
				img: 'https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg',
				popout: true
			},
			{
				title: 'Midwifery Association of Nigeria', 
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
				 				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				icon: 'check_circle',
				url: '#',
				img: 'https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg',
				popout: true
			},
			{
				title: 'Association of Nigerian Medical Practictionals', 
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
				 				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				icon: 'check_circle',
				url: '#',
				img: 'https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg',
				popout: true
			},
			{
				title: 'National Drug Law Enforcement Agency', 
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
				 				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				icon: 'check_circle',
				url: '#',
				img: 'https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg',
				popout: true
			},
			{
				title: 'Association of Nigerian Nutritionists', 
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
				 				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				icon: 'check_circle',
				url: '#',
				img: 'https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg',
				popout: true
			},
			{
				title: 'Nigeria Electricity Regulation Commission', 
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
				 				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				icon: 'check_circle',
				url: '#',
				img: 'https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg',
				inset: true
			},
			{
				title: 'Association of Nigerian Engineers', 
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
				 				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				icon: 'check_circle',
				url: '#',
				img: 'https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg',
				inset: true
			},
			{
				title: 'Nigeria Society of Engineers', 
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
				 				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				icon: 'check_circle',
				url: '#',
				img: 'https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg',
				inset: true
			},
			{
				title: 'National Institute for Technology Development', 
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
				 				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				icon: 'check_circle',
				url: '#',
				img: 'https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg',
				inset: true
			},
			{
				title: 'Junik Global Technologies', 
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
				 				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				icon: 'check_circle',
				url: '#',
				img: 'https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg',
				inset: true
			},
			{
				title: 'Nigeria Communications Satellite', 
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
				 				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				icon: 'check_circle',
				url: '#',
				img: 'https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg',
				inset: true
			},
			{
				title: 'Nigeria Communications Commission', 
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
				 				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				icon: 'check_circle',
				url: '#',
				img: 'https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg',
				inset: true
			},
		]
	})
}
</script>
