
const MainDash = () => {
    return (
        <div>
            <section>
                <h3 className="section-head">Overview</h3>
                <div className="analytics">
                    <div className="analytic">
                        <div className="analytic-icon"><span className="material-symbols-outlined">
                            visibility
                        </span></div>
                        <div className="analytic-info">
                            <h4>Total views</h4>
                            <h1>10.3M</h1>
                        </div>
                    </div>
                    <div className="analytic">
                        <div className="analytic-icon"><span className="material-symbols-outlined">
                            eyeglasses
                        </span></div>
                        <div className="analytic-info">
                            <h4>Watch time (hrs)</h4>
                            <h1>20.9k <small className="text-danger">5%</small></h1>
                        </div>
                    </div>
                    <div className="analytic">
                        <div className="analytic-icon"><span className="material-symbols-outlined">
                            unsubscribe
                        </span></div>
                        <div className="analytic-info">
                            <h4>Subscribers</h4>
                            <h1>1.3k <small className="text-success">12%</small></h1>
                        </div>
                    </div>
                    <div className="analytic">
                        <div className="analytic-icon"><span className="material-symbols-outlined">
                            favorite
                        </span></div>
                        <div className="analytic-info">
                            <h4>Total likes</h4>
                            <h1>3.4M </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="block-grid">
                    <div className="revenue-card">
                        <h3 className="section-head">Total Revenue</h3>
                        <div className="rev-content">
                            <img src="https://t4.ftcdn.net/jpg/06/24/89/75/360_F_624897595_ofLf2oLGj0HncCIx6w5n3gvaU6XiM46D.jpg" alt="profile" />
                            <div className="rev-info">
                                <h3>Mohsen Alizade</h3>
                                <h1>3.5M <small>Subscribers</small></h1>
                            </div>
                            <div className="rev-sum">
                                <h4>Total income</h4>
                                <h2>$70.859</h2>
                            </div>
                        </div>
                    </div>
                    <div className="graph-card">
                        <h3 className="section-head">Graph</h3>
                        <div className="graph-content">
                            <div className="graph-head">
                                <div className="icon-wrapper">
                                    <div className="icon"><span className="las la-eye text-main"></span></div>
                                    <div className="icon"><span className="las la-clock text-success"></span></div>
                                </div>
                                <div className="graph-select">
                                    <select name="" id="">
                                        <option value="">Septamber</option>
                                    </select>
                                </div>
                            </div>
                            <div className="graph-board">
                                <canvas id="revenueChart" width="100%"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainDash;