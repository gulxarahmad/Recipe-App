class Meals{
    constructor(
        id,
        categoryids,
        title,
        affordability,
        complexibility,
        imgURL,
        duration,
        ingredients,
        steps,
        isGluentFree,
        isVegan,
        isVegaterian,
        isLactosfree){

        this.id = id;
        this.categoryids = categoryids;
        this.title = title;
        this.affordability = affordability;
        this.complexibility = complexibility;
        this.imgURL=imgURL;
        this.duration=duration;
        this.ingredients=ingredients;
        this.steps = steps;
        this.isGluentFree = isGluentFree;
        this.isVegan = isVegan;
        this.isVegaterian = isVegaterian;
        this.isLactosfree = isLactosfree;
    }
}
export default Meals;
