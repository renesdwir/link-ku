if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;
const { Visitors } = require("./models");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/visitors", async (req, res) => {
  try {
    const visitors = await Visitors.findByPk(1);
    const update = await visitors.update({
      totalVisitor: visitors.totalVisitor + 1,
    });
    const afterUpdate = await Visitors.findByPk(1);
    res.status(200).json(afterUpdate);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
