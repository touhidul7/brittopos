import LoginModal from "../AllModals/LoginModal";
import ProductListModal from "../AllModals/ProductListModal";
import ModalForm from "./ModalForm";

// eslint-disable-next-line react/prop-types
const ProductHeader = ({ setSearch, search }) => {
   // Debounce function to delay search execution
   const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
};

// Debounced function to handle search logic
const debouncedHandleSearch = debounce((value) => {
    setSearch(value);
    // Here you can load your data or perform any search-related tasks
    console.log("Search value:", value);
    // Example: loadData(value);
}, 2000); // Adjust the delay time as needed

    return (
        <div className="pHeader-container">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <input onChange={(e) => debouncedHandleSearch(e.target.value)} type="text" placeholder="Scan Bar Code" className="input input-bordered w-full max-w-xs input-accent" value={search} />
                </div>
                <div className="navbar-end">
                    <a className="btn homeButton">
                        <span className="material-symbols-outlined">
                            home
                        </span>
                    </a>
                    <button onClick={() => document.getElementById('product_list').showModal()} className="btn listButton ml-3">
                        <span className="material-symbols-outlined">
                            format_list_bulleted
                        </span>
                    </button>
                    <button onClick={() => document.getElementById('product-show').showModal()} className="btn addButton ml-3">
                        <span className="material-symbols-outlined">
                            add
                        </span>
                    </button>

                    <button className="btn userButton ml-3" onClick={() => document.getElementById('login-modal').showModal()}>
                        <span className="material-symbols-outlined">
                            group
                        </span>
                    </button>
                </div>
            </div>
            {/* Modal Show for product Here*/}
            <dialog id="product-show" className="modal">
                <div className="modal-box">
                    <ModalForm />
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>
            </dialog>

            {/* Modal Show for product list Here*/}
            <dialog id="product_list" className="modal">
                <div className="modal-box">
                    <ProductListModal />
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>
            </dialog>
            {/* Modal for login admin */}
            <dialog id="login-modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <LoginModal />
                </div>
            </dialog>
        </div>
    );
};

export default ProductHeader;