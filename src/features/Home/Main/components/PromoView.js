import { ScrollView, View } from "react-native";
import PromoItem from "./PromoItem";

const PromoView = () => {
    const promos = [
        {id: 1, promo: 'Discount food'},
        {id: 2, promo: 'Buy 1 Get 1'},
        {id: 3, promo: 'Buy 2 Get 1'},
        {id: 4, promo: 'Cashback 50rb'},
        {id: 5, promo: 'Get 100rb, next order'},
        {id: 6, promo: 'Special price for Food'},
        {id: 7, promo: 'Special price for Beverage'},
        {id: 8, promo: 'Special price for Food and Beverage'},
        {id: 9, promo: 'Discount 10% min.300rb'},
        {id: 10, promo: 'Discount 20% min.500rb'},
        {id: 11, promo: 'Discount 17% All F&B'},
    ];
    const renderPromoItem = () => {
        const promoItems = [];
        for (let i = 0; i < Math.ceil(promos.length / 2) ; i++) {
            let promo1Idx = 1 * 2;
            let promo2Idx = (1 * 2) + 1;
            if (promo2Idx === promos.length) {
                promo2Idx = null
            }
            const p = <View key={i}>
                <PromoItem promo={promos[promo1Idx]} />
                {promo2Idx && <PromoItem promo={promos[promo2Idx]}/>}
            </View>
            promoItems.push(p);
        }
        return promoItems
    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {renderPromoItem()}
        </ScrollView>
    )
}

export default PromoView;