import NotFound from '../Components/NotFound';
import Home from '../Components/Home/Home';
import Login from '../Components/Auth/Login';
const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
	},
	{
		path: '/auth/login',
		exact: true,
		component: Login,
	},

	{
		component: NotFound,
	},
];

export default routes;
