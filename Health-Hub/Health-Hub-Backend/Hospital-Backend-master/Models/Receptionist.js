module.exports = (sequelize, DataTypes) => { 
    const Receptionist = sequelize.define("Receptionist", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name:{
        type: DataTypes.STRING,
      },
      

    });

    Receptionist.associate = function (models) {
        Receptionist.belongsTo(models.User, {as : "receptionistuser", foreignKey: "userId"}); 
    }

    return Receptionist;
  };

  
  