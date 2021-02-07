import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Navbar, Nav } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {listProducts} from '../actions/productActions';
import Paginate from '../components/Paginate';
import ProductCarusel from '../components/ProductCarusel';
import Meta from '../components/Meta';
import Sorting from '../components/Sorting';


const HomeScreen = ({match}) => {

    const keyword = match.params.keyword;

    const pageNumber = match.params.pageNumber || 1
    let [sorts, setSort] = useState("")
    const productList = useSelector(state => state.productList);
    const { loading, error, products, page, pages } = productList;
    
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(listProducts(keyword, pageNumber, sorts))
        }, [dispatch, keyword, pageNumber, sorts])
    


    return (
        <>
            <Meta/>
            {!keyword ? <ProductCarusel/> : <Link to='/' className='btn btn-light'>Go back</Link>}
            <h1>Latest products</h1>
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
                <>
                <Navbar
                    expand='md'
                    className='d-flex justify-content-even filter-sort-container'
                >
                <Nav lg={10} md={10} sm={10}>                
                <Sorting
                    sorts={sorts} 
                    setSort={setSort} 
                    />
                    </Nav>
                </Navbar>
                    <Row>
                        {products.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product  product={product}/>
                            </Col>
                        ))}
                    </Row>
                    <Paginate pages = {pages} page = {page} keyword = {keyword ? keyword : ''}/>
                </>
            )}
            
        </>
    )
}

export default HomeScreen
