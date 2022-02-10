// material stands for ingredients that have been processed
class Ingredient {
    constructor() {
        this.selected = null; 
        this.materials = []; 
    }

    setSelected(ingredient) {
        this.selected = ingredient;
    }
    
    addIngredient(material){
        if (!material) {
            return
        }
        this.materials.push(material);
    }

    brew(){
        if(this.materials.includes('laughingFlower') &&
            this.materials.includes('catAttention') && 
            this.materials.includes('dragonSaliva') &&
            this.materials.length === 3){
            return 'Laugh Potion'
        } else if (this.materials.includes('brokenHeart') &&
            this.materials.includes('frozenTears') &&
            this.materials.includes('sweetNothings') &&
            this.materials.length === 3){
            return 'Heartless Potion'
        } else if (this.materials.includes('brokenHeart') &&
            this.materials.includes('frozenTears') &&
            this.materials.includes('sweetNothings') &&
            this.materials.length === 3) {
            return 
        }
        else {
            return `You've made something strange...(definitely not a potion!)`
        }
    }

}

export default Ingredient; 