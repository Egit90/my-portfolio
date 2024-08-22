const Line = ({ Section }: { Section: string }) => {
  return (
    <div className="relative flex mt-10  items-center">
      <div className="flex-grow border-t border-gray-400"></div>
      <span className="flex-shrink mx-4 text-gray-400">{Section}</span>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
};

export default Line;
