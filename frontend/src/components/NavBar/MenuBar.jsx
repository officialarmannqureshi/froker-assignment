import React from "react";

const MenuBar = (props) => {
  return (
    <div>
      {/* <div className="menu-bar">
            <div className={`menu-bar-item`} style={{fontSize:props.fontSize,color:props.fontColor}}>Home</div>
            <div className="menu-bar-item" style={{fontSize:props.fontSize,color:props.fontColor}}>Blogs</div>
            <div className="menu-bar-item" style={{fontSize:props.fontSize,color:props.fontColor}}>Discover Froker</div>
            
        </div> */}
      <ul class="nav-menu active">
        <li class="nav-item">
          <a class="nav-links" href="/">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-links" href="/blogs">
            Blogs
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-links" href="/froker">
            Discover Froker
          </a>
        </li>
      </ul>

      <div className="nav-icon">
        <img
          src="/static/media/close-fill.ea3237b2568b88a87d874240cbf3ddf5.svg"
          alt="close"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default MenuBar;
