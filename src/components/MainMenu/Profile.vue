<template>
    <v-layout class=" column" contenteditable>
        <v-flex  class=" ">
            <v-layout class=" column " draggable>
                <v-card flat draggable>
                    <v-card-text>my right profile</v-card-text>
                </v-card>
            </v-layout>
            <v-layout class=" column elevation-20 shades pa-1">
                <v-card contenteditable draggable light color = " indigo">
                    <v-card-text>my center profile</v-card-text>
                </v-card>
            </v-layout>
            <v-layout class=" column">
                <v-card flat>
                    <v-card-text>my left profile</v-card-text>
                </v-card>
            </v-layout>
        </v-flex>
    </v-layout >
</template>
<script>
export default {
	data () {
		return {
			colorset: 'red',
			colorsets:[
				{color: 'red', value: 'red' },
				{color: 'blue', value: 'blue'},
				{color: 'green', value: 'green'},
				{color: 'yellow', value: 'yellow'},
				{color: 'orange', value: 'orange'},
				{color: 'purple', value: 'purple'},
			],
		}
	}
}
</script>
