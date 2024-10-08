const express = require("express");
const bodyParser = require("body-parser");
const { transporter, mailData } = require("./nodemailer");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const route = express.Router();
const port = process.env.PORT || 5000;
app.use("/v1", route);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

transporter.sendMail(mailData, function (err, info) {
  if (err) console.log(err);
  else console.log(info);
});
