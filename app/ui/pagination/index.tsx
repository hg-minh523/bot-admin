import { MdSearch } from "react-icons/md";

const Pagination = ({ number }: { number: number }) => {
  return (
    <div className="flex w-full justify-end gap-2 items-center">
      {Array.from({ length: number }).map((_, index) => (
        <button key={number} className="bg-gray-900 text-gray-300 px-4 py-2 mt-4 rounded text-sm">
          {index + 1}
        </button>
      ))}
      
    </div>
  );
};
export default Pagination;
