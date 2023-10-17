/* eslint-disable react/prop-types */

const Invoice = ({ show, setShow }) => {

    const closePop = () => {
        setShow(false);
    }

    const handlePrint = () => {
        window.print();
    }
    return (
        <div>
            {
                show ? <div className="ruddromodal" id="ruddropopup">
                    <div className="ruddromodal-content" id="contentToPrint">
                        <span onClick={closePop} className="ruddroclose" id="ruddrocloseModal">&times;</span>
                        <h2>Popup Content</h2>
                        <p>This is a basic pop-up created with HTML and CSS.</p>

                    </div>
                    <button onClick={handlePrint} className="btn btn-success">Print</button>
                </div> : ''
            }
        </div>
    );
};

export default Invoice;