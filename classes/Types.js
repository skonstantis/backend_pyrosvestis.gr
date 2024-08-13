/* Author: Sotiris Konstantis */

class Types {
  constructor() {
    this.items = new Map();

    this.addItem(0, "Δασαρχείο");
    this.addItem(1, "Διεύθυνση Δασών");
  }

  addItem(id, type) {
    this.items.set(id, type);
  }
}

module.exports = Types;