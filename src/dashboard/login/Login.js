import React from 'react';
import { Link } from 'react-router-dom';
const myStyle = {
  marginTop:'150px',
  padding:'30px 50px',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
}


function Login() {
  return (
    <>
      <div className="container" style={myStyle}>
        <form>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">User Name</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3"/>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3"/>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
            </div>
          </div>
          <Link to='/pro/admin/dashboard'><button type="submit" className="btn btn-primary"> Sign in</button></Link>
        </form>
      </div>
    </>
  );
}

export default Login;
