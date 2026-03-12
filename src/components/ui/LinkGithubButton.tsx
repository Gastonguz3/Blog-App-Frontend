import { Github } from "lucide-react"

interface LinkButtonProps {
    href: string,
    children: string
}

const LinkGithubButton = ({href, children} : LinkButtonProps) => {
  return (
    <a
          href= {href}
          target="_blank"
          className="w-full bg-black py-3 font-semibold text-white hover:bg-gray-400 hover:text-black cursor-pointer transition duration-300 flex justify-center"
        >
          <Github className="mx-3" />
          <span>{children}</span>
    </a>
  )
}

export default LinkGithubButton