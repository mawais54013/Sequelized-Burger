'use strict';
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define('burger', {
  game_name: DataTypes.STRING,
  bad: DataTypes.BOOLEAN
  });
  return burger;
};