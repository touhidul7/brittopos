
const ModalForm = () => {
    return (
        <div className="modal-container">
            <form>
                <input type="text" placeholder="Product Name" className="input input-bordered input-secondary w-full max-w-xs" /><br /><br />
                <input type="number" placeholder="Product Price" className="input input-bordered input-secondary w-full max-w-xs" /><br /><br />
                <select className="select select-secondary w-full max-w-xs">
                    <option disabled selected>Product Category</option>
                    <option>Java</option>
                    <option>Go</option>
                    <option>C</option>
                    <option>C#</option>
                    <option>C++</option>
                    <option>Rust</option>
                    <option>JavaScript</option>
                    <option>Python</option>
                </select><br /><br />
                <input type="number" placeholder="In Stock" className="input input-bordered input-secondary w-full max-w-xs" /><br /><br />
                <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" /><br /><br />
                <button className="btn btn-primary">Add Product</button>

            </form>

        </div>
    );
};

export default ModalForm;