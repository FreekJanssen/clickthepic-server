const { Router } = require("express");
const Card = require("../models").card;

const router = new Router();

router.post("/", async (req, res) => {
  const { language, category } = req.body;

  try {
    const cards = await Card.findAll({
      where: {
        language: language,
        category: category.toLowerCase(),
      },
    });

    return res.send(cards);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong" });
  }
});

module.exports = router;
