import Search from "../assets/IconTextImages/widgets/search.svg";
import IconText from "../components/IconText";
import { ComponentProps } from "react";

type SearchBarProps = {
  size: "large" | "short";
} & ComponentProps<"div">;

const SearchBar: React.FC<SearchBarProps> = ({ size, className }) => {
  function mapSearchBar(_size: "short" | "large") {
    switch (_size) {
      case "short":
        return "w-[250px] h-[35px]";
      case "large":
        return "w-[300px] h-[50px]";
    }
  }

  return (
    <div
      className={`bg-soft-light-back rounded-[20px] flex flex-row items-center pl-[8px]   ${mapSearchBar(size)}${className ? "" + className : ""}`}
    >
      <IconText
        size={size === "large" ? "large" : "mid"}
        state="search"
        textImage={{ image: Search, text: "Type something to search..." }}
      />
    </div>
  );
};

export default SearchBar;
