// src/Table.js
import React, { useState, useEffect } from "react";
import {
  saveDataToLocalStorage,
  loadDataFromLocalStorage,
} from "../utils/LocalStorage";


import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";




const TableComponent = () => {
  const [data, setData] = useState(() => {
    const savedData = loadDataFromLocalStorage("tableData");
    return (
      savedData || [
        { name: "John Doe", age: 28 },
        { name: "Jane Smith", age: 34 },
      ]
    );
  });

  const [editIdx, setEditIdx] = useState(-1);

  useEffect(() => {
    saveDataToLocalStorage("tableData", data);
  }, [data]);

  const handleEdit = (index) => {
    setEditIdx(index);
  };

  const handleSave = () => {
    setEditIdx(-1);
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, idx) => idx !== index);
    setData(newData);
  };

  const handleChange = (e, index, key) => {
    const { value } = e.target;
    const newData = [...data];
    newData[index][key] = value;
    setData(newData);
  };

  return (
    <div className="flex justify-center py-10">
      <table className="w-[100rem] flex justify-center items-center flex-col bg-white border border-gray-200 rounded-md shadow-md">
        <thead className="w-full">
          <tr className="w-full flex shadow dark:bg-gray-700 dark:border-gray-400 border-b">
            <th className="flex justify-center items-center px-4 py-4 border-b border-gray-200">
              <div className="flex justify-center items-center rounded-md ml-4  mr-7 h-6 w-6 border-2 border-gray-300">
                <input
                  className="h-8 w-8 rounded-md outline-none border border-gray-300"
                  type="checkbox"
                  name=""
                  id=""
                />
              </div>
            </th>
            <th
              scope="col"
              className="w-full flex dark:text-gray-200 items-center text-lg text-left whitespace-nowrap px-4 py-6 "
            >
              Invoice ID
            </th>
            <th
              scope="col"
              className="w-full text-lg dark:text-gray-200 text-left whitespace-nowrap py-6"
            >
              Date
            </th>

            <th
              scope="col"
              className="w-full text-lg dark:text-gray-200 text-left whitespace-nowrap py-6"
            >
              Customer
            </th>

            <th
              scope="col"
              className="w-full text-lg dark:text-gray-200 text-left whitespace-nowrap py-6 pr-3"
            >
              Payable Amount
            </th>
            <th
              scope="col"
              className="w-full text-lg dark:text-gray-200 text-left whitespace-nowrap py-6 pr-3"
            >
              Paid Amount
            </th>
            <th
              scope="col"
              className="w-full text-lg dark:text-gray-200 text-left whitespace-nowrap py-6"
            >
              Due
            </th>
            <th
              scope="col"
              className="w-full text-lg dark:text-gray-200 text-left whitespace-nowrap py-6"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr
                key={index}
                className="w-full flex shadow dark:bg-gray-700 dark:border-gray-400 border-b"
              >
                {/* border w-10 h-16 flex items-center justify-start */}
                <td className="flex justify-center items-center px-4 py-4 border-b border-gray-200">
                  <div className="flex justify-center items-center rounded-md ml-4  mr-7 h-6 w-6 border-2 border-gray-300">
                    <input
                      className="h-8 w-8 rounded-md outline-none border border-gray-300"
                      type="checkbox"
                      name=""
                      id=""
                    />
                  </div>
                </td>
                {Object.keys(row).map((key, colIndex) => (
                  <td
                    key={colIndex}
                    className="w-full flex dark:text-gray-200 items-center text-lg text-left whitespace-nowrap px-4 py-6"
                  >
                    {editIdx === index ? (
                      <input
                        type="text"
                        value={row[key]}
                        onChange={(e) => handleChange(e, index, key)}
                        className="border rounded-md px-2 w-32 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      row[key]
                    )}
                  </td>
                ))}
                <td className="w-full flex dark:text-gray-200 items-center text-lg text-left whitespace-nowrap px-4 py-6">
                  {editIdx === index ? (
                    <button
                      onClick={handleSave}
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    >
                      <FaSave/>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-green-500 shadow-md text-white px-4 py-2 rounded-md hover:bg-white hover:text-green-500"
                    >
                      <FaEdit/>
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-300 text-red-500 px-4 py-2 ml-2 rounded-md hover:text-red-300 hover:bg-red-600"
                  >
                    <MdDelete/>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center py-4 text-gray-500">
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
