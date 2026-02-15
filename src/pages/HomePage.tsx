import FormLogin from "../components/FormLogin";

const HomePage = () => {
  return (
    <div className="bg-purple-600 flex justify-center items-center p-10 ">
      <div className="bg-white flex w-full max-w-6xl rounded-full overflow-hidden">
        <FormLogin/>
      </div>
    </div>
  );
};

export default HomePage;
