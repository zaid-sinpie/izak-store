const Nav = ({ list }) => {
  return (
    <ul className="flex justify-center gap-4 uppercase tracking-wider max-sm:hidden">
      {list.map((item) => {
        return (
          <a href={item.link}>
            <li>{item.title}</li>
          </a>
        );
      })}
    </ul>
  );
};

export { Nav };
