interface PrimaryButtonProps {
    type?: "submit" | "reset" | "button" | undefined,
    onClick?: () => void,
    children: string
}


const PrimaryButton = ({type = "button", onClick, children} : PrimaryButtonProps) => {
  return (
    <button
          type={type}
          className="w-full bg-yellow-400 rounded-full py-3 font-semibold hover:bg-amber-500 hover:text-white cursor-pointer transition duration-300"
          onClick= {onClick}
        >
          {children}
    </button>
  )
}

export default PrimaryButton