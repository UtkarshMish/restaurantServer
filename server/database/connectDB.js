import mongoose from "mongoose";
import { config } from "dotenv";
config();
export async function connectDB() {
	const { USERNAME, PASSWORD, URI } = process.env;
	const MONGO_KEY = `mongodb+srv://${USERNAME}:${PASSWORD}@${URI}`;
	const OPTIONS = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true };

	await mongoose.connect(MONGO_KEY, OPTIONS, function (err) {
		if (err) throw err;
		console.log("Database connected!");
		// db.close();
	});
}
