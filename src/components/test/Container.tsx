type ContainerProps = {
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  return (
    <section className="w-full px-4 md:px-6">
      <div className="max-w-5xl mx-auto md:bg-slate-200/85 rounded-xl flex md:flex-row flex-col items-center px-12 py-12">
        {props.children}
      </div>
    </section>
  );
};

export default Container;
