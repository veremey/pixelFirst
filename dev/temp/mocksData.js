'head': {
    defaults: {
        title: 'pixel force',
        useSocialMetaTags: false
    }
},

'header': {
	contact: {
		item: [
			{link: 'About'},
			{link: 'Games'},
			{link: 'Career'},
			{link: 'Contacts', active: 'is-active'}
		]
	},
	career: {
		item: [
			{link: 'About'},
			{link: 'Games'},
			{link: 'Career', active: 'is-active'},
			{link: 'Contacts'}
		]
	},
	about: {
		item: [
			{link: 'About', active: 'is-active'},
			{link: 'Games'},
			{link: 'Career'},
			{link: 'Contacts'}
		]
	},
	main: {
		item: [
			{link: 'About'},
			{link: 'Games'},
			{link: 'Career'},
			{link: 'Contacts'}
		]
	},
	games: {
		item: [
			{link: 'About'},
			{link: 'Games', active: 'is-active'},
			{link: 'Career'},
			{link: 'Contacts'}
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