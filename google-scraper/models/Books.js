const mogoose = require('mongoose');
const schema = mongoosse.schema;

const BookSchema = new schema({
    title: String,
    authors: [String],
    description: String,
    image: String,
    link: String
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;