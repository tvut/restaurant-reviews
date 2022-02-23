import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js"

const app = express()

app.use(cors())
//allows the app to receive json in body of request
app.use(express.json())

//routing
app.use("/api/v1/restaurants", restaurants)
//handles pages that don't exist
app.use("*", (req, res) => res.status(404).json({error: "not found"}))

export default app