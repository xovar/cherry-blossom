import React from 'react';
import { Link } from 'react-router-dom';
const myStyle = {
    margin:'20px 0 40px 0',
    padding:'10px 8px', 
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    borderRadius:'8px'
  }
function Admin() {
  return (
    <>
    {/* info card */}
      <div className='container'>
        <div className='row'>
            <div className='col-4'>
                <div className='bg-danger' style={myStyle}>
                    <h5>Order</h5>
                    <h1 style={{textAlign:'center',fontSize:'30px',color:'whitesmoke'}}>100</h1>
                </div>
            </div>
            <div className='col-4'>
                <div className='bg-success' style={myStyle}>
                    <h5>Revenew</h5>
                    <h1 style={{textAlign:'center',fontSize:'30px',color:'whitesmoke'}}>100</h1>
                </div>
            </div>
            <div className='col-4'>
                <div className='bg-warning' style={myStyle}>
                    <h5>Delivered</h5>
                    <h1 style={{textAlign:'center',fontSize:'30px',color:'whitesmoke'}}>100</h1>
                </div>
            </div>
        </div>
      </div>
      {/* search and add */}
      <div className='container-fluid mb-5'>
        <div className='row'>
            <div className='col-7'>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit"><i className="fa fa-search" /></button>
                </form>
            </div>
            <div className='col-2'>
            </div>
            <div className='col-3'>
                <Link to='/route/pro/admin/add'><button className="btn btn-outline-primary" type="submit">Add <i className="fa fa-plus" /></button></Link>
            </div>
        </div>
      </div>
    {/* table */}
      <div>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Order Details</th>
                <th scope="col">Delivered</th>
                <th scope="col">Not Delivered</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                        <div>
                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."/>
                        </div>
                    </td>
                    <td>
                        <div>
                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."/>
                        </div>
                    </td>
                    <td><button className="btn btn-outline-danger" type="submit">Delete <i className="fa fa-trash"/></button></td>
                </tr>
            </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin;
