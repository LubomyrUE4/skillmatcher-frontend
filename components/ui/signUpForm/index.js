import { TextField, SelectField, PurpleBtn } from "../../common";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { signUp } from "../../../store/auth/auth.actions";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";

const roleItems = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Recruiter",
    label: "Recruiter",
  },
  {
    value: "Candidate",
    label: "Candidate",
  },
];

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignUp = (data) => {
    console.log("sign up data: ", data);
    if (data.password !== data.confirmPassword) {
      toast.error("Password are not equal!");
      return;
    }
    dispatch(signUp({ router, ...data }));
  };

  const handleCaptchaChange = (event) => {
    console.log("event: ", event);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <p className="text-xl text-center mb-6 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign Up
        </p>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <TextField
            register={register}
            id="userName"
            type="text"
            placeholder="Username"
            options={{
              required: "Name is required field",
              pattern: {
                value: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/g,
                message: "Name entered incorrectly",
              },
            }}
            error={errors.userName?.message}
          />
          <TextField
            register={register}
            id="email"
            type="email"
            placeholder="Email"
            options={{
              required: "Email is required field",
              pattern: {
                value: /^\S+@\S+\.\S+$/g,
                message: "Email entered incorrectly",
              },
            }}
            error={errors.email?.message}
          />
          <TextField
            register={register}
            id="password"
            type="password"
            placeholder="Password"
            options={{
              required: "Password is required",
            }}
            error={errors.password?.message}
          />
          <TextField
            register={register}
            id="confirmPassword"
            type="password"
            placeholder="Confirm password"
            options={{ required: "Confirm password is required" }}
            error={errors.confirmPassword?.message}
          />
          <SelectField
            register={register}
            options={roleItems}
            id="role"
            defaultOption="Choose a role"
            validationOptions={{
              required: "Role is required",
            }}
            error={errors.role?.message}
          />
          <div className="w-full flex justify-center mt-[16px]">
            <ReCAPTCHA
              theme={"light"}
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleCaptchaChange}
            />
          </div>
          <div className="w-full flex justify-center py-5">
            <PurpleBtn label="Sign up" type="submit" />
          </div>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/signin")}
              className="font-medium text-blue-500 hover:underline dark:text-primary-500"
            >
              Login here
            </button>
          </p>{" "}
        </form>
      </div>
    </div>
  );
}
