module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
    
  
    return Tutorial;
  };