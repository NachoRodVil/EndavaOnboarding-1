import React from "react";



export default ({ handldeSubmit, handleChage, state }) => (

  <div className="card bg-light">
    <div className="card-body mx-auto" style={{ maxWidth: "400px" }}>
      <h4 className="card-title mt-3 text-center">Create Account</h4>
      <p className="text-center">Use your corporate email to SignUp</p>

      <form onSubmit={handldeSubmit} >

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
          </div>
          <input onChange={handleChage} name="name" value={state.name} className="form-control" placeholder="Name" type="text" />
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
          </div>
          <input name="" className="form-control" placeholder="Lastname" type="text" />
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
          </div>
          <input onChange={handleChage} name="" className="form-control" placeholder="Email address" type="email" />
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-building"></i> </span>
          </div>



          <select onChange={handleChage} className="form-control">
            <option selected=""> Select Discipline</option>
            <option>Development</option>
            <option>Project Manager</option>
            <option>Testing</option>
            <option>Pdrc</option>
          </select>
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
          </div>
          <input onChange={handleChage} className="form-control" placeholder="Create password" type="password" />
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
          </div>
          <input onChange={handleChage} className="form-control" placeholder="Repeat password" type="password" />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
        </div>

        <p className="text-center">Already have an account? <a href="">Log In</a> </p>

      </form>
    </div>
  </div>
);
