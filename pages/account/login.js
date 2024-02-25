import AuthLayout from "@/layouts/AuthLayout";
import LoginForm from "@/components/Accounts/LoginForm";

export default function Login() {
  return <LoginForm />;
}

Login.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
