import React, { Component } from 'react';
import { List, Modal, Stack, DropZone, Checkbox, Link   } from '@shopify/polaris';
import InitCode from '../guide/initCode';
import ProductDetail from '../guide/productDetailCode';
import CollectionDetail from '../guide/collectionCode';

class ModalGuide extends Component {
    state = {
        active: false,
        active1: false,
        active2: false
    };

    render() {
        const { active, active1, active2 } = this.state;

        return (
            <div>
                <List type="bullet">
                    <List.Item>
                        <Link onClick={this.handleChange}>
                            Thêm các code cần thiết để khởi tạo Wishlist
                        </Link>
                    </List.Item>
                    <List.Item>
                        <Link onClick={this.handleChange1}>
                            Tích hợp nút thêm vào yêu thích trong trang chi tiết sản phẩm
                        </Link>
                    </List.Item>
                    <List.Item>
                        <Link onClick={this.handleChange2}>
                            Đặt icon thêm vào yêu thích tại trang nhóm sản phẩm hoặc bất kì trang nào
                        </Link>
                    </List.Item>
                </List>
                <Modal
                    large
                    open={active}
                    onClose={this.handleChange}
                    title="Thêm các code cần thiết để khởi tạo Wishlist"
                    secondaryActions={[
                        {
                            content: 'Cancel',
                            onAction: this.handleChange,
                        },
                    ]}
                >
                    <Modal.Section>
                        <Stack vertical>
                            <InitCode />
                        </Stack>
                    </Modal.Section>
                </Modal>
                <Modal
                    large
                    open={active1}
                    onClose={this.handleChange1}
                    title="Tích hợp nút thêm vào yêu thích trong trang chi tiết sản phẩm"
                    secondaryActions={[
                        {
                            content: 'Cancel',
                            onAction: this.handleChange1,
                        },
                    ]}
                >
                    <Modal.Section>
                        <Stack vertical>
                            <ProductDetail />
                        </Stack>
                    </Modal.Section>
                </Modal>
                <Modal
                    large
                    open={active2}
                    onClose={this.handleChange2}
                    title="Đặt icon thêm vào yêu thích tại trang nhóm sản phẩm hoặc bất kì trang nào"
                    secondaryActions={[
                        {
                            content: 'Cancel',
                            onAction: this.handleChange2,
                        },
                    ]}
                >
                    <Modal.Section>
                        <Stack vertical>
                            <CollectionDetail />
                        </Stack>
                    </Modal.Section>
                </Modal>
            </div>
        );
    }

    handleChange = () => {
        this.setState(({ active }) => ({ active: !active }));
    };
    handleChange1 = () => {
        this.setState(({ active1 }) => ({ active1: !active1 }));
    };
    handleChange2 = () => {
        this.setState(({ active2 }) => ({ active2: !active2 }));
    };
}


export default ModalGuide;
