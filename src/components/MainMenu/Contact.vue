<template>
	<v-container align-content-start fluid grid-list-xl justify-space-around>
		<v-card flat
			class="mx-auto hide-overflow"
			style="max-width: 100%;"
		>
			<v-layout>
				<v-flex xs6 d-flex>
					<v-img
						src="https://cdn.vuetifyjs.com/images/ratings/fortnite1.png"
					></v-img>
				</v-flex>
				<v-flex xs6 class=" layout-xs-only">
					<v-container
						grid-list-md
						pa-0
						pl-2
						style="margin: -4px 0"
					>
						<v-layout wrap>
							<v-flex xs4 d-flex>
								<v-img
									src="https://cdn.vuetifyjs.com/images/ratings/fortnite2.png"
								></v-img>
							</v-flex>
							<v-flex xs4 d-flex>
								<v-img
									src="https://cdn.vuetifyjs.com/images/ratings/fortnite3.png"
								></v-img>
							</v-flex>
							<v-flex xs4 d-flex>
								<v-img
									src="https://cdn.vuetifyjs.com/images/ratings/fortnite4.png"
								></v-img>
							</v-flex>
							<v-flex xs12 d-flex>
								<v-img
									src="https://cdn.vuetifyjs.com/images/ratings/fortnite5.png"
								></v-img>
							</v-flex>
						</v-layout>
					</v-container>
				</v-flex>
			</v-layout>
			<v-card-title class="align-start">
				<div>
					<span class="headline">FORTNITE</span>
					<div class="grey--text font-weight-light">Video game</div>
				</div>
				<v-spacer></v-spacer>
				<v-dialog
					v-model="dialog"
					width="400"
				>
					<template v-slot:activator="{ on }">
						<v-icon v-on="on">
							mdi-share-variant
						</v-icon>
					</template>
					<v-card>
						<v-card-title>
							<span class="title font-weight-bold">Share</span>
							<v-spacer></v-spacer>
							<v-btn
								class="mx-0"
								icon
								@click="dialog = false"
							>
								<v-icon>mdi-close-circle-outline</v-icon>
							</v-btn>
						</v-card-title>
						<v-list>
							<v-list-tile @click=" on">
								<v-list-tile-action>
									<v-icon color="indigo">mdi-facebook-box</v-icon>
								</v-list-tile-action>
								<v-card-title>Facebook</v-card-title>
							</v-list-tile>
							<v-list-tile @click="on">
								<v-list-tile-action>
									<v-icon color="cyan">mdi-twitter-box</v-icon>
								</v-list-tile-action>
								<v-card-title>Twitter</v-card-title>
							</v-list-tile>
							<v-list-tile @click="on">
								<v-list-tile-action>
									<v-icon>mdi-email</v-icon>
								</v-list-tile-action>
								<v-card-title>Email</v-card-title>
							</v-list-tile>
						</v-list>
						<v-text-field
							ref="link"
							:label="copied ? 'Link copied' : 'Click to copy link'"
							class="pa-3"
							readonly
							value="https://g.co/kgs/nkrK43"
							@click="copy"
						></v-text-field>
					</v-card>
				</v-dialog>
			</v-card-title>
			<v-divider></v-divider>
			<v-card-actions>
				<span class="pl-2 grey--text text--darken-2 font-weight-light caption">16,544 reviews</span>
				<v-spacer></v-spacer>
				<v-rating
					v-model="rating"
					length="10"
					readonly
				>
					<template v-slot:item="props">
						<v-icon
							:color="props.isFilled ? 'purple darken-4' : ''"
							v-text="`mdi-numeric-${props.index}-box`"
						></v-icon>
					</template>
				</v-rating>
			</v-card-actions>
			<div class="pa-3 pt-0 caption">
				<em>Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights reserved by Epic. This material is not official and is not endorsed by Epic.</em>
			</div>
		</v-card>


			<v-layout class="allign-center">
					<v-flex tag="h1" class="headline" >
									{{title}}
					</v-flex>
			</v-layout>
			<v-layout >
					<v-flex v-for="(contact, i) in contacts"
							:key="i" @click="contact.show=!contact.show">
							<v-flex>
									<v-card color="primary" fixed hover>
											<v-card-text>
													<h1> {{contact.name}}</h1>
											</v-card-text>
									</v-card>
							</v-flex>
					<v-spacer></v-spacer>
							<v-flex v-show="contact.show">
									<v-card>
											<v-card-text >
													<em> Phone Number: {{contact.phone}}</em>
													<address> Location: {{contact.address}}</address>
													
											</v-card-text>
									</v-card>
							</v-flex>
					</v-flex>
			</v-layout>
			<v-layout>
					<v-form name="contact" method="POST" data-netlify="true">
						<p>
							<label>Your Name: <input type="text" name="name" /></label>   
						</p>
						<p>
							<label>Your Email: <input type="email" name="email" /></label>
						</p>
						<p>
							<label>Your Role: <select name="role[]" multiple>
								<option value="leader">Leader</option>
								<option value="follower">Follower</option>
							</select></label>
						</p>
						<p>
								<label>Message: <textarea name="message"></textarea></label>
						</p>
						<p>
								<button type="submit">Send</button>
						</p>
						</v-form>
			</v-layout>
	</v-container>
</template>
<script>
export default {
    data(){
        return{
            title: 'This is my contact page',
            contacts: [
                {name: 'Justin', address: 'New Haven, Enugu', phone:'09076984772', show:false},
                {name: 'PJ Adoga', address: 'New Haven-Extension, Enugu', phone:'08176353735', show:false},
                {name: 'Godwin', address: 'Abakaliki road, Enugu', phone:'09076984662', show:false},
                {name: 'Vwarhe', address: 'Ogui Road, Enugu', phone:'09076984772', show:false}
						],
						copied: false,
      			dialog: false,
      			rating: 10
        }
    },
    methods:{
			copy () {
        const markup = this.$refs.link
        markup.focus()
        document.execCommand('selectAll', false, null)
        this.copied = document.execCommand('copy')
      }

    },
    computed:{

    }
}
</script>
<style scoped>

</style>


