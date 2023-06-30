module.exports = (sequelize, DataTypes) => { 
    const Admin = sequelize.define("Admin", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name:{
        type: DataTypes.STRING
      }
      
    });

    Admin.associate = function (models) {
        Admin.belongsTo(models.User, {as : "adminuser", foreignKey: "userId"}); 
    }

   
    return Admin;
  };

  
  