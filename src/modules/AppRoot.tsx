import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

import { store, history } from './state-mgmt/store';

const engine = new Styletron();

const Login = lazy(() => import('./views/login/Login'));
const TodoList = lazy(() => import('./views/TodoList'));

export default class App extends React.Component {
  public render() {
    return (
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <Switch>
                <Route
                  exact={true}
                  path="/"
                  render={() => (
                    <Suspense fallback={<p>loading</p>}>
                      <Login login={(username, password) => undefined} />
                    </Suspense>
                  )}
                />
                <Route
                  exact={true}
                  path="/todo-list"
                  render={() => (
                    <Suspense fallback={<p>loading</p>}>
                      <TodoList />
                    </Suspense>
                  )}
                />
              </Switch>
            </ConnectedRouter>
          </Provider>
        </BaseProvider>
      </StyletronProvider>
    );
  }
}
