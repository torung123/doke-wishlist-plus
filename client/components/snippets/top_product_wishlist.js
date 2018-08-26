import React, { Component } from 'react';
import { Layout, Card, Stack, Thumbnail, Link, Heading , SkeletonBodyText} from '@shopify/polaris';

class top_product_wishlist extends Component {
    constructor(props){
        super(props)
    }

    loadTopProduct = () => {
        const listProduct = this.props.products;
        const total_count = this.props.count;
        if ( listProduct == undefined )
            return <SkeletonBodyText />;
        else {
            var result = null;
            if (listProduct.length > 0) {
                result = listProduct.map((product, index) => {
                    const product_url = 'https://' + this.props.shopName + '.myharavan.com' + '/products/' + product.handle;
                    return (
                        
                        <Stack key={index}>
                            <Stack.Item fill>
                                <Stack>
                                    <Thumbnail
                                        source={product.images.length > 0 ? product.images[0].src:'noimg.png'}
                                        alt={product.title}
                                    />
                                    <Link url={product_url} external={true}>{product.title}</Link>
                                    <Heading>

                                    </Heading>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item>
                                {
                                    total_count.map(function(item, i){
                                        if ( item._id == product.id ){
                                            return item.size;
                                        }
                                    })
                                } 
                            </Stack.Item>
                        </Stack>
                    );
                });
            }
            return result;
               
        }
            
    }
    render() {
        return (
            <Layout.Section>
                <Card title="Top sản phẩm thêm vào yêu thích nhiều nhất" sectioned>
                    <Stack>
                        <Stack.Item fill>
                            <Heading>Sản phẩm</Heading>
                        </Stack.Item>
                        <Stack.Item>
                            Số lần thêm
                        </Stack.Item>
                    </Stack>
                    { this.loadTopProduct() }
                </Card>
            </Layout.Section>
            
        )
    }
}


export default top_product_wishlist;