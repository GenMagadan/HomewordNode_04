const Joi = require('joi');

const bookScheme = Joi.object({
  author: Joi.string().min(2).required(),
  book_title: Joi.string().min(2).required(),
  number_of_book_characters: Joi.number().min(1000).required(),
  genre: Joi.string().min(3).required(),
});

const idScheme = Joi.object({
  id: Joi.number().required(),
});

module.exports = { bookScheme, idScheme };
