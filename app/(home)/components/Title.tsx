import {IconType} from "react-icons";

interface TitleProps {
  text: string;
  className?: string;
  Icon?: IconType;
}

const Title = ({text, className, Icon}: TitleProps) => {
  return (
    <div className={className}>
      <h1
        className={"text-3xl font-bold flex items-center gap-3" +
          " group-hover:text-green-400 transition-all"}
      >{text} {Icon && <Icon/>}</h1>
      <div
        className={"h-2 w-40" +
          " bg-green-500 rounded-full"}
      ></div>
      <div
        className={"h-2 w-40 bg-indigo-500 rounded-full" +
          " translate-x-2"}
      ></div>
    </div>

  )
}
export default Title