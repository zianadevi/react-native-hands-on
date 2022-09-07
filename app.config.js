const IS_DEV = process.env.APP_VARIANT === 'development'
export default ({config}) => {
    return {
        ...config,
        name : 'WMB',
        version : process.env.CURR_VERSION || '1.0.0',
        extra : {
            baseUrl: process.env.BASE_URL
        },
        android: {
            package: IS_DEV ? 'com.enigma.dev.myapp' : 'com.enigma.myapp'
        }
    }
}