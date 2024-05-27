const Banner = () => {
  return (
    <div className="flex items-center gap-x-6 bg-indigo-600 px-6 py-2.5 sm:px-3.5 justify-center flex-col md:flex-col text-center">
      <a
        href="#checkout"
        className="text-sm leading-6 text-white cursor-pointer"
      >
        <strong className="font-semibold">Special Welcome Offer</strong>
        <svg
          viewBox="0 0 2 2"
          className="mx-2 inline h-0.5 w-0.5 fill-current"
          aria-hidden="true"
        >
          <circle cx={1} cy={1} r={1} />
        </svg>
        Get 85% Discount Today!
      </a>
    </div>
  );
};

export default Banner;
