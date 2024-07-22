/* Author: Sotiris Konstantis */

const Area = require("./Area");
const TimeGroups = require("../enums/TimeGroups");
const Locations = require("./Locations");
const PixelGroups = require("./PixelGroups");

class Areas {
  constructor(timeGroup) {
    this.items = [];
    this.locations = new Locations();
    this.pixelGroups = new PixelGroups();
    if (timeGroup == TimeGroups.ONE) this.populate(0);
    if (timeGroup == TimeGroups.TWO) this.populate(1);
    if (timeGroup == TimeGroups.THREE) this.populate(2);
    if (timeGroup == TimeGroups.FOUR) this.populate(3);
    if (timeGroup == TimeGroups.FIVE) this.populate(4);
  }

  populate(timeGroup) {
    for(let i = 0; i < this.locations.items.size; i++)
      this.items.push(new Area(this.locations.items.get(i), this.pixelGroups.items.get(i).items[timeGroup]));
  }
}

module.exports = Areas;