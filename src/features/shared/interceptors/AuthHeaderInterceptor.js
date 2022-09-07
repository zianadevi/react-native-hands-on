import { KEY, SERVICE } from "../constants";
import {Storage} from "../Storage";

export const authHeaderInterceptor = async (config) => {
    const storage = Storage()
    if(config.url !== SERVICE.LOGIN){
        const token = await storage.getData(KEY.TOKEN)
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}