module.exports = (sequelize, DataTypes) => { 
    const User = sequelize.define("User", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email:{
        type: DataTypes.STRING,
      },
      password:{
        type: DataTypes.STRING,
      },
      userType:{
        type: DataTypes.ENUM("ADMIN","DOCTOR","PATIENT","RECEPTIONIST")
      }
      
    });
    User.associate = function (models) {
        User.hasOne(models.Admin, { foreignKey: "userId", as: "admin" })
        User.hasOne(models.Doctor, { foreignKey: "userId", as: "doctor" })
        User.hasOne(models.Patient, { foreignKey: "userId", as: "patient" })
        User.hasOne(models.Receptionist, { foreignKey: "userId", as: "receptionist" })
    }
    
    return User;
  };

  
  