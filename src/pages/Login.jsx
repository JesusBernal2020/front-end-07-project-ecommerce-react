import { useForm } from 'react-hook-form';

/* eslint-disable react/no-unescaped-entities */
const Login = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <section className="bg-[#f7f7f7] grid place-content-center p-4">
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white rounded-xl p-4 grid gap-6 shadow-lg"
        action=""
      >
        <h3 className="font-semibold text-2xl max-w-[350px]">
          Welcome! Enter your email and password to continue
        </h3>

        <section className="bg-[#d8f5fd] p-4 rounded-md py-2">
          <h5 className="text-center font-bold mb-4">Test data</h5>
          <div className="flex items-center gap-2">
            <i className="bx bxs-envelope text-xl"></i>
            <span>john@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="bx bxs-lock text-xl"></i>
            <span>john1234</span>
          </div>
        </section>
        <div className="grid gap-2">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            {...register('email')}
            className="border-[1px] border-gray-300 outline-none p-2 rounded-sm"
            id="email"
            type="email"
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <input
            {...register('password')}
            className="border-[1px] border-gray-300 outline-none p-2 rounded-sm"
            id="password"
            type="password"
          />
        </div>

        <button className="block w-full text-white py-2 bg-emerald-300 hover:bg-emerald-400 transition-all duration-300 ease-in-out">
          Login
        </button>

        <span className="text-sm">Don't have an account? Sign up</span>
      </form>
    </section>
  );
};

export default Login;
