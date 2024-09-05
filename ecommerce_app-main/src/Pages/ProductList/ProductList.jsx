import './ProductList.css';
import ProductBox from '../../Components/ProductBox/ProductBox';
import FilterProducts from '../../Components/FilterProducts/FilterProducts';
import { useSearchParams } from 'react-router-dom';
import useGetallProducts from '../../hooks/useGetallProducts';

function ProductList() {
    const [query, setQuery] = useSearchParams();
    const { getallproducts } = useGetallProducts(query.get("category"));

    console.log("Entered ProductList category-wise", getallproducts);
    console.log(query.get("category"));

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='product-list-title text-center'>All Products</h2>
                <div className='product-list-wrapper d-flex flex-row'>
                    <FilterProducts />
                    <div className='product-list-box' id='productList'>
                        {getallproducts && getallproducts.map((eachproduct) => (
                            <ProductBox
                                key={eachproduct.id}
                                productImage={eachproduct.image}
                                id={eachproduct.id}
                                name={eachproduct.title}
                                price={eachproduct.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
