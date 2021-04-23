import express from "express";
const app = express();
import cors from "cors";
import { connectDB } from "./database/connectDB.js";
import RestaurantSchema from "./database/schemas/Restaurant.js";
import RestaurantNameSchema from "./database/schemas/RestName.js";

app.use(cors());
connectDB();

app.get("/api/restaurantLocation", async (_reqst, res) => {
	const query = RestaurantSchema.find({}, null);
	try {
		const resultItem = await query.exec();
		return res.send(resultItem);
	} catch (err) {
		res.send({ error: err.message });
	}
});

app.get("/api/restaurants", async (_req, res) => {
	let secondQuery = RestaurantNameSchema.find({}, null);
	try {
		let resultItem = await secondQuery.exec();
		return res.send(resultItem);
	} catch (err) {
		res.send({ error: err.message });
	}
});
const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => console.log("server strted on port: " + PORT));
