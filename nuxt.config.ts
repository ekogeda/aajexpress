export default defineNuxtConfig({
	app: {
		pageTransition: {
			name: 'fade',
			mode: 'out-in', // default
		},
		layoutTransition: {
			name: 'slide',
			mode: 'out-in', // default
		},
		head: {
			titleTemplate: '%s - aaj',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: '' },
				{ name: 'format-detection', content: 'telephone=no' },
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap',
				},
			],
		},
	},
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

