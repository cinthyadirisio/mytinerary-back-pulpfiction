const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGO_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }

).then(()=>console.log('succesfully connected to database'))
.catch(error=>console.log(error))