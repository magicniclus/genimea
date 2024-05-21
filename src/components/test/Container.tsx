type ContainerProps = {
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  return (
    <section className="w-full px-4 md:px-6 mt-5">
      <div className="max-w-5xl w-full mx-auto md:bg-slate-100 rounded-xl flex flex-col items-center px-12 py-12">
        {props.children}
      </div>
    </section>
  );
};

export default Container;
