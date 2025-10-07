import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets, dummyDashboardData } from "../../assets/data";

const Dashboard = () => {
  const { user, currency } = useAppContext();
  const [dashBoardData, setDashBoardData] = useState({
    orders: [],
    totalOrders: 0,
    totalRevenue: 0,
  });

  const getDashBoardData = () => {
    setDashBoardData(dummyDashboardData);
  };
  useEffect(() => {
    if (user) {
      getDashBoardData();
    }
  }, [user]);
  return (
    <div className="md:px-8 py-6 xl:py-8 m-1 sm:m-3 h-[97vh] overflow-y-scroll lg:w-11/12 bg-primary shadow rounded-xl">
      <div className="grid grid-cols-2 gap-4">
        <div className="flexStart gap-7 p-5 bg-sky-200 lg:min-w-56 rounded-xl">
          <img src={assets.graph} alt="" className="hidden sm:flex w-8" />
          <div>
            <h4>{dashBoardData?.totalOrders?.toString().padStart(2, "0")}</h4>
            <h5 className="text-secondary">Total Sales</h5>
          </div>
        </div>
        <div className="flexStart gap-7 p-5 bg-amber-100 lg:min-w-56 rounded-xl">
          <img src={assets.dollar} alt="" className="hidden sm:flex w-8" />
          <div>
            <h4>{currency} {dashBoardData?.totalRevenue || 0}</h4>
            <h5 className="text-secondary">Total Earning</h5>
          </div>
        </div>
      </div>
      {/* all orders/sales */}
      <div className="bg-primary mt-4">
        {dashBoardData.orders.map((order) => (
          <div key={order._id} className="bg-white p-2 mt-2 rounded-2xl">
            {/* Products List */}
            {/* order item */}
            {order.items.map((item, idx) => (
              <div
                key={idx}
                className="text-gray-700 flex flex-col lg:flex-row gap-4 mb-3"
              >
                <div className="flex  gap-x-3">
                  <div className="bg-primary flexCenter rounded-xl">
                    <img
                      src={item.product.images[0]}
                      alt=""
                      className="max-h-20 max-w-20 object-contain"
                    />
                  </div>
                  <div className="block w-full">
                    <h5 className="uppercase line-clamp-1">
                      {item.product.title}
                    </h5>
                    <div className="flex gap-x-3 flex-wrap mt-2">
                      <div className="flex items-center gap-x-2 ">
                        <h5>Price:</h5>
                        <p>
                          {currency}
                          {item.product.price[item.size]}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <h5>Quantity:</h5>
                        <p>{item.quantity}</p>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <h5>Size:</h5>
                        <p>{item.size}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* 
          order sumary */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-t border-gray-300">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-x-2">
                  <h5>OrderId: </h5>
                  <p className="text-gray-400 text-xs break-all">{order._id}</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-x-2">
                    <h5>Payment Status: </h5>
                    <p className="text-gray-400 text-sm">
                      {order.isPaid ? "Done" : "Pending"}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <h5>Method: </h5>
                    <p className="text-gray-400 text-sm">
                      {order.paymentMethod}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-x-2">
                    <h5>Date: </h5>
                    <p className="text-gray-400 text-sm">
                      {new Date(order.createdAt).toDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <h5>Amount: </h5>
                    <p className="text-gray-400 text-sm">
                      {currency}
                      {order.amount}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-x-2">
                  <h5>Status: </h5>
                  <div className="flex items-center gap-x-1">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <p className="text-gray-400 text-sm">{order.status}</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <button className="btn-secondary !py-1 lg:py-2 rounded-xl">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
