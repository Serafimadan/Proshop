import React from 'react';
import {Helmet} from "react-helmet";

const Meta = ({title, description, keywords}) => {
    return (
        <Helmet>
                <meta name='description' content={description}/>
                <meta name='keywords' content={keywords}/>
                <title>{title}</title>
            </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to Proshop',
    keywords: 'electornics, cheap electronics, buy electronics',
    description: 'We sell the best products for reasonable price'
}

export default Meta
