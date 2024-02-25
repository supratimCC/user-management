import * as Yup from "yup";

const RoleAddValidationSchema = Yup.object().shape({
  role: Yup.string()
    .strict()
    .trim("Whitespace is not allowed")
    .lowercase("only lowercase is allowed")
    .max(15, "Not morethen 15 cheracter is allowed.")
    .min(2, "Minumum 2 cheracter is required. ")
    .matches(/^[A-Za-z0-9\-/]+$/, 'Only alpha numeric and "-" is allowed. ')
    .required("Role name is required."),
});

module.exports = {
  RoleAddValidationSchema,
};
