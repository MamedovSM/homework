const Helper = require('@codeceptjs/helper');

class Parsing extends Helper {
   async parsePrice(string) {
    return parseFloat(string.replaceAll(/[^0-9\.]/g, ""));
   }

}

module.exports = Parsing;
