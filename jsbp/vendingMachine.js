
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

module.exports = {

  insertCoin: function(coinType){
    var value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },
  releaseChange: function(){
    var currentBalance = balanceManager.getBalance();
    balanceManager.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },
  vendProduct: function(productId){
    var product = productInventory.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  },
  convertToChange: function(balance){
    if(balance == 0){
      return []
    }
    if(changeHandler.getAmount('q') <= balance){
      return this.convertToChange(balance - changeHandler.getAmount('q')).concat(['q'])
    }
    if(changeHandler.getAmount('d') <= balance){
      return this.convertToChange(balance - changeHandler.getAmount('d')).concat(['d'])
    }
    if(changeHandler.getAmount('n') <= balance){
      return this.convertToChange(balance - changeHandler.getAmount('n')).concat(['n'])
    }
    if(changeHandler.getAmount('p') <= balance){
      return this.convertToChange(balance - changeHandler.getAmount('p')).concat(['p'])
    }
    // var changeLeft = balance;
    // const changeCoins = []
    // console.log("changeLeft: " + changeLeft)
    // while(changeLeft > 0){
    //   if(changeLeft - changeHandler.getAmount('q') >= 0){ // Can fit a quarter
    //     changeLeft = changeLeft - changeHandler.getAmount('q');
    //     changeCoins.unshift('q')
    //     console.log("inserted 'q' on changeCoins")
    //     console.log("changeCoins: " + changeCoins)
    //   } else if(changeLeft - changeHandler.getAmount('d') >= 0){ // Can fit a dime
    //     changeLeft = changeLeft - changeHandler.getAmount('d');
    //     changeCoins.unshift('d')
    //     console.log("inserted 'd' on changeCoins")
    //     console.log("changeCoins: " + changeCoins)
    //   } else if(changeLeft - changeHandler.getAmount('n') >= 0){ // Can fit a nickel
    //     changeLeft = changeLeft - changeHandler.getAmount('n');
    //     changeCoins.unshift('n')
    //     console.log("inserted 'n' on changeCoins")
    //     console.log("changeCoins: " + changeCoins)
    //   } else if(changeLeft - changeHandler.getAmount('p') >= 0){ // Can fit a penny
    //     changeLeft = changeLeft - changeHandler.getAmount('p');
    //     // changeCoins[currentIndex] = 'p'
    //     // currentIndex++
    //     changeCoins.unshift('p')
    //     console.log("inserted 'p' on changeCoins")
    //     console.log("changeCoins: " + changeCoins)
    //   }
    //   console.log("changeLeft: " + changeLeft)
    // }
    // return changeCoins;
  }
};
