const express = require('express')
const dotenv = require('dotenv')
const morgan =require('morgan')
const exphbs =require('express-handlebars')
const path = require('path')

const connectDB = require('./config/db');


//Load Config
dotenv.config({ path: './config/config.env' })

//Connecting Database
connectDB();
const app = express();

//Logging
if(process.env.NODE_ENV === 'development'){
    // app.use(morgan('dev'))
}

// Handlebars
app.engine(
    '.hbs',
    exphbs({
    //   helpers: {
    //     formatDate,
    //     stripTags,
    //     truncate,
    //     editIcon,
    //     select,
    //   },
      defaultLayout: 'main',
      extname: '.hbs',
    })
  )
app.set('view engine', '.hbs')

//Static Folder 
app.use(express.static(path.join(__dirname,'public')))
// Routes
app.use('/',require('./routes/index'))

const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);