import React, { useEffect, useMemo, useState } from "react";
import { useAppContext } from "../context/AppContext";
import SearchInput from "../components/SearchInput";
import Item from "../components/Item";

const Collection = () => {
  const { products, searchQuery } = useAppContext();
  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);
  const [selectedSort, setSelectedSort] = useState("relevant");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [availableTypes, setAvailableTypes] = useState([]);
  const itemsPerPage = 8;

  const allCategories = useMemo(
    () => ["Hair Care", "Body Care", "Face Care"],
    []
  );

  const toggleFilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  useEffect(() => {
    const selectedCats = category.length > 0 ? category : allCategories;
    const filteredProducts = products.filter((p) =>
      selectedCats.includes(p.category)
    );
    const typesSet = new Set(filteredProducts.map((p) => p.type));
    const newAvailableTypes = [...typesSet].sort();
    setAvailableTypes(newAvailableTypes);
    //remove unavailable types from selection
    setType((prev) => prev.filter((t) => typesSet.has(t)));
  }, [category, products, allCategories]);

  // apply filter like search, category, type and inStock
  const applyFilters = () => {
    let filtered = [...products];
    filtered = filtered.filter((p) => p.inStock);
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (category.length) {
      filtered = filtered.filter((p) => category.includes(p.category));
    }
    if (type.length) {
      filtered = filtered.filter((p) => type.includes(p.type));
    }
    return filtered;
  };

  // sorting logic based on price or relevant
  const applySorting = (productList) => {
    switch (selectedSort) {
      case "low":
        return [...productList].sort(
          (a, b) =>
            Math.min(...Object.values(a.price)) -
            Math.min(...Object.values(b.price))
        );
        break;
      case "high":
        return [...productList].sort(
          (a, b) =>
            Math.min(...Object.values(b.price)) -
            Math.min(...Object.values(a.price))
        );
        break;
      default:
        return productList;
        break;
    }
  };
  // update filtered and sorted products
  useEffect(() => {
    let filtered = applyFilters();
    let sorted = applySorting(filtered);
    setFilteredProducts(sorted);
    setCurrentPage(1);
  }, [category, type, searchQuery, products]);

  // handle Pagination logic
  const getPaginatedProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };
  console.log(getPaginatedProducts());
  console.log(products);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="max-padd-container !px-0 mt-20 mb-4">
      <div className="flex flex-col sm:flex-row gap-8 mb-16">
        {/* Filter Option */}
        <div className="min-w-72 bg-primary p-4 pl-6 lg:pl-12 rounded-r-xl">
          <SearchInput />
          <div className="px-4 py-3 mt-2 bg-white rounded-xl">
            <h5 className="mb-4">Sort By</h5>
            <select
              onChange={(e) => setSelectedSort(e.target.value)}
              className="border border-slate-900/10 outline-none text-gray-500 medium-14 h-8 w-full px-2 rounded-md"
              name=""
              id=""
            >
              <option value="relevant">Relevant</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="px-4 py-3 mt-2 bg-white rounded-xl">
            <h5 className="mb-4">Sort By</h5>
            <div className="flex flex-col gap-2 text-sm font-light">
              {allCategories.map((cat) => (
                <label className="flex gap-2 medium-14 text-gray-50" key={cat}>
                  <input
                    checked={category.includes(cat)}
                    onChange={(e) => toggleFilter(e.target.value, setCategory)}
                    type="checkbox"
                    value={cat}
                    className="w-3"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>
          <div className="px-4 py-3 mt-4 bg-white rounded-xl">
            <h5 className="mb-4">Types</h5>
            <div className="flex flex-col gap-2 text-sm font-light">
              {availableTypes.map((t) => (
                <label key={t} className="flex gap-2 text-gray-500">
                  <input
                    type="checkbox"
                    value={t}
                    checked={type.includes(t)}
                    onChange={(e) => toggleFilter(e.target.value, setType)}
                    className="w-3"
                  />
                  {t}
                </label>
              ))}
            </div>
          </div>
        </div>
        {/* right side - filtered products */}
        <div className="max-sm:px-10 sm:pr-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-12">
            {getPaginatedProducts().length > 0 ? (
              getPaginatedProducts().map((product) => (
                <Item product={product} key={product._id} />
              ))
            ) : (
              <p className="capitalize">
                No products found for selected filters
              </p>
            )}
          </div>
          {/* pagination */}
          <div className="flexCenter flex flex-wrap mt-14 mb-10 gap-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`btn-seconday !py-1 !px-3 ${
                currentPage === 1 && "opacity-50 cursor-not-allowed"
              }`}
            >
              Previos
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`btn-light !py-1 !px-3 ${
                  currentPage === index + 1 && "bg-secondary text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`btn-seconday !py-1 !px-3 ${
                currentPage === totalPages && "opacity-50 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
