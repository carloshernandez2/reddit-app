const bcrypt = require("bcryptjs");
const { dbGray } = require('../config')


module.exports = (app, passport) => {

  const sessionLogout = (req, res, next) => {
      if (req.user) {
        req.session.destroy((err) => {
          if(err) throw err;
          req.logout()
          next();
      }) 
    } else {
      next();
    }
  }

  const passportLogin = (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (req.user) {
        res.send({authorization: req.user.username, message: "you've already logged in, log out in order to access another account"});
        return;
      }
      if (!user) {
        res.send({authorization:"Unauthorized", message: "please verify your data and try again"});
        return;
      }
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send({authorization: req.user.username, message: ""});
          console.log(req.user);
        });
      }
    })(req, res, next);
  }

  app.get("/api/session/user", (req, res) => {
    res.send(req.user? {authorization: req.user.username, message: ""} : {authorization:"Unauthorized", message: ""}); // The req.user stores the entire user that has been authenticated inside of it.
  });

app.get('/api/session/logout', sessionLogout, (req, res) => {
  res.status(200).send({authorization:"Unauthorized", message: ""})
})

app.post("/api/session/login", passportLogin);

app.post("/api/session/register", async (req, res, next) => {
      const username = req.body.username;
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const type = req.body.type;
      dbGray.query('INSERT INTO public.users (username, password, type) VALUES ($1, $2, $3) RETURNING*;', [username, hashedPassword, type], (err, result) => {
        if (err){
          err.detail = `Usuario o contraseña incorrectos`
          res.status(404).send(err);
          return;
        } 
        if(result.rows.length) {
        const newUser = {
            username: `User ${req.body.username} successfully created`,
        };
        res.send(newUser);
        next();
        } else {
          throw new Error('failed fetching, is my custom error')
        }
    });
});

}
