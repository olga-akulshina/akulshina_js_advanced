'use strict'

class Billing {
    constructor(amount) {
        this.amount = amount;
    }

    calculateTotal() {
        return this.amount;
    }
}

class FixedBilling extends Billing {
    constructor(amount) {
        super(amount);
    }
}

class HoursBilling extends Billing {
    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }

    calculateTotal() {
        return super.calculateTotal() * this.hours;
    }
}

class ItemsBilling extends Billing {
    constructor(amount, items) {
        super(amount);
        this.items = items;
    }

    calculateTotal() {
        return super.calculateTotal() * this.items;
    }
}

const fixedBilling = new FixedBilling(100);
const hoursBilling = new HoursBilling(80, 3);
const itemsBilling = new ItemsBilling(20, 4);

console.log(fixedBilling.calculateTotal());
console.log(hoursBilling.calculateTotal());
console.log(itemsBilling.calculateTotal());
