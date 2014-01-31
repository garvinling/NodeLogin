var passport = require('passport');
var Account = require('./models/account');
var active_user = "";
module.exports = function (app) {

  app.get('/', function (req, res) {

      if(!req.session.user)
      {
        console.log("No users");
        res.sendfile('views/landing.html');
      }
      else
      {
        res.sendfile('views/index.html', { user : req.user });

      }
  });

  app.get('/setuser',function(req,res){

    req.session.user = req.user.username;
    console.log("Session: " +req.user.username);
    res.redirect('/');

  });


  app.post('/',
    passport.authenticate('local',{successRedirect:'/setuser',failureRedirect:'/'}),function(req,res){



  });


  app.get('/register', function(req, res) {
     
      res.sendfile('views/register.html', { });
  
  });



  
  app.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username, firstName:req.body.firstname, email:req.body.email}), req.body.password, function(err, account) {
        
        if (err) {
            return res.sendfile('views/register.html', { account : account });
            console.log("Something went wrong");
        }
          passport.authenticate('local')(req, res, function () {
          res.redirect('/');
        });
    });
  });

  



  app.get('/login', function(req, res) {
     // res.render('login', { user : req.user });
      res.sendfile('views/login.html',{user:req.user});
  });

  

  app.post('/login',
    passport.authenticate('local',{successRedirect:'/',failureRedirect:'/login'}),function(req,res){

  });



  app.get('/logout', function(req, res) {
      //req.logout();
      console.log("Logout hit.");
      delete req.session.user;
      delete req.user;
      var active_user = "";
      res.redirect('/');
  });




  app.get('/ping', function(req, res){
      res.send("pong!", 200);
  });

};
