import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRouters = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);

  router.post("/post-crud", homeController.postCrud);
  router.get("/get-crud", homeController.displayGetCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);

  return app.use("/", router);
};

module.exports = initWebRouters;
