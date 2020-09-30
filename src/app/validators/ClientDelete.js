import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      client_name: Yup.string(),
      client_last_name: Yup.string(),
      client_email: Yup.string().email(),
      client_telephone: Yup.number(),
      client_cellphone: Yup.number(),
      client_address: Yup.string(),
      client_city: Yup.string(),
      client_uf: Yup.string(),
      client_company_name: Yup.string(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails.', messages: err.inner });
  }
};
