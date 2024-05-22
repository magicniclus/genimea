type ContainerProps = {
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  return (
    <section className="w-full px-1 md:px-6 mt-5">
      <div className="max-w-5xl w-full mx-auto  rounded-xl flex flex-col items-center p-4 md:p-12">
        {props.children}
      </div>
    </section>
  );
};

export default Container;
