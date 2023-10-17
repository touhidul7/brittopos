import { useNavigate } from "react-router-dom";

const DashHeader = () => {
    const navigate = useNavigate();
    const posHandler = () => {
        navigate('/')
    }
    return (
        <div>
            <header>
                <div className="header-wrapper">
                    <label htmlFor="menu-toggle">
                        <span className="las la-bars"></span>
                    </label>
                    <div className="header-title">
                        <h1>Analytics</h1>
                        <p>Display analytics about your Store <span className="las la-chart-line"></span></p>
                    </div>
                </div>
                <div className="header-action">
                    <button onClick={posHandler} className="btn btn-main userButton">
                        <span className="material-symbols-outlined">
                            cottage
                        </span>
                        POS
                    </button>
                </div>
            </header>
        </div>
    );
};

export default DashHeader;