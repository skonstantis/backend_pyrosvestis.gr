/* Author: Sotiris Konstantis */

const Areas = require("../classes/Areas");
const TimeGroups = require("../enums/TimeGroups");

const findAreas = (date) => {
    if(date >= new Date(TimeGroups.ONE))
        return new Areas(TimeGroups.ONE);
    else if(date >= new Date(TimeGroups.TWO))
        return new Areas(TimeGroups.TWO);
    else if(date >= new Date(TimeGroups.THREE))
        return new Areas(TimeGroups.THREE);
    else if(date >= new Date(TimeGroups.FOUR))
        return new Areas(TimeGroups.FOUR);
    else if(date >= new Date(TimeGroups.FIVE))
        return new Areas(TimeGroups.FIVE);
    else
        throw new Error("The date provided is earlier than what is allowed.")
};

module.exports = findAreas;