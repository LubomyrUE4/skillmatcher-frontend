import Link from "next/link";
import { LightBtn } from "../common";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/auth/auth.actions";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { allowedRoutes } from "../../hoc/privateRoutes";

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogOut = () => {
    dispatch(logOut());
    router.push("/signin");
  };

  return (
    <nav className="bg-white px-2 sm:px-4 py-6 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Skill Matcher
            </span>
          </a>
        </Link>
        <div className="flex md:order-2">
          {!allowedRoutes.includes(router.asPath) ? (
            <div className="w-[100px]">
              <LightBtn label="Log Out" type="button" handler={handleLogOut} />
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
