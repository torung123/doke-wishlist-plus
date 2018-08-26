import React, { Component } from 'react';
import { Layout, Card, DisplayText, Button, Stack, SkeletonDisplayText } from '@shopify/polaris';

class list_total extends Component {
    constructor(props){
        super(props)
    }

    totalLove = () => {
        const { total_love } = this.props.count;
        if (total_love != undefined)
            return total_love;
        else 
            return <SkeletonDisplayText size="extraLarge" />;
    }

    totalCustomer = () => {
        const { total_customer } = this.props.count;
        if (total_customer != undefined)
            return total_customer;
        else 
            return <SkeletonDisplayText size="extraLarge" />;
    }

    render() {
        return (
            
            <Layout.Section>
                <Stack distribution="fill">
                    <Card title="Tổng yêu thích" sectioned>
                        <Stack>
                            <Stack.Item fill>
                            <DisplayText element="h1" size="extraLarge">{this.totalLove()}</DisplayText>
                            </Stack.Item>
                            <Stack.Item>
                                <Button>Xem chi tiết</Button>
                            </Stack.Item>
                        </Stack>
                        
                    </Card>
                    <Card title="Tổng khách hàng đã yêu thích" sectioned>
                        <Stack>
                            <Stack.Item fill>
                                <DisplayText element="h1" size="extraLarge">{this.totalCustomer()}</DisplayText>
                            </Stack.Item>
                            <Stack.Item>
                                <Button>Xem chi tiết</Button>
                            </Stack.Item>
                        </Stack>
                    </Card>
                    {/* <Card title="Tổng số sản phẩm yêu thích" sectioned>
                        <DisplayText size="extraLarge">10</DisplayText>
                        <Button>Xem chi tiết</Button>
                    </Card> */}
                </Stack>
            </Layout.Section>
          
        )
    }
}

export default list_total;
