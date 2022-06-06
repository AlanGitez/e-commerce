const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./controllers/db");

// const cookieParser = require("cookie-parser");
// const session = require("express-session");
// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const User = require("./api/models/User")

// Express Route File Requires
// const routes = require("./api/routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(cookieParser());
// app.use(
//   session({
//     secret: "bootcamp",
//     // resave: false,
//     // saveUninitialized: true,
//     // cookie: { secure: true },
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "email",
//       passwordField: "password",
//     },
//     function (email, password, done) {
//       User.findOne({ where: { email } })
//         .then((user) => {
//           // console.log("User: ", user)
//           if (!user) {
//             return done(null, false); // user not found
//           }
//           user.hash(password, user.salt).then((hash) => {
//             // console.log("Existe el usuario")
//             if (hash !== user.password) {
//               // console.log("Contraseña incorrecta")
//               return done(null, false); // invalid password
//             }
//             // console.log("Contraseña correcta")
//             done(null, user); // success :D
//           });
//         })
//         .catch(done);
//     }
//   )
// );

// // How we save the user
// passport.serializeUser(function (user, done) {
//   console.log("Serialize User ejectuado")
//   console.log("User: ", user.id)
//   done(null, user.id);
// });

// // How we look for the user
// passport.deserializeUser(function (id, done) {
//   console.log("Deserialize User ejectuado")
//   User.findByPk(id).then((user) => done(null, user)).catch(error => console.log(error));
// });

// // Express Routing
// app.use("/api", authAPI);
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./src/public", "index.html"));
// });

const port = 3001;

app.use("/api", (req, res) => {
  res.sendStatus(404);
});

// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

db.sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening at port ${port}`);
    });
  })
  .catch((error) => console.log("Error: ", error));
