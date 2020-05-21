import * as mongoose from 'mongoose';

const uri =
	'mongodb+srv://lendj:461barnowls@cluster0-gtem3.mongodb.net/test?retryWrites=true&w=majority';

const options = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: true,
	useUnifiedTopology: true,
};

const connectDB = async () => {
	mongoose
		.connect(uri, options)
		.then(() => {
			console.log(`Connected to MongoDB Atlas...`);
		})
		.catch((err) => {
			console.log(`Could not connect to MongoDB Atlas... ${err}`);
		});
};

export default connectDB;
