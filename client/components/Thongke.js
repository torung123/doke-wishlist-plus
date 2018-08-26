import React, { Component } from 'react';
import { Layout, Page, DisplayText, Card, Stack, Select, Link, List, DatePicker, Spinner, Heading, SkeletonDisplayText  } from '@shopify/polaris';

import { connect } from 'react-redux';
import { totalLoveRequest, totalLoveIntimeRequest  } from '../actions/index';

import List_Total from './snippets/list_total';
import Top_Product from './snippets/top_product_wishlist';
import Top_Customer from './snippets/top_customer_wishlist';
import ModalGuide from './snippets/modalGuide';

class Thongke extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            selected: '0',
            shopName: ''
        };
    }
    componentDidMount(){
        this.setState({
            shopName: this.props.shopName
        })
        const shop = this.props.shopName;
        this.props.onListTotalLove(shop);
        this.props.onListTotalLoveIntime(0, shop);
    }

    componentWillMount(){
        // const shop = this.props.shopName;
        // this.props.onListTotalLove(shop);
        // this.props.onListTotalLoveIntime(0, shop);
    }

    onChangeDate = (value) => {
        this.setState({
            loading: true,
            selected: value
        });
        const shop = this.props.shopName;
        this.props.onListTotalLoveIntime(value, shop);
    }

    componentWillUpdate(){
        if (this.state.loading){
            this.setState({
                loading: false
            });
        }
    }

    renderFilter = () => {
        if (this.props.data.count_time != '')
            return <DisplayText size="extraLarge">{ this.state.loading ? <Spinner size="large" color="teal" /> : this.props.data.count_time }</DisplayText>
        return <SkeletonDisplayText size="extraLarge" />;
    }

    render() {
        console.log(this.props.data.count_time);
        const options = [
            { label: 'Hôm nay', value: '0' },
            { label: 'Hôm qua', value: '1' },
            { label: '7 ngày qua', value: '7' },
            { label: '30 ngày qua', value: '30' },
        ];
        const selected = this.state.selected;
        const timeline = options.filter( function(item){
            return item.value === selected;
        })
        return (
            <Layout>
                <Layout.Section>
                    <Page title="Hoạt động" separator>
                        <Layout>
                            <List_Total count={this.props.data.count} />
                            <Top_Product shopName={this.props.shopName} products={this.props.data.top_product.listProduct} count={this.props.data.top_product.total_count}/>
                            <Top_Customer customers={ this.props.data.top_product.listCustomer } />
                        </Layout>
                    </Page>
                </Layout.Section>
                <Layout.Section secondary>
                    <Card title="Thông tin chi tiết" sectioned>
                        <Stack distribution="fill">
                            <Select
                                label=""
                                options={[
                                    { label: 'Wishlist', value: 'wishlist' }
                                ]}
                            />
                            <Select
                                label=""
                                options={options}
                                value={this.state.selected}
                                onChange={ this.onChangeDate }
                            />
                        </Stack>

                    </Card>
                    <Card sectioned>
                        <Stack>
                            <Stack.Item fill>
                                <Heading>Tổng yêu thích</Heading>
                            </Stack.Item>
                            <Stack.Item>
                               { timeline[0].label }
                            </Stack.Item>
                        </Stack>
                        <Stack>
                            <Stack.Item fill>
                                { this.renderFilter() }
                            </Stack.Item>
                        </Stack>
                    </Card>
                    {/* <Card title="Tổng Sản phẩm yêu thích hôm nay" sectioned>
                        <DisplayText size="extraLarge">40</DisplayText>
                    </Card> */}
                    <Card title="Hướng dẫn cài đặt" sectioned>
                        <ModalGuide />
                    </Card>
                </Layout.Section>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.total_wishlist
    }
};

const mapDispatchtoProps = (dispatch, props) => {
    return {
        onListTotalLove: (shopName) => {
            dispatch(totalLoveRequest(shopName))
        },
        onListTotalLoveIntime: (time, shopName) =>{
            dispatch(totalLoveIntimeRequest(time, shopName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Thongke);