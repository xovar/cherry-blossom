import React from 'react';

function Add() {
  return (
    <>
      <div className='container mt-2'>
      <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"><h4>Name</h4></label>
                <input type="text" className="form-control" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"><h4>Dress Code</h4></label>
                <input type="text" className="form-control" aria-describedby="emailHelp"/>
            </div>
            <div>
                <label htmlFor="exampleInputEmail1" className="form-label"><h4>Dress quantity</h4></label>
                <div className='row'>
                    <div className='col-4'>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">36</span>
                            <input type="number" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">40</span>
                            <input type="number" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">44</span>
                            <input type="number" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="exampleInputEmail1" className="form-label"><h4>Per dress price</h4></label>
                    <input type="number" className="form-control col-3" aria-describedby="emailHelp"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Add;
