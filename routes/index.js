import express from "express";
import {Aliment, AlimentTraduction, GroupeUser, MessageForum, SuiviPersonnel, Calendrier, Users, VideoTraduction, Video, Ration, Message, ConseilsTraduction, Conseils, sequelize} from "../configs";
import _ from "lodash";

const Sequelize = require("sequelize");

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

router.get("/api/listfood/:lang", async (req, res) => {
  try {
    let allAliments, datas = [];
    //Je récupère l'ensemble des aliments
    allAliments = await Aliment.findAll();

    //Je boucle sur l'ensemble des aliments, puis je construit un Json en fonction des groupes
    allAliments.map(aliment => {
      if(typeof aliment.numero_groupe !=="undefined"){
        if(_.findIndex(datas, function(o) { return o.numero_groupe === aliment.numero_groupe;}) === -1){
          datas.push({numero_groupe: aliment.numero_groupe, datas: []});
        }
      }
    });

    await Promise.all(allAliments.map(async aliment => {
      let alimentTraduction = await aliment.getAlimentTraductions({where:{langue: req.params.lang}});
      datas.forEach(data => {
        if(data.numero_groupe === aliment.numero_groupe){
          data.datas.push({...aliment, ...alimentTraduction[0]});
        }
      });
    }));

    res.json({status: 1, datas: allAliments})

  }catch (e) {
    console.error(e);
    res.json({status: 0, ...e});
  }
});

router.post("/api/rationIndividuelle", (req, res) => {
  try {

  }catch (e) {
    console.error(e);
    res.json(e);
  }
});

router.get("/api/hygieneAlimentaire/:lang", async (req, res) => {
  try {
    let conseils, datas = [];

    conseils = await Conseils.findAll();
    await Promise.all(conseils.map(async conseil => {
      let conseilTraduction = await conseil.getConseilsTraductions({where: {langue: req.params.lang}});
      datas.push({...conseil,...conseilTraduction[0]});
    }));

    res.json({status: 1, datas: {...conseils}})
  }catch (e) {
    console.error(e);
    res.json({status: 0, ...e});
  }
});

router.post("/api/calendarfood", async (req, res) => {
  try {
    let rations;
    rations = await Ration.findAll({
      include: [
        {
          model: AlimentTraduction,
          where: { langue: req.body.langue}
        }
      ],
      where: {
        AlimentId: {
          [Op.in]: req.body.datas
        },
        GroupUsersId: req.body.groupId
      }
    });

    res.json({status:1, datas: [...rations]});
  }catch (e) {
    console.error(e);
    res.json({status: 0, ...e});
  }
});

module.exports = router;
