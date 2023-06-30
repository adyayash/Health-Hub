module.exports = (sequelize, DataTypes) => { 
    const DocSlots = sequelize.define("DocSlots", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      
    });
   
    return DocSlots;
  };

  
  