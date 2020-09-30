import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      product_name: Yup.string(),
      product_info: Yup.string(),
      product_department: Yup.string(),
      product_color: Yup.string(),
      product_material: Yup.string(),
      product_price: Yup.number(),
      product_stock: Yup.number(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails.', messages: err.inner });
  }
};
