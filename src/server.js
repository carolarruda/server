import "dotenv/config";
import express from "express";
import cors from "cors";
// import recipeRouter from './routes/recipe.js'

const app = express();
app.disable("x-powered-by");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/recipes", recipeRouter);

app.get("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    data: {
      resource: "Not found",
    },
  });
});

export default app;
