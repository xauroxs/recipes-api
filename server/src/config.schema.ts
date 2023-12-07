import * as Joi from 'joi';

const configValidationSchema = Joi.object({
  MONGO_DB_URI: Joi.string().required(),
});

export default configValidationSchema;
