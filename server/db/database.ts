import mongoose from 'mongoose';

export default class Database {
    connect(){
        const connectionString = process.env.MONGO_CONNECTION_STRING;
        
        if (!connectionString) {
            throw new Error('MONGO_CONNECTION_STRING is not defined in the environment variables');
        }

        mongoose.connect(connectionString);
    }
}