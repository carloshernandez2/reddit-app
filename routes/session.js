const bcrypt = require("bcryptjs");


module.exports = (app, passport) => {

app.get('/api/logout', (req, res, next) => {
  req.session.destroy((err) => {
      if(err) return next(err)
      req.logout()
      res.sendStatus(200)
  })
})

app.post("/api/session/login", passport.authenticate("local"), (req, res) => {
  const { user } = req
  res.json(user)
})

app.post("/api/session/register", async (req, res) => {
      const username = req.body.username;
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const type = req.body.type;
      db.query('INSERT INTO public.users (username, password, type) VALUES ($1, $2, $3) RETURNING*;', [username, hashedPassword, type], (err, result) => {
        if (err) throw err;
        if(result.rows.length[0]) {
        const newUser = {
            username: req.body.username,
        };
        res.send(newUser);
        } else {
          throw new Error('failed fetching, is my custom error')
        }
    });
});

}
