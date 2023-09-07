import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import { AuthContext } from "../../../Context/UserContext";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const { register, handleSubmit, setValue } = useForm();
  const router = useNavigate();

  const passwordVisible = () => {
    setShowPassword(showPassword ? false : true);
  };
  const cPasswordVisible = () => {
    setShowCPassword(showCPassword ? false : true);
  };
  const { signUp, updateUserDetails, loading } = useContext(AuthContext);

  const signUpHandler = async (dataValue) => {
    const role = "user";
    const { fullName, email, password, profilePicture } = dataValue;
    await signUp(email, password, profilePicture)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, "user info");
        Swal.fire({
          position: "top-end",
          timerProgressBar: true,
          title: "Successfully Sign Up Done !",
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
        const profileInfo = {
          displayName: fullName,
          role: role,
        };
        updateUserDetails(profileInfo);
        router("/login");
        //   .then(async () => {
        //     try {
        //       await axios
        //         .post(`${baseUrl}/api/user`, {
        //           fullName: fullName,
        //           role: role,
        //           email: email,
        //         })
        //         .then((response) => {
        //           console.log(response.data);
        //         })
        //         .catch((error) => {
        //           console.log("error", error);
        //         });
        //     } catch (error) {
        //       console.log("error", error);
        //       Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         confirmButtonColor: "#ED1C24",
        //         text: error.message,
        //       });
        //     }
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        Swal.fire({
          icon: "error",
          title: errorMessage,
          text: "User already registered!",
          confirmButtonColor: "#ED1C24",
        });
      });
  };

  return (
    <section className="container">
      <div className="bg-white md:px-16 my-[2rem] w-[80%] mx-auto p-4">
        <div className=" flex flex-col gap-4">
          <div className="xxs:px-[25px] xs:px-[30px] sm:px-[30px] md:px-[30px] lg:px-[28px] xl:px-[40px] py-10  bg-[#f7f7f7] shadow-md rounded-lg">
            <h4 className="xs:text-2xl xxs:text-md sm:text-3xl md:text-3xl">
              Account details
            </h4>
            <p className="mt-4 text-[15px] text-[#676767] font-[400]">
              You only need to answer a few straightforward questions.
            </p>
            <form onSubmit={handleSubmit(signUpHandler)}>
              <div className="flex flex-col gap-4 my-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  className="text-[15px] font-[500] shadow-md rounded-lg px-2.5 py-4 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("fullName")}
                />
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

              <div className="relative mb-6">
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className="text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md px-2.5 py-4 "
                  {...register("confirmPassword")}
                />
                <span
                  className="text-[#6b7280] text-[20px] absolute   top-[18px] inset-y-0 right-0 pr-3 flex "
                  onClick={cPasswordVisible}
                >
                  {showCPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </span>
              </div>

              <div>
                <input
                  type="file"
                  accept="image/*"
                  name="profilePicture"
                  className="text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md px-2.5 py-4 border-2 border-gray-300"
                  onChange={(e) => {
                    const selectedFile = e.target.files[0];
                    setValue("profilePicture", selectedFile);
                  }}
                />
              </div>

              <div className="flex justify-center items-center md:flex-row flex-col my-6 gap-4">
                <div className="flex items-center  sm:col-span-6 xxs:col-span-12 sm:justify-start xxs:justify-center">
                  <p className="text-base text-normal">
                    Have already an account?{" "}
                    <Link to="/login">
                      <b className="text-red-10 text-blue-500">Login here</b>
                    </Link>
                  </p>
                </div>
                <div className="flex sm:col-span-6 xxs:col-span-12 md:justify-end xxs:justify-center">
                  <button className="uppercase common-btn">
                    {loading ? "Loading..." : "Sign Up"}
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

export default Signup;
