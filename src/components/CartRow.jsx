
export const CartRow = () => {

    return (
        <>
            <tr className="table-group-divider">
                <td>nombre del producto</td>
                <td>$45000</td>
                <td>2</td>
                <td>$90000</td>
                <td>
                    <button type="button" className="btn btn-danger btn-sm d-flex alig-items-center justify-content-center">
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </td>
            </tr>
        </>
    );
}