import { Layout } from "../components/layout";
import { SignUpForm } from "../components/ui";

export default function SignUp() {
  return (
    <Layout>
      <div className="h-[100vh] flex flex-col justify-center">
        <p className="mb-10 text-4xl text-center font-semibold text-gray-900 dark:text-white">
          Skill Mather
        </p>
        <SignUpForm />
      </div>
    </Layout>
  );
}
