import { Home, Actors, Directors, Movie } from './pages';

const routes = [
  { path: '/', component: Home },
  { path: '/actors', component: Actors },
  { path: '/directors', component: Directors },
  { path: '/movie/:id', component: Movie },
];

export default routes;
