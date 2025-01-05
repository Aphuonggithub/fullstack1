
import db from "../models/index"
import CRUDService from "../services/CRUDService"

let getHomePage =async (req, res) => {
  try{
    let data = await db.User.findAll()
    return res.render("homepage.ejs", {
      data: JSON.stringify(data)
    });
  }catch(e){
    console.log(e);
    
  }
  
  
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUD = (req,res) =>{
  return res.render('crud.ejs')
}
let postCrud =async(req, res) => {
  let message = await CRUDService.createNewUser(req.body)
  console.log(message);
  
  return res.send(`hi`)
  
}

let displayGetCRUD = async(req, res) => {
  let data = await CRUDService.getAllUser()
  return res.render('displayCRUD.ejs', {
    dataTable : data
  })
}
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCrud: postCrud,
  displayGetCRUD: displayGetCRUD
};
