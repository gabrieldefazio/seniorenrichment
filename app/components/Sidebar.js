import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    <sidebar>
      <h3>CAMPI MAN</h3>
      <img src="http://www.huawei.com/minisite/gci/images/benefits-04.png" className="logo" />
      <section>
        <h4 className="menu-item">
          <Link to="/campi">CAMPI</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to="/students">STUDENTS</Link>
        </h4>
      </section>
      <section>
        <h4>
          <Link className="btn btn-primary btn-block" to="/new-campus">add campus</Link>
        </h4>
      </section>
      <section>
        <h4>
          <Link className="btn btn-primary btn-block" to="/new-student">add student</Link>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
