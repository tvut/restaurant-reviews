import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import RestaurantsDAO from "./api/dao/restaurantsDAO.js"
import ReviewsDAO from "./api/dao/reviewsDAO.js"

//bring in dotenv
dotenv.config()
//start mongo client
const MongoClient = mongodb.MongoClient

//get port from env variables
const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500
    })
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client=> {
        await RestaurantsDAO.injectDB(client)
        await ReviewsDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })
