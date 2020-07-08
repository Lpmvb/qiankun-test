import React from 'react';
import { Link } from 'umi';

export default ({ children, ...props }) => {
  return (
    <div>
      <aside>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/app1">App1</Link>
          </li>
          <li>
            <Link to="/app2/home">App2</Link>
          </li>
        </ul>
      </aside>
      {children}
    </div>
  );
};
