import FormLogin from "../components/Form/FormLogin";

const HomePage = () => {
  return (
    <div className="  flex justify-center items-center p-10 ">
      <div className="bg-white flex w-full max-w-6xl overflow-hidden border-4 border-purple-500">
        <FormLogin />
      </div>
    </div>
  );
};

export default HomePage;
