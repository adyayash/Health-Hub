module.exports = (sequelize, DataTypes) => { 
    const Patient = sequelize.define("Patient", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name:{
        type: DataTypes.STRING,
      },
      medicalHistory:{
        type: DataTypes.STRING
      },
      alergies:{
        type: DataTypes.STRING,
      },
      emergencyContact:{
        type: DataTypes.STRING
      }
      
    });

    
   
    Patient.associate = function (models) {
        Patient.belongsTo(models.User, {as : "patientuser", foreignKey: "userId"}); 
    }

    return Patient;
  };

  
  