import * as yup from "yup";
const emailRegChecker = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

export const contactSchema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name").min(3),
  lastName: yup.string().required("Please enter your first name").min(4),
  select: yup.string().required("Please select one of the options"),
  email: yup
    .string()
    .required("Please enter a valid email ")
    .matches(emailRegChecker, "Must be a valid Email"),
  message: yup.string().required("Please enter your message").min(10),
});
