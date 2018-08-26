import React, { Component } from 'react';
import { Layout, Card, ResourceList, TextStyle, Avatar, SkeletonBodyText  } from '@shopify/polaris';

class top_customer_wishlist extends Component {
    constructor(props){
        super(props);
        this.state = {
            listCustomers: []
        }
    }

    componentDidUpdate(){
        if (this.props.customers != undefined && this.props.customers.length > 0){
            const customer = this.props.customers;
            if (customer.length > 0){
                var customerList = customer.map((cus, i) => {
                    return {
                            id: cus.id,
                            url: '',
                            name: cus.last_name + cus.first_name,
                            location: cus.email
                    }
                })
                if(this.state.listCustomers.length == 0) {
                    this.setState({
                        listCustomers: customerList
                    })
                }
            } else{
                this.setState({
                    listCustomers: []
                })
            }
            
        } else{

        }
        
    }

    loadTopCustomer = () => {
        if (this.props.customers == undefined)
            return <SkeletonBodyText />;
        else {
            if (this.state.listCustomers.length == 0 ){
                return null;
            } else {
                return (

                    <ResourceList
                                resourceName={{ singular: 'customer', plural: 'customers' }}
                                items={
                                    this.state.listCustomers
                                }
                                renderItem={(item) => {
                                    const { id, url, name, location } = item;
                                    const media = <Avatar customer size="medium" name={name} />;
    
                                    return (
                                        <ResourceList.Item
                                            id={id}
                                            url={url}
                                            media={media}
                                            accessibilityLabel={`View details for ${name}`}
                                        >
                                            <h3>
                                                <TextStyle variation="strong">{name}</TextStyle>
                                            </h3>
                                            <div>{location}</div>
                                        </ResourceList.Item>
                                    );
                                }}
                    />
                )
            }
            
        }
    }

    render() {
        return (
            <Layout.Section>
                <Card title="Top người dùng thêm vào yêu thích nhiều nhất" sectioned>
                    { this.loadTopCustomer() }
                </Card>
            </Layout.Section>
        )
    }
}

export default top_customer_wishlist;