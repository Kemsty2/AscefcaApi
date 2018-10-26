import express from "express";
import {Aliment, AlimentTraduction, GroupeUser, MessageForum, SuiviPersonnel, Calendrier, Users, VideoTraduction, Video, Ration, Message, ConseilsTraduction, Conseils, sequelize} from "../configs";

let router;
router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

/*Route Okay*/
router.post("/api/signIn", async (req, res) => {
  try{
    let userToSave, oldUser;
    //On vérifie que le telephone n'est pas déja utilisé
    oldUser = await Users.findOne({ where: {telephone: req.body.telephone} });
    if(oldUser){
      return res.json({error_message: 0, status: 0, message: "The Phone Already Exist"});
    }else{
      userToSave = await Users.create({
        nom: req.body.nom,
        prenom: req.body.prenom,
        password: req.body.password,
        telephone: req.body.telephone,
        email: req.body.email,
        status: req.body.status,
        poids: req.body.poids,
        taille: req.body.taille,
        region_residence: req.body.region_residence,
        activite: req.body.activite,
        ville: req.body.ville,
        GroupUserId: req.body.GroupUserId
      });
      return res.json({status: 1, uid: userToSave.id});
    }
  }catch (e) {
    console.error(e);
    res.json({error_message: 0, status:0});
  }
});

/*Route Okay*/
router.get("/api/login", async(req, res) => {
  try {
    let {telephone, password} = req.body, user;

    user = await Users.findOne({where: {telephone: telephone, password: password}});
    if(user){
      return res.json({status: 1, user: user});
    }else{
      return res.json({status: 0, message: "The Password Or Mobile is not correct"});
    }
  }catch (e) {
    console.error(e);
    return res.json({status: 0, message: "The Password Or Mobile is not correct"});
  }
});

router.get("/api/listfood", (req, res) => {
  try {
    
  }catch (e) {
    console.error(e);
    res.json(e);
  }
});

router.post("/api/rationIndividuelle", (req, res) => {
  try {

  }catch (e) {
    console.error(e);
    res.json(e);
  }
});

router.get("/api/hygieneAlimentaire", (req, res) => {
  try {

  }catch (e) {
    console.error(e);
    res.json(e);
  }
});

router.get("/api/calendarfood", (req, res) => {
  try {

  }catch (e) {
    console.error(e);
    res.json(e);
  }
});



module.exports = router;
