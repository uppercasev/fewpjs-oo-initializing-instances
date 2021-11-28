// Write your code here
class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
    sayMenu() {
        console.log(`Breakfast will be ${this.food} and ${this.drink}.`)
    }
}

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
    sayMenu() {
        console.log(`Lunch will be ${this.salad} salad or ${this.soup} soup, with a ${this.drink}.`)
    }
}

class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
    }
    sayMenu() {
        console.log(`Dinner will start with a ${this.salad} salad or ${this.soup} soup, with ${this.entree} for entree, finished with ${this._dessert}.`)
    }
}

let mondayBreakfast = new Breakfast("pancakes", "coffee");
let mondayLunch = new Lunch("ceasar", "mushroom", "mojito");
let mondayDinner = new Dinner("caprese", "onion", "aranchini", "chocolate mousse");