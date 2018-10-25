import Sequelize from "sequelize"
import "dotenv/config";
import AlimentModel from "../models/aliment";
import AlimentTraductionModel from "../models/aliment_traduction";
import CalendrierModel from "../models/calendrier";
import ConseilsModel from "../models/conseils";
import ConseilsTraductionModel from "../models/conseils_traduction";
import GroupeUserModel from "../models/groupe_user";
import MessageModel from "../models/message";
import MessageForumModel from "../models/message_forum";
import RationModel from "../models/ration";
import SuiviPersonnelModel from "../models/suivi_personnel";
import UsersModel from "../models/users";
import VideoModel from "../models/video";
import VideoTraductionModel from "../models/video_traduction";

let sequelize,Aliment,AlimentTraduction,Calendrier,Conseils,ConseilsTraduction,GroupeUser
  ,Message,MessageForum,Ration,SuiviPersonnel,Users,Video,VideoTraduction;

sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USERNAME, process.env.MYSQL_USER_PASSWORD, {host: process.env.MYSQL_HOST, dialect: 'mysql', operatorsAliases: false, pool: {
  max: 5, min: 0, acquire: 30000, idle: 10000
  }});

Aliment = AlimentModel(sequelize, Sequelize);
AlimentTraduction = AlimentTraductionModel(sequelize, Sequelize);
Calendrier = CalendrierModel(sequelize, Sequelize);
Conseils = ConseilsModel(sequelize, Sequelize);
ConseilsTraduction = ConseilsTraductionModel(sequelize, Sequelize);
GroupeUser = GroupeUserModel(sequelize, Sequelize);
Message = MessageModel(sequelize, Sequelize);
MessageForum = MessageForumModel(sequelize, Sequelize);
Ration = RationModel(sequelize, Sequelize);
SuiviPersonnel = SuiviPersonnelModel(sequelize, Sequelize);
Users = UsersModel(sequelize, Sequelize);
Video = VideoModel(sequelize, Sequelize);
VideoTraduction = VideoTraductionModel(sequelize, Sequelize);

//Set Association
//1-n relation between aliment and aliment_traduction
Aliment.hasMany(AlimentTraduction, {as: 'Traductions'});

//1-n relation between conseils and conseils_traduction
Conseils.hasMany(ConseilsTraduction, {as: 'Traductions'});

//1-n relation between video and video_traduction
Video.hasMany(VideoTraduction, {as: 'Traductions'});

//n-n relations between aliment and calendrier
Aliment.belongsToMany(Calendrier, {through: "Appartenance_Aliment"});
Calendrier.belongsToMany(Aliment, {through: "Appartenance_Aliment"});

//1-n relation between aliment and ration
Aliment.hasMany(Ration, {as: 'Rations'});
GroupeUser.hasMany(Ration, {as: 'Rations'});

//1-n relation between user and suivi_personnel
Users.hasMany(SuiviPersonnel, {as: "SuiviPersonnels"});

//1-n, relation between user and user_group
GroupeUser.hasMany(Users, {as: "Users"});

//1-n, relation between Users and MessageForum
Users.hasMany(MessageForum, {as: "Messages"});


sequelize.sync().then(() => {
  console.log("Database and Tables Created")
});

export {sequelize, Aliment, AlimentTraduction, Calendrier, Conseils, ConseilsTraduction, GroupeUser, Message, MessageForum, Ration, SuiviPersonnel, Video, VideoTraduction, Users};