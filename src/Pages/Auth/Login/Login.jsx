import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const passwordVisible = () => {
    setShowPassword(showPassword ? false : true);
  };
  const { signIn, loading } = useContext(AuthContext);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const redirect = queryParams.get("redirect");
  const router = useNavigate();

  const onSubmit = async (data) => {
    try {
      signIn(data.email, data.password)
        .then((result) => {
          const user = result.user;
          Swal.fire({
            position: "top-end",
            timerProgressBar: true,
            title: "Successfully Login Done !",
            iconColor: "#ED1C24",
            toast: true,
            icon: "success",
            showClass: {
              popup: "animate__animated animate__fadeInRight",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutRight",
            },
            showConfirmButton: false,
            timer: 3500,
          });

          if (redirect) {
            router(`/${redirect}`);
          } else {
            router("/dashboard");
          }
        })
        .catch((err) => {
          Swal.fire({
            position: "top-end",
            timerProgressBar: true,
            title: err.message,
            iconColor: "#ED1C24",
            toast: true,
            icon: "error",
            showClass: {
              popup: "animate__animated animate__fadeInRight",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutRight",
            },
            showConfirmButton: false,
            timer: 3500,
          });
        });
    } catch (error) {
      console.log(error);

      Swal.fire({
        position: "top-end",
        timerProgressBar: true,
        title: error.message,
        iconColor: "#ED1C24",
        toast: true,
        icon: "error",
        showClass: {
          popup: "animate__animated animate__fadeInRight",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutRight",
        },
        showConfirmButton: false,
        timer: 3500,
      });
    }
  };

  return (
    <section className="container">
      <div className="bg-white md:px-16 my-[2rem] md:w-[60%] mx-auto p-4">
        <div className=" flex flex-col gap-4">
          <div className="xxs:px-[25px] xs:px-[30px] sm:px-[30px] md:px-[30px] lg:px-[28px] xl:px-[40px] py-10  bg-[#f7f7f7] shadow-md rounded-lg">
            <h4 className="xs:text-2xl xxs:text-md sm:text-3xl md:text-3xl">
              Account details
            </h4>
            <p className="mt-4 text-[15px] text-[#676767] font-[400]">
              You only need to answer a few straightforward questions.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4 my-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="text-[15px] font-[500] rounded-lg px-2.5 py-4 text-gray-700 leading-tight focus:outline-none shadow-md focus:shadow-outline w-full"
                  {...register("email")}
                  required
                />
              </div>
              <div className="relative my-6">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md px-2.5 py-4 "
                  {...register("password")}
                />
                <span
                  className="text-[#6b7280] text-[20px] absolute  top-[18px] inset-y-0 right-0 pr-3 flex "
                  onClick={passwordVisible}
                >
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </span>
              </div>

              <div className="flex justify-center items-center md:flex-row flex-col my-6 gap-4">
                <div className="flex items-center  sm:col-span-6 xxs:col-span-12 sm:justify-start xxs:justify-center">
                  <p className="text-base text-normal">
                    Dont Have Account?{" "}
                    <Link to="/signup">
                      <b className="text-red-10 text-blue-500">Signup here</b>
                    </Link>
                  </p>
                </div>
                <div className="flex sm:col-span-6 xxs:col-span-12 md:justify-end xxs:justify-center">
                  <button className="uppercase common-btn">
                    {loading ? "Loading..." : "Sign In"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
