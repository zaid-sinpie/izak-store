const CategoriesBar = ({ list }) => {
  return (
    <article className="w-full flex items-center justify-start gap-2 px-2 bg-[#e8ffaa] overflow-x-auto scrollbar-hide">
      {list.map((item) => {
        return <p className="px-[100px] ">{item}</p>;
      })}
    </article>
  );
};

export default CategoriesBar;
