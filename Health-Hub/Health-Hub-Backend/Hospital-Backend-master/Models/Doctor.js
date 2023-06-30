module.exports = (sequelize, DataTypes) => { 
    const Doctor = sequelize.define("Doctor", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name:{
        type: DataTypes.STRING,
      },
      field:{
        type: DataTypes.STRING
      },

      
    });

    
    Doctor.associate = function (models) {
        Doctor.belongsTo(models.User, {as : "docuser", foreignKey: "userId"}); 
        Doctor.hasMany(models.DocSlots, {as : "doc", foreignKey: "docId"}); 
    }

   
    return Doctor;
  };

  
  