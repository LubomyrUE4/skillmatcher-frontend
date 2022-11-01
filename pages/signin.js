import { Layout } from "../components/layout";
import { SignInForm } from "../components/ui";

export default function SignIn() {
  return (
    <Layout>
      <div className="h-[100vh] flex flex-col justify-center">
        <p className="mb-10 text-4xl text-center font-semibold text-gray-900 dark:text-white">
          Skill Mather
        </p>
        <SignInForm />
      </div>
    </Layout>
  );
}
