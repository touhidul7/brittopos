import ModalForm from "./ModalForm";

const ProductHeader = () => {

    return (
        <div className="pHeader-container">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs input-accent" />
                </div>
                <div className="navbar-end">
                    <a className="btn homeButton">
                        <span className="material-symbols-outlined">
                            home
                        </span>
                    </a>
                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn addButton ml-3">
                        <span className="material-symbols-outlined">
                            add
                        </span>
                    </button>

                    <a className="btn userButton ml-3">
                        <span className="material-symbols-outlined">
                            group
                        </span>
                    </a>
                </div>
            </div>
            {/* Modal Show Here*/}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <ModalForm />
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default ProductHeader;