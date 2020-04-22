import '../style/root.scss';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Store } from 'redux';

interface RootProps {
  store: Store;
}

export const Root: React.FC<RootProps> = (props) => {
  return (
    <Provider store={props.store}>
      <Router>
        <div className="root">
          <h1>Works</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
              </li>
            </ul>
          </nav>
        </div>
      </Router>
    </Provider>
  );
}
