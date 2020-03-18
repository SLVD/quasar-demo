
const routes = [
	{
		path: '/',
		name: 'index',
		component: () => import('layouts/IndexLayout.vue'),
		children: [
			{ path: '', component: () => import('pages/index/index.vue') },
		]
	},
	{
		path: '/',
		name: 'Index2',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{ path: 'Index2', component: () => import('pages/Index2.vue') }
		]
	}
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
	routes.push({
		path: '*',
		component: () => import('pages/Error404.vue')
	})
}

export default routes
