<template>
	<v-container 
		align-content-start 
		fluid 
		grid-list-xl
		xs12
		shrink
	>
		<v-layout text-xs-center  pa-0>
			<v-flex tag = "h1" class = " headline " fluid>
				<v-card 
					color="transparent"
					flat
					xs12
					class=" text--darken-4 L9 display-2 "
				>
					{{title}}
				</v-card> 
				<div class=" py-2 text--disabled">
					Below is a compiled list of some of the questions frequently asked by our clients and visitors to the site,
					browse through or use the contact form if your question is not answered on this page.
				</div>
				<p class="red">Hints: click on the questions to toggle between show and hide answers</p>
			</v-flex>
		</v-layout>
		 <v-expansion-panel focusable>
			<v-expansion-panel-content
				v-for="(faq, i) in faqs"
				:key="i"
			>
				<template v-slot:header >
					<div class=" teal--text  headline justify-center" >{{faq.q}}</div>
				</template>
				<v-divider></v-divider>
				<v-card>
					<v-card-text class="blue lighten-5 elevation-1">{{faq.a}}</v-card-text>
				</v-card>
			</v-expansion-panel-content>
		</v-expansion-panel>

			<!-- <v-flex
			fluid
			text-xs-center
			
				v-for="(faq, i) in faqs"
							:key="i" @click="faq.show=!faq.show"
							>
							<v-layout xs12>
							<v-flex xs12>
									<v-card dark 
									color="transparent"
									hover>
											<v-card-text class=" teal--text">
													<h3>  {{faq.q}} >></h3>
											</v-card-text>
									</v-card>
							</v-flex>
							</v-layout>
					<v-spacer></v-spacer>
					<v-layout xs12>
							<v-flex v-show="faq.show" class=" lisp elevation-0 ">
									<v-card flat>
											<v-card-text >
													{{faq.a}}
											</v-card-text>
									</v-card>
							</v-flex>
					</v-layout>
			</v-flex> -->
	</v-container>
</template>
<script>
export default {
    name: ' FAQ',
    data(){
        return{
            title: 'Frequently Asked Questions',
            faqs:[
                {q:'1. What is ClinCords?', 
                a:"ClinCords is the front and back formation of 'Clinic Records'",
                show:false},
                {q:'2. What is ClinCords all about?', 
                a:"ClinCords is all about keeping records of all the patients in a single database which can be accessed by hospitals across the world on proper authentication and access grants by the transfering hospital",
                show:false},
                {q:'3. Why do i need ClinCords?', 
                a:"You need to use ClinCords because of the Ease at which medical services or patients can be transfered from one registered and verified hospital to another",
                show:false},
                {q:'4. Why do i need ClinCords?', 
                a:"You need to use ClinCords because of the Ease at which medical services or patients can be transfered from one registered and verified hospital to another",
                show:false},
                {q:'5. Why do i need ClinCords?', 
                a:"You need to use ClinCords because of the Ease at which medical services or patients can be transfered from one registered and verified hospital to another",
                show:false},
                {q:'6. why do i need ClinCords?', 
                a:"You need to use ClinCords because of the Ease at which medical services or patients can be transfered from one registered and verified hospital to another",
                show:false},
                {q:'7. why do i need ClinCords?', 
                a:"You need to use ClinCords because of the Ease at which medical services or patients can be transfered from one registered and verified hospital to another",
                show:false},
                {q:'8. why do i need ClinCords?', 
                a:"You need to use ClinCords because of the Ease at which medical services or patients can be transfered from one registered and verified hospital to another",
                show:false},
                {q:'9. why do i need ClinCords?', 
                a:"You need to use ClinCords because of the Ease at which medical services or patients can be transfered from one registered and verified hospital to another",
                show:false},
                {q:'10. why do i need ClinCords?', 
                a:"You need to use ClinCords because of the Ease at which medical services or patients can be transfered from one registered and verified hospital to another",
                show:false}
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

</style>


