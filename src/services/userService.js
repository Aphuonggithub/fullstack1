import db from "../models/index";
import bcrypt from "bcryptjs";

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);

      if (isExist) {
        let user = await db.User.findOne({
          attributes: ["email", "roleId", "password"],
          where: { email: email },
          raw: true
        });
        if (user) {
          let check = await bcrypt.compareSync(password, user.password);
          if (check) {
            userData.errCode = 0;
            userData.errMessage = "Ok";
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 0;
            userData.errMessage = "Wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `User's not found`;
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = `Your's Email isn't exist in your system. Plz try other email`;
      }
      resolve(userData);
    } catch (error) {
      reject(error);
    }
  });
};

let compareUserPassword = () => {
  return new Promise((resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: {
          email: userEmail,
        },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};

let getAllUsers = (userId) =>{
  return new Promise(async(resolve, reject) =>{
    try {
      let users = '';
      if(userId === 'All'){
        users = await db.User.findAll({
          attributes: {
            exclude: ['password']
          }
        })
      }
      if(userId && userId !=='All'){
        users =await db.User.findOne({
          where: {id: userId},
          attributes: {
            exclude: ['password']
          }
        })
      }
      resolve(users)
    } catch (error) {
      reject(error)
    }
  })
}
module.exports = {
  handleUserLogin: handleUserLogin,
  getAllUsers: getAllUsers,
};
