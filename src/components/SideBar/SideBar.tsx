type SideBarProps = {
  category?: Category;
  categories?: Category[];
  handleNavItemClick: (index: number) => void;
};
export type Category = {
  name: string;
  isActive: boolean;
};
const SideBar = (props: SideBarProps) => {
  return (
    <>
      <div className="flex flex-col content-start">
        <h1 className="font-bold text-2xl items-start">Book by Genres</h1>
        <div className="h-fit text-lg">
          <ul>
            {props.categories
              ? props.categories.map((item, index) => (
                  <li
                    key={index}
                    className={`p-2 hover:bg-gray-200 cursor-pointer ${item.isActive ? "bg-gray-200" : ""}`}
                    onClick={() => props.handleNavItemClick(index)}
                  >
                    {item.name}
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
