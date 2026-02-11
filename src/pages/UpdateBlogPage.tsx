import FormPublication from "../components/FormPublication";

const UpdateBlogPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-200  py-20">
        <FormPublication title="ACTUALIZAR NOTA" greenAction="Actualizar" />
      </div>
    </div>
  );
};

export default UpdateBlogPage;
