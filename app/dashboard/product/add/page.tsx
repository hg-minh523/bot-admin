/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import DynamicForm from "@/app/ui/dynamicForm";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Add product
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information will be add product to database.
        </p>
      <DynamicForm config={
        [
          {
            key: 'product_name',
            type: 'input',
            label: 'Product name'
          },
          {
            key: 'product_price',
            type: 'input',
            label: 'Product price'
          },
          {
            key: 'product_description',
            type: 'textaria',
            label: 'Product description'
          },
          {
            key: 'product_image',
            type: 'upload',
            label: 'Image'
          },
        ]
      }/>
      </div>
    </div>
  );
}
