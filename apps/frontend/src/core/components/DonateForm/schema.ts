import * as yup from 'yup';
export const schema = yup.object().shape({
  amount: yup
    .number()
    .required('Required field')
    .min(1, 'Donation amount must be greater than 0'),
  currency: yup.string().required('Required field'),
});
