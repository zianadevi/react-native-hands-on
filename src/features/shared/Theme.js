const pallete = {
    white : '#fff',
    orange : 'rgb(252,80,40)',
    black : '#000',
    grey: 'rgb(92,93,95)',
    lightGrey: 'rgb(234,236,241)'
}

export const theme ={
    background : require('../../../assets/img/background.jpg'),
    colors : {
        primary : pallete.white,
        black : pallete.black,
        secondary: pallete.lightGrey,
        foreground: pallete.grey,
    },
    spacing : {
        xs:4,
        s : 8,
        m : 16,
        l : 24,
        xl: 32,
        xxl: 40
    },
    radius : {
        s : 5,
        m : 10,
        l : 15
    },
    text : {
        title : {
            color : pallete.white,
            fontSize : 36,
            fontFamily : 'Poppins-Bold'
        },
        title2 : {
            color : pallete.grey,
            fontSize : 36,
            fontFamily : 'Poppins-Bold'
        },
        titleProd : {
            fontSize : 20,
            color : pallete.white,
            fontFamily: 'Poppins-Regular'
        },
        subtitle : {
            fontSize : 16,
            color : pallete.white,
            fontFamily: 'Poppins-Regular'
        },
        subtitle2 : {
            fontSize : 16,
            color : pallete.grey,
            fontFamily: 'Poppins-Regular'
        },
        textButton : {
            fontSize : 16,
            color : pallete.black,
            fontFamily : 'Poppins-Bold'
        },
        textButton2 : {
            fontSize : 16,
            color : pallete.white,
            fontFamily : 'Poppins-Bold'
        }
    }
}