import express from "express";
import {Aliment, AlimentTraduction, GroupeUser, MessageForum, SuiviPersonnel, Calendrier, Users, VideoTraduction, Video, Ration, Message, ConseilsTraduction, Conseils, sequelize} from "../configs";

let router;
router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.post("/api/signIn", (req, res) => {
  try{
      
  }catch (e) {
    console.error(e);
    res.json(e);
  }
});

module.exports = router;
