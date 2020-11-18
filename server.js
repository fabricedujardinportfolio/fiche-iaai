const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const mustache = require('mustache-express');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "fichier_iaai",
  user: "root",
  password: ""
});

app.post("/register", function (req, res) {
  const ie_projet_name = req.body.ie_projet_name;
  const ie_name = req.body.ie_name;
  const ie_first_name = req.body.ie_first_name;
  const ie_tribe_name = req.body.ie_tribe_name;
  const ie_phone_number = req.body.ie_phone_number;
  const ie_sector = req.body.ie_sector;
  const ie_object_request = req.body.ie_object_request;
  const ie_ridet = req.body.ie_ridet;
  const ie_isle = req.body.ie_isle;
  //Table infortion requete//
  //Recapitulatif constructor requete//
  const ie_suppliers_constructor = req.body.ie_suppliers_constructor;
  const ie_post_constructor = req.body.ie_post_constructor;
  const ie_estimate_constructor = req.body.ie_estimate_constructor;

  // ICI
  
  // const addLineSupplConst2 = req.body.addLineSupplConst2;
  // const addLinePostConst2 = req.body.addLinePostConst2;
  // const addLineEstConst2 = req.body.addLineEstConst2;

  //Recapitulatif technical requete//
  const ie_suppliers_technical = req.body.ie_suppliers_technical;
  const ie_post_technical = req.body.ie_post_technical;
  const ie_estimate_technical = req.body.ie_estimate_technical;
  //Recapitulatif work requete//
  const ie_suppliers_work = req.body.ie_suppliers_work;
  const ie_post_work = req.body.ie_post_work;
  const ie_estimate_work = req.body.ie_estimate_work;
  //Recapitulatif transport requete//
  const ie_suppliers_transport = req.body.ie_suppliers_transport;
  const ie_post_transport = req.body.ie_post_transport;
  const ie_estimate_transport = req.body.ie_estimate_transport;
  //Recapitulatif office requete//
  const ie_suppliers_office = req.body.ie_suppliers_office;
  const ie_post_office = req.body.ie_post_office;
  const ie_estimate_office = req.body.ie_estimate_office;
  //Recapitulatif furniture requete//
  const ie_suppliers_furniture = req.body.ie_suppliers_furniture;
  const ie_post_furniture = req.body.ie_post_furniture;
  const ie_estimate_furniture = req.body.ie_estimate_furniture;
  //Recapitulatif dernier table//
  const ie_total_coutume = req.body.ie_total_coutume;
  const ie_total_stock = req.body.ie_total_stock;
  const ie_total_tresorerie = req.body.ie_total_tresorerie;
  //Recapitulatif des checkBox etat//
  const ie_conserve_prog = req.body.ie_conserve_prog;
  const ie_conserve_vlc = req.body.ie_conserve_vlc;
  const ie_conserve_coutume = req.body.ie_conserve_coutume;
  const ie_conserve_bank = req.body.ie_conserve_bank;
  const ie_conserve_comptable = req.body.ie_conserve_comptable;
  const ie_conserve_site = req.body.ie_conserve_site;
  const ie_conserve_stock = req.body.ie_conserve_stock;
  const ie_conserve_tresorerie = req.body.ie_conserve_tresorerie;




  const user = {
    ie_projet_name: ie_projet_name,
    ie_name: ie_name,
    ie_first_name: ie_first_name,
    ie_tribe_name: ie_tribe_name,
    ie_phone_number: ie_phone_number,
    ie_sector: ie_sector,
    ie_object_request: ie_object_request,
    ie_ridet: ie_ridet,
    ie_isle: ie_isle,
    //Table information//
    //Recapitulatif constructor//
    ie_suppliers_constructor: ie_suppliers_constructor,
    ie_post_constructor: ie_post_constructor,
    ie_estimate_constructor: ie_estimate_constructor,

    // ICI AUSSI

    // addLineSupplConst2: addLineSupplConst2,
    // addLinePostConst2: addLinePostConst2,
    // addLineEstConst2: addLineEstConst2,
    

        //Recapitulatif technical//
    ie_suppliers_technical: ie_suppliers_technical,
    ie_post_technical: ie_post_technical,
    ie_estimate_technical: ie_estimate_technical,
    //Recapitulatif works//
    ie_suppliers_work: ie_suppliers_work,
    ie_post_work: ie_post_work,
    ie_estimate_work: ie_estimate_work,
    //Recapitulatif transport//
    ie_suppliers_transport: ie_suppliers_transport,
    ie_post_transport: ie_post_transport,
    ie_estimate_transport: ie_estimate_transport,
    //Recapitulatif office//
    ie_suppliers_office: ie_suppliers_office,
    ie_post_office: ie_post_office,
    ie_estimate_office: ie_estimate_office,
    //Recapitulatif furniture//
    ie_suppliers_furniture: ie_suppliers_furniture,
    ie_post_furniture: ie_post_furniture,
    ie_estimate_furniture: ie_estimate_furniture,
    //Recapitulatif des checkBox etat//
    ie_conserve_prog: ie_conserve_prog,
    ie_conserve_vlc: ie_conserve_vlc,
    ie_conserve_coutume: ie_conserve_coutume,
    ie_conserve_bank: ie_conserve_bank,
    ie_conserve_comptable: ie_conserve_comptable,
    ie_conserve_site: ie_conserve_site,
    ie_conserve_stock: ie_conserve_stock,
    ie_conserve_tresorerie: ie_conserve_tresorerie,

    //Recapitulatif dernier table//
    ie_total_stock: ie_total_stock,
    ie_total_coutume: ie_total_coutume,
    ie_total_tresorerie: ie_total_tresorerie

  };

  connection.query("INSERT INTO users SET ?", user);

  return res.render('success', { user: user });
});

app
  .get("/", function (req, res) {
    return res.render("home");
  })
  .listen(3000);

console.log("server listening at port 3000");