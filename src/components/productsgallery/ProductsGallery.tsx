import React, { useEffect, useState } from 'react';
function ProductsGallery() {
    interface ProductListType {
        id: number,
        title: string,
        image: string,
        price: string
    }
    const [productList, setProductList] = useState<ProductListType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [cart, setCart] = useState({ totalamount: 0, contents: [] })
    const [searchValue, setSearchValue] = useState("")
    const [filteredList, setFilteredList] = useState<ProductListType[]>([])
    useEffect(() => {
        fetchProductsList()
    }, [])
    const fetchProductsList = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products")
            if (!response.ok) {
                throw new Error("network error")
            }
            const productLists = await response.json()
            setProductList(productLists)
        } catch (error) {
            console.log(error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }
    const addToCart = (item) => {
        setCart(prev => {
            return { ...prev, totalamount: prev.totalamount + item.price, contents: prev.contents.concat(item) }
        })
    }
    const removeFromCart = (item: ProductListType) => {
        setCart(prev => {
            const updatedContents = prev.contents.filter((prevItem: ProductListType) => prevItem.id !== item.id);
            return { ...prev, contents: updatedContents, totalamount: (prev.totalamount - parseFloat(item.price) < 0) ? 0 : prev.totalamount - parseFloat(item.price) };
        });
    }
    const onSearchInputChange = (targetVal: string) => {
        setSearchValue(targetVal)
        const filteredList = productList.filter(item => {
            return item.title.toLowerCase().search(targetVal.toLowerCase()) !== -1
        })
        setFilteredList(filteredList)
    }
    if (isLoading) return <>Loading...</>
    if (isError) return <>Something went wrong!</>
    return (
        <>
            <h1>Products Gallery</h1>
            <h2>Cart: {cart.totalamount}</h2>
            <input type="text" onChange={(e) => onSearchInputChange(e.target.value)} value={searchValue} />
            {
                filteredList.map((item, index) => {
                    return (
                        <ul>
                            <li>{item.title}</li>
                        </ul>
                    )
                })
            }
            {
                productList.map((item, index) => {
                    return (
                        <>
                            <p>{item.title}</p>
                            <img src={item.image} alt={item.title} style={{ maxWidth: '150px', height: 'auto' }} />
                            <p>Price: Rs. {item.price}</p>
                            <button onClick={() => addToCart(item)}>Add to Cart</button>
                            <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
                        </>
                    )
                })
            }
        </>
    )
}
export default ProductsGallery;
