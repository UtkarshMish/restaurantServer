import mongoose from "mongoose";
const { Schema } = mongoose;
const { String, Number } = Schema.Types;
const RestaurantSchema = mongoose.model(
	"Restaurant",
	new Schema({
		"Restaurant ID": {
			type: Number,
		},
		"Country Code": {
			type: Number,
		},
		City: {
			type: String,
		},
		Address: {
			type: String,
		},
		Locality: {
			type: String,
		},
		"Locality Verbose": {
			type: String,
		},
		Longitude: {
			type: Number,
		},
		Latitude: {
			type: Number,
		},
	})
);

export default RestaurantSchema;
