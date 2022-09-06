import { SERVICE } from "../features/shared/constants";

export const userInfoService = ({doGet}) => {
    const userInfo = async () => {
        try {
            return await doGet({url: SERVICE.USER_INFO})
        } catch (e) {
            throw e;
        }
    }
    return {userInfo}
}