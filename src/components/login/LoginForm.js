import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/loginSchema";
import { BASE_URL } from "../../constants/api";
import FormError from "../common/FormError";

const url = `${BASE_URL}/auth/local`;

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [, setAuth] = useContext(AuthContext);

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
    try {
      const response = await axios.post(url, data);
      setAuth(response.data);
      history.push("/admin");
    } catch (error) {
      setLoginError(error.toString());
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FormError>{loginError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <input name="identifier" placeholder="Username" ref={register} />
            {errors.identifier && (
              <FormError>{errors.identifier.message}</FormError>
            )}
          </div>
          <div>
            <input
              name="password"
              placeholder="Password"
              ref={register}
              type="password"
            />
            {errors.password && (
              <FormError>{errors.password.message}</FormError>
            )}
          </div>
          <button>{submitting ? "Logging in..." : "Login"}</button>
        </fieldset>
      </form>
    </>
  );
}
