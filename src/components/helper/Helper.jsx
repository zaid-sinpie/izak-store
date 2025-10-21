const Nav = ({ list }) => {
  return (
    <ul className="flex justify-center gap-4 uppercase tracking-wider max-sm:hidden">
      {list.map((item, index) => {
        return (
          <a key={index} href={item.link}>
            <li>{item.title}</li>
          </a>
        );
      })}
    </ul>
  );
};

const Wrapper = ({ children }) => {
  return (
    <section
      className={`h-screen bg-[#fcffeb] flex justify-center items-start`}
    >
      {children}
    </section>
  );
};

export { Nav, Wrapper };
