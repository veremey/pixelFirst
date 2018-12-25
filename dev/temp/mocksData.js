'head': {
    defaults: {
        title: 'pixel force',
        useSocialMetaTags: false
    }
},

'header': {
	contact: {
		item: [
			{link: 'about'},
			{link: 'games'},
			{link: 'career'},
			{link: 'contacts', active: 'is-active'}
		]
	},
	career: {
		item: [
			{link: 'about'},
			{link: 'games'},
			{link: 'career', active: 'is-active'},
			{link: 'contacts'}
		]
	},
	about: {
		item: [
			{link: 'about', active: 'is-active'},
			{link: 'games'},
			{link: 'career'},
			{link: 'contacts'}
		]
	},
	main: {
		item: [
			{link: 'about'},
			{link: 'games'},
			{link: 'career'},
			{link: 'contacts'}
		]
	},
	games: {
		item: [
			{link: 'about'},
			{link: 'games', active: 'is-active'},
			{link: 'career'},
			{link: 'contacts'}
		]
	}
},

'square': {},

__pages: [{
                name: 'about',
                href: 'about.html'
             },{
                name: 'career',
                href: 'career.html'
             },{
                name: 'contacts',
                href: 'contacts.html'
             },{
                name: 'games',
                href: 'games.html'
             },{
                name: 'index',
                href: 'index.html'
             }]