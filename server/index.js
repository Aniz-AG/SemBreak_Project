import cors from "cors";
import express from "express";
import records from "./routes/record.js";
const {connectMongoDb}=require ('./connection');

const PORT=process.env.PORT || 2222;
connectMongoDb('URL'); 

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});