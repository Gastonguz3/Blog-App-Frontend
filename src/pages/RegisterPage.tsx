import FormRegister from "../components/Form/FormRegister"

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center p-10 ">
      <div className="bg-white flex w-full max-w-6xl overflow-hidden border-4 border-purple-500">
        <FormRegister/>
      </div>
    </div>
  )
}

export default RegisterPage