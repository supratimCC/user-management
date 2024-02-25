import * as Yup from "yup";

const UserAddValidationSchema = Yup.object().shape({
  first_name: Yup.string()
    .strict()
    .trim("Whitespace is not allowed")
    .lowercase("only lowercase is allowed")
    .max(15, "Not morethen 15 cheracter is allowed.")
    .min(2, "Minumum 2 cheracter is required. ")
    .matches(/^[A-Za-z0-9\-/]+$/, 'Only alpha numeric and "-" is allowed. ')
    .required("First name is required."),
  last_name: Yup.string()
    .strict()
    .trim("Whitespace is not allowed")
    .lowercase("only lowercase is allowed")
    .max(15, "Not morethen 15 cheracter is allowed.")
    .min(2, "Minumum 2 cheracter is required. ")
    .matches(/^[A-Za-z0-9\-/]+$/, 'Only alpha numeric and "-" is allowed. ')
    .required("Last name is required."),
  email: Yup.string()
    .strict()
    .trim("Whitespace is not allowed")
    .lowercase("only lowercase is allowed")
    .max(15, "Not morethen 15 cheracter is allowed.")
    .min(2, "Minumum 2 cheracter is required. ")
    .email("must be a valid email")
    // .matches(/^[A-Za-z0-9\-/]+$/, 'Only alpha numeric and "-" is allowed. ')
    .required("Last name is required."),
  password: Yup.string()
    .strict()
    .trim("Whitespace is not allowed")
    .lowercase("only lowercase is allowed")
    .max(15, "Not morethen 15 cheracter is allowed.")
    .min(4, "Minumum 4 cheracter is required. ")
    .matches(
      /^[a-zA-Z0-9*$/%&@!()]+$/,
      'Only alpha numeric and "* $ / % & @ !()" are allowed. '
    )
    .required("Password name is required."),
});
