const { Sequelize } = require("sequelize");
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    dialectOptions:
    process.env.NODE_ENV === "production"
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Allow self-signed SSL certificates in production
        },
      }
    : {},
    logging: process.env.NODE_ENV === "development" ? console.log : false,
  }
);

// const connectDB = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log("Connected to PostgreSQL using Sequelize");
//     } catch (error) {
//         console.error("Unable to connect to the database:", error);
//         process.exit(1);
//     }
// };

const connectDB = async () => {
  try {
      await sequelize.authenticate();
      console.log("Connected to PostgreSQL using Sequelize");

      // await sequelize.sync({ alter: true }); // Creates tables if they don't exist
      // console.log("Database synchronized successfully!");
  } catch (error) {
      console.error("Unable to connect to the database:", error);
      process.exit(1);
  }
};


module.exports ={ sequelize,connectDB};
