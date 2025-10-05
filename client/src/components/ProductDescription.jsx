import React from "react";

const ProductDescription = () => {
  return (
    <div className="mt-14">
      <div className="flex gap-3 bg-primary rounded-t-2xl">
        <button className="p-3 w-32 border-b-2 border-secondary">
          Description
        </button>
        <button className="p-3 w-32 ">Color Guide</button>
        <button className="p-3 w-32 ">Size Guide</button>
      </div>
      <hr className="h-[1px] w-full text-slate-500" />
      <div className="flex flex-col gap-3 p-3">
        <div>
          <h5>Detail</h5>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            saepe aperiam aspernatur cum vitae? Ipsam, recusandae. Alias, in
            neque non iure nemo cumque blanditiis voluptates suscipit voluptate
            consectetur quam aliquam!
          </p>
        </div>
        <div>
          <h5>Benefit</h5>
          <ul className="list-disc pl-5 text-sm text-gray-600 flex flex-col gap-1">
            <li>
              High-quality materials ensure long-lasting durability and comfort
            </li>
            <li>
              High-quality materials ensure long-lasting durability and comfort
            </li>
            <li>
              High-quality materials ensure long-lasting durability and comfort
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
