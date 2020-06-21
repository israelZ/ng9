//Install express server
const express = require('express');
const path = require('path');

var logger = require('morgan');

const app = express();

// Serve only the static files form the dist directory
app.use(logger('dev'));
app.use(express.static('dist/ng9'));

app.get('/', function(req,res) {
    
  res.status(200).sendFile(path.join(__dirname + '/dist/ng9/index.html'));  
});


app.get('/api/users',(req,res)=>{

    let users=[
        {
          "id": 1,
          "firsrname": "john",
          "lastname": "Smith",
          "dad": "sam",
          "mom": "dana",
          "date_dead":"21/02/2019",
          "date_born":"01/01/1940",
          "age":"79",
          "adress_moov":"בית עלמין נתניה שיכון ותיקים",
          "adress_dead":"Cemetery shikun vatikim , Netanya",
          "la":'32.297390',
          "lo":'34.882092',
          "cuntry_born":"Israel",
          "Summary": "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in  versions of Lorem Ipsum.",
          "avatar": "",
          "gravestone": "https://matzeva.co.il/wp-content/uploads/2015/11/--------------------------.jpg"
        },
        {
          "id": 2,
          "firsrname": "Dani",
          "lastname": "Muly",
          "dad": "Sami",
          "mom": "ana",
          "date_dead":"21/03/2014",
          "date_born":"01/01/1964",
          "age":"50",
          "cuntry_born":"Maroko",
          "adress_moov":"בית עלמין הוד השרון החדש נווה הדר",
          "adress_dead":"Cemetery Neve Hadar , Hod-Hasharon",
          "la":'32.138030',
          "lo":'34.875320',
          "Summary": "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s  like Aldus PageMaker including versions of Lorem Ipsum.",
          "avatar": "",
          "gravestone": "https://www.ab.lanegev.co.il/images/27.jpg"
          // "gravestone": "https://media2.giphy.com/media/xTdBkoLXNXOzC/giphy.gif"
        }
      ]

      // console.log('res',res.headersSent);
      // console.log('req',req.headers);

    res.status(200).json(users)

})


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);
console.log('Runing....');