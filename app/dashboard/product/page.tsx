import DynamicTable from "@/app/ui/dynamicTable";
import Pagination from "@/app/ui/pagination";
import InputSearch from "@/app/ui/seachInput";
import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";
const COLUMNS = [
  {
    title: "Product code",
    dataIndex: "product_code",
    key: "product code",
  },
  {
    title: "Product name",
    dataIndex: "product_name",
    key: "product code",
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
  },
];
const DATA = [
  {
    key: "1",
    product_code: "Mike",
    product_name: "Mi1ke",
    Status: "123",
  },
  {
    key: "1",
    product_code: "Mike",
    product_name: "Mi1ke",
    Status: "123",
  },
  {
    key: "1",
    product_code: "Mike",
    product_name: "Mi1ke",
    Status: "123",
  },
  {
    key: "1",
    product_code: "Mike",
    product_name: "Mi1ke",
    Status: "123",
  },
  
];
const DashBoard = () => {
  return (
    <div>
      <div className="flex w-full gap-2 items-center mb-4">
        <a className="p-2 rounded border">
          <MdKeyboardArrowLeft />
        </a>
        <h1 className="font-bold">Product Management</h1>
      </div>
      <div className="flex w-full justify-between items-center pb-2">
        <InputSearch name="product" />
        <Link href="/dashboard/product/add">
          <button className="bg-gray-900 text-gray-300 p-1.5 rounded text-sm">
            Add New
          </button>
        </Link>
      </div>
      <DynamicTable data={DATA}  columns={COLUMNS}/>
      <Pagination number={3} />
    </div>
  );
};

export default DashBoard;
