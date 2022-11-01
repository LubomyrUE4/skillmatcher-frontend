import { TextField, PurpleBtn } from "../../common";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { signIn } from "../../../store/auth/auth.actions";

export default function SignInForm() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignIn = (data) => {
    dispatch(signIn({ router, ...data }));
  };

  return (
    <div className="flex justify-center">
      <div className="w-full p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <p className="text-xl text-center mb-6 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign In
        </p>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <TextField
            register={register}
            id="email"
            type="email"
            placeholder="Email"
          />
          <TextField
            register={register}
            id="password"
            type="password"
            placeholder="Password"
          />
          <div className="w-full flex justify-center py-5">
            <PurpleBtn label="Sign in" type="submit" />
          </div>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <button
              onClick={() => router.push("/signup")}
              className="font-medium text-blue-500 hover:underline dark:text-primary-500"
            >
              Sign up
            </button>
          </p>{" "}
        </form>
      </div>
    </div>
  );
}
