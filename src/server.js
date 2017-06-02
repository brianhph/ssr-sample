import path from 'path';
import chalk from 'chalk';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { matchPath } from 'react-router-dom';

import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from './redux/store';
import { Provider } from 'react-redux';

import createMemoryHistory from 'history/createMemoryHistory';
import { routerMiddleware } from 'react-router-redux';
import routes from './routes';
import App from './container/App';
import renderHtmlPage from './helpers/renderHtmlPage';
import config from './config';

const app = express();
const port = config.port || 3000;

app.get('*', async (req, res) => {
  const history = createMemoryHistory();
  const store = configureStore(history);

  const context = {};
  const loadDataPromises = [];
  routes.some(route => {
    const match = matchPath(req.url, route);

    if (match && route.loadData) {
      loadDataPromises.push(route.loadData(store.dispatch, match));
    }

    return match;
  });

  try {
  console.log('start fetch')
    await Promise.all(loadDataPromises);

    const routerContext = {};
    const html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter 
          location={req.url}
          context={routerContext}
        >
          <App/>
        </StaticRouter>
      </Provider>
    );

    const resStatus = context.status? context.status : 200;
    res.status(resStatus).write(renderHtmlPage(html));
    res.end();
  } catch (e) {
    console.log('res error. handle 500');
    console.log(e);
  }
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }

  console.info(chalk.green('==> 🌎  Listening at http://localhost:' + port));
});
