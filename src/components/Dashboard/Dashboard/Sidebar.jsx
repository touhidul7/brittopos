import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
                <div className="sidebar-container">
                    <div className="brand">
                        <h3>
                            <span className="lab la-staylinked"></span>
                            POS
                        </h3>
                    </div>
                    <div className="sidebar-avatar">
                        <div>
                            <img src="https://t4.ftcdn.net/jpg/06/24/89/75/360_F_624897595_ofLf2oLGj0HncCIx6w5n3gvaU6XiM46D.jpg" alt="avatar" />
                        </div>
                        <div className="avatar-info">
                            <div className="avatar-text">
                                <h4>Ruddro</h4>
                                <small>18-10-2023</small>
                            </div>
                            <span className="las la-angle-double-down"></span>
                        </div>
                    </div>
                    <div className="sidebar-menu">
                        <ul>
                            <li>
                                <NavLink to="/dashboard" ><span className="material-symbols-outlined">
                                    dashboard
                                </span><span className="dashh-text">Dashboard</span></NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/category" className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }>
                                    <span className="material-symbols-outlined">
                                        add_circle
                                    </span>
                                    <span className="dashh-text">Add Cateogory</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/order" className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }>
                                    <span className="material-symbols-outlined">
                                        shopping_cart
                                    </span>
                                    <span className="dashh-text">Order Details</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/analytics" className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }>
                                    <span className="material-symbols-outlined">
                                        inventory
                                    </span>
                                    <span className="dashh-text">Analytics</span>
                                </NavLink>
                            </li>
                            {/*  <li>
                                <NavLink to="/dashboard/products" className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }>
                                    <span className="material-symbols-outlined">
                                        monitoring
                                    </span>
                                    <span className="dashh-text">Products</span>
                                </NavLink>
                            </li> */}

                        </ul>
                    </div>
                    <div className="sidebar-card">
                        <div className="side-card-icon">
                            <span className="lab la-codiepie"></span>
                        </div>
                        <div>
                            <h4>Make AdSense</h4>
                            <p>add ads to your videos to earn money</p>
                        </div>
                        <button className="btn btn-main btn-block">Create now</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Sidebar;