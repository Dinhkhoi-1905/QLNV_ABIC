const path = require('path')
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const methodOverride = require('method-override')

const port = 3000;

const route = require('./routes');
const db = require('./config/db');
//Connect DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname);
//---HTTP logger
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
//--Chỉnh đường dẫn vào thư mục views
app.set('views', path.join(__dirname, 'resources', 'views'));

//-------Use MiddleWare----------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// override method to use PUT
app.use(methodOverride('_method'));

route(app);

//Tạo thêm công cụ
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    }
  }),
);
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    helpers: {
      formattedDate: (date)=>{
        if (date != undefined) return  date.toLocaleDateString();
        else return date;
      }
    }
  }),
);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})