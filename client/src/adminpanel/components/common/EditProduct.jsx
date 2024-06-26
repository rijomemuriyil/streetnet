import React from "react";
import AdminPanelInput from "../UI/AdminPanelInput";
import AdminPanelSelect from "../UI/AdminPanelSelect";
import AdminPanelSelectMany from "../UI/AdminPanelSelectMany";
import AdminPanelChipsInput from "../UI/AdminPanelChipsInput";
import AdminPanelTextArea from "../UI/AdminPanelTextArea";
import {
  categoriesEnum,
  getCategoryByValue,
} from "../../../utils/categoriesEnum";
import { useSelector } from "react-redux";

const EditProduct = (props) => {
  const productInfo = useSelector((state) => state.admin.productInfo);
  const categories = [];
  const categoriesId = [];

  productInfo.categoriesId?.map((category) => {
    categories.push(getCategoryByValue(category));
    categoriesId.push(category);
  });

  // console.log(categories, categoriesId);
  const handleNameInput = (value) => {
    props.setName(value);
  };

  const handlePriceInput = (value) => {
    props.setPrice(value);
  };

  const handleInStockSelect = (value) => {
    props.setInstock(value);
  };

  const handleCategoriesSelect = (value) => {
    props.setCategoriesId(value);
  };

  const handleSizesInput = (value) => {
    props.setSizes(value);
  };

  // const handleEffectsInput = (value) => {
  //   props.setEffects(value);
  // };

  // const handleRelieveInput = (value) => {
  //   props.setRelieve(value);
  // };

  // const handleIngridientsInput = (value) => {
  //   props.setIngridients(value);
  // };

  const handleShortDescriptionInput = (value) => {
    props.setShortDescription(value);
  };

  const handleDescriptionInput = (value) => {
    props.setDescription(value);
  };

  return (
    <div className="editproduct">
      <div className="editproduct-header">Edit Product Info</div>
      <div className="product-name">
        <AdminPanelInput
          label="Product Name"
          placeholder="Product Name"
          defaultValue={productInfo.name}
          onChange={handleNameInput}
        />
      </div>
      <div className="product-price-instock">
        <AdminPanelInput
          label="Price"
          suffix=".00 INR"
          placeholder="Product Price"
          defaultValue={productInfo.price}
          onChange={handlePriceInput}
        />
        <AdminPanelSelect
          label="In Stock"
          options={[
            { text: "In Stock", value: true },
            { text: "Out Of Stock", value: false },
          ]}
          selectedValueNumber={productInfo.instock ? 1 : 2}
          onChange={handleInStockSelect}
        />
      </div>
      <div className="product-categories">
        <AdminPanelSelectMany
          label="Category"
          options={[
            { text: "Vegetables", value: categoriesEnum.Vegetable },
            { text: "Fruits", value: categoriesEnum.Fruits },
            { text: "Spices", value: categoriesEnum.Spices },
            { text: "Cereals", value: categoriesEnum.Cereals },
            { text: "Others", value: categoriesEnum.Others },
          ]}
          selectedOptions={{ text: categories, values: categoriesId }}
          onChange={handleCategoriesSelect}
        />
      </div>
      <div className="product-sizes">
        <AdminPanelChipsInput
          label="Sizes"
          placeholder="Size"
          defaultChips={productInfo.sizes}
          onChange={handleSizesInput}
        />
      </div>
      {/* <div className="product-effects">
        <AdminPanelChipsInput
          label="Effects"
          placeholder="Effect"
          defaultChips={productInfo.effects}
          onChange={handleEffectsInput}
        />
      </div>
      <div className="product-relieve">
        <AdminPanelChipsInput
          label="Relieve"
          placeholder="Relieve"
          defaultChips={productInfo.relieve}
          onChange={handleRelieveInput}
        />
      </div>
      <div className="product-ingridients">
        <AdminPanelChipsInput
          label="Ingridients"
          placeholder="Ingridient"
          defaultChips={productInfo.ingridients}
          onChange={handleIngridientsInput}
        />
      </div> */}
      <div className="product-shortdescription">
        <AdminPanelTextArea
          label="Short Description"
          placeholder="Short Description..."
          defaultValue={productInfo.shortDescription}
          onChange={handleShortDescriptionInput}
        />
      </div>
      <div className="product-description">
        <AdminPanelTextArea
          label="Description"
          placeholder="Description..."
          defaultValue={productInfo.description}
          onChange={handleDescriptionInput}
        />
      </div>
    </div>
  );
};

export default EditProduct;
