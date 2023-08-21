import { Bani } from "../types";

const navigateToScreen = (item: Bani, navigation) => {
    
    // Determine which screen to navigate based on the item or any other logic
    if (item.ID === 2) {
        navigation.navigate('japjiSahib');
    } else if (item.ID===3){
        navigation.navigate('ShabadHazaree')
    }else if (item.ID === 4) {
        navigation.navigate('JaapSahib');
    }
    else if (item.ID===5){
        navigation.navigate('ShabadHazare')
    }
    else if (item.ID === 8) {
        navigation.navigate('Akalustat');
    } else if (item.ID === 9) {
        navigation.navigate('Chaupai');
    }else if (item.ID === 10) {
        navigation.navigate('AnadSahib');
    } 
    else if (item.ID===12){
        navigation.navigate('AthChandi')
    } else if (item.ID===13){
        navigation.navigate('Chandiwar')
    }
        else if (item.ID===19){
            navigation.navigate('Sastrnam')
    }else if (item.ID===21){
        navigation.navigate('Rehraas')
    }else if (item.ID===22){
        navigation.navigate('Aarti')
    }else if (item.ID===23){
        navigation.navigate('Sohila')
    }else if (item.ID===27){
        navigation.navigate('BarahManjh')
    }else if (item.ID===31){
        navigation.navigate('Sukhmani')
    }else if (item.ID===32){
        navigation.navigate('Sukhmana')
    }else if (item.ID===24){
        navigation.navigate('Ardas')
    }else if (item.ID===26){
        navigation.navigate('Bhagoti')
    }else if (item.ID===28){
        navigation.navigate('Barahmah')
    }
    else if (item.ID===29){
        navigation.navigate('Akal')
    }else if (item.ID===30){
        navigation.navigate('SlokMehla9')
    }
};
export default navigateToScreen;