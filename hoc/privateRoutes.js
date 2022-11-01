import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getIsLoggedInStatus } from "../store/auth/auth.selectors";
import { loadAccount } from "../store/account/account.actions";
import { getAccountData } from '../store/account/account.selectors'
import { localStorageService } from '../services'

export const allowedRoutes = ["/signup", "/signin"];

export default function PrivateRoutes({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedInStatus = useSelector(getIsLoggedInStatus());
  const accountData = useSelector(getAccountData())

  useEffect(() => {
    if (isLoggedInStatus) {
      dispatch(loadAccount());
      if (allowedRoutes.includes(router.asPath)) {
        const isCandidate = localStorageService.getAccountRole() === 'Candidate'
        console.log('is can: ', isCandidate)
        router.push(isCandidate ? '/cabinet' : '/')
      }
    } else if (!isLoggedInStatus && !allowedRoutes.includes(router.asPath)) {
      router.push("/signup");
    }
  }, [router.asPath, isLoggedInStatus]);

  return children;
}
