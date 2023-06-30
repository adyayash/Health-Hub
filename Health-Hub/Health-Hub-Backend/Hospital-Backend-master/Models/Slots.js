module.exports = (sequelize, DataTypes) => { 
    const Slots = sequelize.define("Slots", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      timing:{
        type: DataTypes.STRING
      }
      
    });

    Slots.associate = function (models) {
        Slots.hasMany(models.DocSlots, {as : "slot", foreignKey: "slotId"}); 
    }
    
   
    return Slots;
  };

  
  