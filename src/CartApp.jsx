import { Provider } from "react-redux"
import { ShopAppRoutes } from "./ShopAppRoutes"
import { strore } from "./store/store"


export const CartApp = () => {

    return (
        <Provider
            store={strore}>
            <ShopAppRoutes />
        </Provider>
    )
}