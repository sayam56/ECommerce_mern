const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const path = require ('path');
const cors = require ('cors');

// here we import the router
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');


// environment variables configurator
env.config();

// mongoDB connection
// mongodb://root:<password>@flipcluster-shard-00-00.94mqt.mongodb.net:27017,flipcluster-shard-00-01.94mqt.mongodb.net:27017,flipcluster-shard-00-02.94mqt.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-stf3qs-shard-0&authSource=admin&retryWrites=true&w=majority
mongoose.connect(
     `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@flipcluster-shard-00-00.94mqt.mongodb.net:27017,flipcluster-shard-00-01.94mqt.mongodb.net:27017,flipcluster-shard-00-02.94mqt.mongodb.net:27017/${process.env.MONGO_DB_DBNAME}?ssl=true&replicaSet=atlas-stf3qs-shard-0&authSource=admin&retryWrites=true&w=majority`,
     {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
     }
).then((message) =>{
     console.log('db connected successfully');
}).catch((e) => {
     console.log(e);
});


app.use(cors());

// this is to parse the json data from incoming payload body parser is a middle wear
app.use(express.json());
app.use(express.urlencoded({
     extended: true
}));

app.use('/public', express.static(path.join(__dirname, 'uploads')));
// now we use the router which is now prefixed by /api
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);


app.listen(process.env.PORT, () => {
     console.log(`Server is running on port ${process.env.PORT}`);
});