import { loginService } from "./LoginService"
import { productService } from "./ProductService"
import { userInfoService } from "./UserInfoService"

export const serviceFactory = (apiClient) => {
    return {
        productService : productService(apiClient),
        loginService: loginService(apiClient),
        userInfoService : userInfoService(apiClient),
    }
}