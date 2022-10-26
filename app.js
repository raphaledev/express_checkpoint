const express = require('express')
const app = express();
const path = require('path');
app.use(workingHours);

const errorMessage = '<h1 style="text-align:center; color:red">The web application is only available during working hours (Monday to Friday,  from 9 to 17)</h1>'

function workingHours (req, res, next) {
  const today = new Date();
  let h = today.getHours();
  let d = today.getDay();
  if (h < 9 || h >= 17 || d === 0 || d === 6) {
    res.status(403)
    return res.send(errorMessage);
  }
  else {
    app.use(express.static(path.join(__dirname, './site')));
  }
  next();
}

app.listen(5000, () => console.log("App listening on port 5000"));
