import Root from './components/Root.jsx';
import Home from './container/Home.jsx';
import PageNotFound from './components/PageNotFound.jsx';

import { fetchHomeData } from './actions/test';

const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default [
  {
    path: '/',
    exact: true,
    key: 'root',
    component: Root,
    loadData: async (context) => {
      console.log('root');
    }
  },
  {
    path: '/home',
    key: 'home',
    component: Home,
    loadData: async (dispatch, match) => {
      await timeout(5000);
      dispatch(fetchHomeData('paramA'));
    }
  },
  {
    key: 'notFound',
    component: PageNotFound
  }
];


/*
import App from './container/App';

export default function createRoutes(store) {
  return {
    component: App,
    childRoutes: [
      {
        path: '/',
        getComponent(nextState, cb) {
          cb();
        }
      }
    ]
  };
}
*/

