import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useLogin() {
  const navegate = useNavigate()

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log(user)
      navegate('/dashboard')
    },
    onError: (err) => {
      console.log('ERROR', err)
      toast.error("Provided email or password are incorrect")
    }
  })
  return { login, isLoading }
}