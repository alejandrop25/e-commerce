const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json);

const PORT = 3000;

mongoose.connect("mongodb+srv://alejandrop2506:password@cluster0.trhco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Favorite = mongoose.model("Favorite", new mongoose.Schema({
    name: String,
    price: Number,
    image: String
}));

const Cart = mongoose.model("Cart", new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    quantity: Number
}));

app.post("/favorites", async (req, res) => {
    const favorite = new Favorite(req.body);
    await favorite.save();
    res.send(favorite);
})

app.get("/favorites", async (req, res) => {
    const favorite = await Favorite.find();
    res.send(favorites);
});

app.post("/cart", async (req, res) => {
    const cart = new Cart(req.body);
    await cart.save();
    res.send(cart);
});

app.get("/cart", async (req, res) => {
    const cart = await Cart.find();
    res.send(cart);
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})
