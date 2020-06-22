//Install express server
const express = require('express');
const path = require('path');

var logger = require('morgan');

const app = express();

// Serve only the static files form the dist directory
app.use(logger('dev'));
app.use(express.static(path.join('dist/ng9')));

app.get('/', function(req,res) {
    
  res.status(200).sendFile(path.join(__dirname + '/dist/ng9/index.html'));  
});


app.get('/api/users_en',(req,res)=>{

    let users=[
        {
          "id": 1,
            "firsrname": "John",
            "lastname": "Smith",
            "dad": "Sam",
            "mom": "Dana",
            "cuntry_born":"Israel",
            "adress_dead":"Cemetery shikun vatikim , Netanya",
            "Summary": "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s  like Aldus PageMaker including versions of Lorem Ipsum.",
          "date_dead":"21/02/2019",
          "date_born":"01/01/1940",
          "age":"79",
          "adress_moov":"בית עלמין נתניה שיכון ותיקים",
          "la":'32.297390',
          "lo":'34.882092',
          "gravestone": "https://matzeva.co.il/wp-content/uploads/2015/11/--------------------------.jpg"
        },
        {
          "id": 2,
           "firsrname": "Dani",
            "lastname": "Muly",
            "dad": "Sami",
            "mom": "ana",
            "cuntry_born":"Maroko",
            "adress_dead":"Cemetery Neve Hadar , Hod-Hasharon",
            "Summary": "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s  like Aldus PageMaker including versions of Lorem Ipsum.",
          "date_dead":"21/03/2014",
          "date_born":"01/01/1964",
          "age":"50",
          "adress_moov":"בית עלמין הוד השרון החדש נווה הדר",
          "la":'32.138030',
          "lo":'34.875320',
          "gravestone": "https://www.ab.lanegev.co.il/images/27.jpg"
        },
        {
          "id": 3,
             "firsrname": "Eli",
            "lastname": "Moshe",
            "dad": "Meni",
            "mom": "Rivka",
            "cuntry_born":"Germny",
          "adress_dead":"Cemetery Yarkon , Merkaz",
            "Summary": "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s  like Aldus PageMaker including versions of Lorem Ipsum.",
          "date_dead":"21/03/2013",
          "date_born":"01/01/1964",
          "age":"49",
          "adress_moov":"בית עלמין ירקון",
          "la":'32.11588',
          "lo":'34.87037',
          "avatar": "",
          "gravestone": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbGJz_AsJMg-RTELX3Oluxx1JTM1M_y_O9zSFvr7T8DHTya9OA&usqp=CAU"
        },
        {
          "id": 4,
            "firsrname": "Sara",
            "lastname": "Koni",
            "dad": "Erez",
            "mom": "Lola",
            "cuntry_born":"U.S.A",
            "adress_dead":"Cemetery Sgula , Petch Tikva",
            "Summary": "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s  like Aldus PageMaker including versions of Lorem Ipsum.",
          
          "gender":"female",
          "date_dead":"21/03/2015",
          "date_born":"01/01/1964",
          "age":"51",
          "adress_moov":"בית עלמין סגולה",
          "la":'32.103367',
          "lo":'34.887976',
          "avatar": "",
          "gravestone": "https://www.winkler.co.il/gweb/Moduls/Files/ajaxplorer/data/files/categories/%D7%9E%D7%A9%D7%A4%D7%97%D7%AA%D7%99%D7%95%D7%AA%20%D7%9E%D7%9B%D7%A4%D7%9C%D7%95%D7%AA/16170.jpg"
        }
      ]


    res.status(200).json(users)

})


app.get('/api/users_he',(req,res)=>{

  let users=[
    {
      "id": 1,
        "firsrname": "ג'ון",
        "lastname": "סמית",
        "dad": "סם",
        "mom": "דנה",
        "cuntry_born":"ישראל",
        "adress_dead":"בית עלמין שיכון ותיקים נתניה",
        "Summary": "ולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי קולהע צופעט למרקוח איבן איף, ברומץ",
    
      "date_dead":"21/02/2019",
      "date_born":"01/01/1940",
      "age":"79",
      "adress_moov":"בית עלמין נתניה שיכון ותיקים",
      "la":'32.297390',
      "lo":'34.882092',
      "gravestone": "https://matzeva.co.il/wp-content/uploads/2015/11/--------------------------.jpg"
    },
    {
      "id": 2,
        "firsrname": "דני",
        "lastname": "מולי",
        "dad": "סמי",
        "mom": "אנה",
        "cuntry_born":"מרוקו",
        "adress_dead":"בית עלמין נווה הדר הוד השרון",
        "Summary": "ולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי קולהע צופעט למרקוח איבן איף, ברומץ",
      "date_dead":"21/03/2014",
      "date_born":"01/01/1964",
      "age":"50",
      "adress_moov":"בית עלמין הוד השרון החדש נווה הדר",
      "la":'32.138030',
      "lo":'34.875320',
      "gravestone": "https://www.ab.lanegev.co.il/images/27.jpg"
    },
    {
      "id": 3,
      
        "firsrname": "אלי",
        "lastname": "משה",
        "dad": "מני",
        "mom": "ריבקה",
        "cuntry_born":"גרמניה",
        "adress_dead":"בית עלמין סגולה",
        "Summary": "ולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי קולהע צופעט למרקוח איבן איף, ברומץ",
      "date_dead":"21/03/2013",
      "date_born":"01/01/1964",
      "age":"49",
      "adress_moov":"בית עלמין ירקון",
      "la":'32.11588',
      "lo":'34.87037',
      "avatar": "",
      "gravestone": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbGJz_AsJMg-RTELX3Oluxx1JTM1M_y_O9zSFvr7T8DHTya9OA&usqp=CAU"
    },
    {
      "id": 4,
        "firsrname": "שרה",
        "lastname": "קוני",
        "dad": "ארז",
        "mom": "לולה",
        "cuntry_born":'ארה"ב',
        "adress_dead":"בית עלמין סגולה",
        "Summary": "ולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי קולהע צופעט למרקוח איבן איף, ברומץ",
      
      "gender":"female",
      "date_dead":"21/03/2015",
      "date_born":"01/01/1964",
      "age":"51",
      "adress_moov":"בית עלמין סגולה",
      "la":'32.103367',
      "lo":'34.887976',
      "avatar": "",
      "gravestone": "https://www.winkler.co.il/gweb/Moduls/Files/ajaxplorer/data/files/categories/%D7%9E%D7%A9%D7%A4%D7%97%D7%AA%D7%99%D7%95%D7%AA%20%D7%9E%D7%9B%D7%A4%D7%9C%D7%95%D7%AA/16170.jpg"
    }
  ]

  res.status(200).json(users)

})

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);
console.log('Runing....');