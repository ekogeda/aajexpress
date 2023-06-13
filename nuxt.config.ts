export default defineNuxtConfig({
	alias: {
		assets: '/<rootDir>/assets',
	},
	css: [
		'~/assets/main.scss',
		'vuetify/lib/styles/main.sass',
		'@mdi/font/css/materialdesignicons.min.css',
		'vue-toast-notification/dist/theme-default.css',
	],
	build: {
		transpile: ['vuetify'],
	},
	modules: ['@vee-validate/nuxt'],
	veeValidate: {
		// disable or enable auto imports
		autoImports: true,
		// Use different names for components
		componentNames: {
			Form: 'VeeForm',
			Field: 'VeeField',
			FieldArray: 'VeeFieldArray',
			ErrorMessage: 'VeeErrorMessage',
		},
	},
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
	},
});

