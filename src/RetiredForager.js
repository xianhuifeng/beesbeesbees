var RetiredForagerBee = function() {
  Grub.call(this);
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};
RetiredForagerBee.prototype = Object.create(Grub.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.forrage = function(){
  return 'I am too old, let me play cards instead';
};
RetiredForagerBee.prototype.gamble = function(){
  this.treasureChest.push('treasure');
}
