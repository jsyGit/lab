/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import s from './styles.css';
import { title, html } from './index.md';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={s.playground}>
          <h2>React playground</h2>
          <ul>
            <li>
              <Link to="/css-transition">React css transition</Link>
            </li>
            <li>
              <Link to="/dnd">drag and drop</Link>
            </li>
          </ul>
        </div>
      </Layout>
    );
  }

}

export default HomePage;
