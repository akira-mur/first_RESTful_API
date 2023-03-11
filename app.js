const express = require("express");
const { init, Author } = require("./models/initill");

const app = express();

app.use(express.json());

app.get("/authors", async (req, res) => {
  try {
    const items = await Author.findAll();
    return res.status(200).json({
      data: items,
    });
  } catch (e) {
    return (res.body = "error");
  }
});

app.get("/authors/:id", async (req, res) => {
  try {
    const item = await Author.findByPk(req.params.id);
    return res.status(200).json({
      data: item,
    });
  } catch (e) {
    return (res.body = "error");
  }
});

app.post("/authors", async (req, res) => {
  try {
    const item = await Author.create(req.body);
    await item.reload();
    return res.status(201).json(item);
  } catch (e) {
    return (res.body = "error");
  }
});

app.patch("/authors/:id", async (req, res) => {
  try {
    const item = await Author.findByPk(req.params.id);
    if (item) {
      item.first_name = req.body.first_name;
      item.last_name = req.body.last_name;
    }
    await item.save();
    return res.status(200).json(item);
  } catch (e) {
    return (res.body = "error");
  }
});

app.delete("/authors/:id", async (req, res) => {
  try {
    const item = await Author.findByPk(req.params.id);
    await item.destroy();
    return res.status(204).json();
  } catch (e) {
    return (res.body = "error");
  }
});

app.listen(3000, async () => {
  await init();
});
