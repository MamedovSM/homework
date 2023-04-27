const Helper = require('@codeceptjs/helper');

class Parsing extends Helper {
   async parsePrice(string) {
    return parseFloat(string.replaceAll(/[^0-9\.]/g, ""));
   }

 

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

}

module.exports = Parsing;
