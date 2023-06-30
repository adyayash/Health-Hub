module.exports = (sequelize, DataTypes) => { 
    const Visit = sequelize.define("Visit", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      date:{
        type: DataTypes.DATE
      },
      status:{
        type: DataTypes.ENUM("SCHEDULED","CANCELLED BY PATIENT","COMPLETED","CANCELLED BY DOCTOR","RESCHEDULED")
      } 
      
    });

    Visit.associate = function (models) {
        Visit.belongsTo(models.User, {as : "user", foreignKey: "userId"}); 
        Visit.belongsTo(models.Doctor, {as : "doc", foreignKey: "docId"});
        Visit.belongsTo(models.Slots, {as : "slot", foreignKey: "slotId"});
    }
    
   
    return Visit;
  };

  
  