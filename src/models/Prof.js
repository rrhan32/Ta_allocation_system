const mongoose = require('mongoose');
const connectionUrl = 'mongodb+srv://admin:admin@cluster0.0nk9cwk.mongodb.net/test';
mongoose.connect(connectionUrl, {
    useNewUrlParser : true
});

const profSchema = mongoose.Schema({
    courseCode: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    courseName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    instructorName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    ugPg: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    electiveCore: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    needToAttend: {
        type: Number,
        default: 1,
        validate(value) {
            if (value < 0) {
                throw new Error('value must be positive');
            }
        }
    },
    nof: {
        type: Number,
        required: true
    },
    theoryLab: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    // cgpa: {
    //     type: Number,
    //     required: true
    // },
    courseGrade: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    taRollNumber1: {
        type: String,
        trim: true,
        lowercase: true
    },
    taRollNumber2: {
        type: String,
        trim: true,
        lowercase: true
    },
    taRollNumber3: {
        type: String,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
});

// Create the model using the schema
const PROF = mongoose.model('PROF', profSchema);

// Export the model for use in other files
module.exports = PROF;

