import React from 'react';

const NavSearch = () => {
  return (
    <form className="form-inline ml-3">
      <div className="input-group input-group-sm">
        <input className="form-control form-control-navbar bg-white" type="search" placeholder="Search" aria-label="Search"/>
        <div className="input-group-append">
          <button className="btn btn-navbar bg-white" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>
  );
}

export default NavSearch;
