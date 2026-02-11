import FormPublication from "../components/FormPublication";

const CreateBlogPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-200  py-20">
        <FormPublication title="NUEVA NOTA" greenAction="Publicar" />
      </div>
    </div>
  );
};

export default CreateBlogPage;
