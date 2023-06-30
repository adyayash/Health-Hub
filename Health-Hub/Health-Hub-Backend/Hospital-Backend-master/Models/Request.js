module.exports = (sequelize, DataTypes) => { 
    const Request = sequelize.define("Request", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      subject:{
        type: DataTypes.STRING
      },
      status:{
        type: DataTypes.ENUM("SCHEDULED","DECLINED","PENDING")
      }

      
    });
    Request.associate = function (models) {
        Request.belongsTo(models.User, {as : "requser", foreignKey: "userId"}); 
    }
    
   
    return Request;
  };

  
  