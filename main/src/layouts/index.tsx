import React from 'react';
import { Link } from 'umi';

export default ({ children, ...props }) => {
  console.log(props);
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
        </ul>
      </aside>
      {children}
      <div id="root-subapp-container"></div>
    </div>
  );
};
