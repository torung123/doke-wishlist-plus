import React, { Component } from 'react';
import {
    Layout,
    Page,
    Card,
    FormLayout,
    TextField,
    SettingToggle,
    TextStyle,
    Stack,
    RadioButton,
    List,
    Checkbox,
    Button,
    Select,
    ChoiceList,
    Spinner
} from '@shopify/polaris';
import LoadingPage from './snippets/loadingPage';
import { connect } from 'react-redux';
import 'rc-color-picker/assets/index.css';
import ColorPicker from 'rc-color-picker';
import { getSetting, updateSetting } from '../actions/index';
import ModalGuide from './snippets/modalGuide';
import mau_1 from '../assets/mau-1.png';
import mau_2 from '../assets/mau-2.png';
import mau_3 from '../assets/mau-3.png';
import mau_4 from '../assets/mau-4.png';
import mau_5 from '../assets/mau-5.png';

class Wishlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saveStatus: false,
            picker: false,
            setting: {},
            enabled: true,
            listType: ['0'],
            initialValue: '1',
            showQuantityChecked: true,
            templateOption: ['0'],
            displayMessage: false,
        };
        
        
    }

    componentDidMount() {
        const {shopName} = this.props;
        this.props.onGetSetting(shopName);

    }

    componentDidUpdate(){
        const { setting } = this.props.setting;
       
        if ( Object.keys(this.state.setting).length == 0){
           this.setState({
               enabled: setting.status,
               setting: setting
           })
        }
        if (this.state.displayMessage){
            setTimeout(
                function() {
                    this.setState({displayMessage: false});
                }
                .bind(this),
                3000
            );
        }
    }

    setStatus = () => {
        this.setState({
            saveStatus: true
        })
    };

    toggleConnect = () => {
        const setting = {...this.state.setting};
        setting.status = !setting.status;
        this.setStatus();
        this.setState({ enabled: !this.state.enabled, setting });
    };

    onChangeMainColor = (color) => {
        this.state.saveStatus==false?this.setStatus():'';
        const setting = {...this.state.setting};
        setting.general.mainColor = color.color;
        this.setState({setting});
    };


    initialSelect = (checked, newValue) => {
        this.setStatus();
        const setting = {...this.state.setting};
        setting.initial.optionPosition = newValue;
        this.setState({
            setting,
            initialValue: newValue
        });
    };

    onChangePosition = (newValue) => {
        this.setStatus();
        const setting = {...this.state.setting};
        setting.initial.fixedLocation = newValue;
        this.setState({
            setting
        });
    };

    onChangeshowQuantityChecked = (value) => {
        this.setStatus();
        const setting = this.state.setting;
        setting.initial.showQuantityLiked = value;
        this.setState({setting});
    };

    onChangePatternShow = (value) => {
        this.setStatus();
        const setting = this.state.setting;
        setting.configProduct.patternShow = value.toString();
        this.setState({setting});
    };

    onChangeShowFormat = (value) => {
        // console.log(value.toString());
        this.setStatus();
        const setting = this.state.setting;
        setting.initial.showFormat = value.toString();
        this.setState({setting});
    };
    
    onChangeColorBefore = (color) => {
        this.state.saveStatus==false?this.setStatus():'';
        const setting = {...this.state.setting};
        setting.configProduct.colorBefore = color.color;
        this.setState({setting});
    };
    onChangeColorAfter = (color) => {
        this.state.saveStatus==false?this.setStatus():'';
        const setting = {...this.state.setting};
        setting.configProduct.colorAfter = color.color;
        this.setState({setting});
    };

    onChangeShowQuantity = (value) => {
        this.setStatus();
        const setting = this.state.setting;
        setting.configProduct.showQuantity = value;
        this.setState({setting});
    };

    onUpdateSetting = () => {
        const {shopName} = this.props;
        const { setting } = this.state;
        this.props.onUpdateSetting(setting, shopName);
        this.setState({
            saveStatus: this.props.setting.loadingSetting
        })
        setTimeout(
            function() {
                this.setState({displayMessage: true});
            }
            .bind(this),
            1000
        );
    }

    alertSuccess = () => {
        const { displayMessage } = this.state;
        if (!displayMessage) {
            return null;
        }
      
        return <div className="success__alert">Lưu thành công</div>;
    }

    onChangeTitleGeneral = value => {
        this.setStatus();
        const { setting } = this.state;
        setting.general.titleGeneral = value;
        this.setState({ setting });
    }

    onChangeTitleBefore = value => {
        this.setStatus();
        const { setting } = this.state;
        setting.configProduct.titleBefore = value;
        this.setState({ setting });
    }

    onChangeTitleAfter = value => {
        this.setStatus();
        const { setting } = this.state;
        setting.configProduct.titleAfter = value;
        this.setState({ setting });
    }

    render() { 
        const { setting } = this.state;
        if ( Object.keys(setting).length > 0){
            const { initialValue } = this.state;
            const {enabled} = this.state;

            const contentStatus = enabled ? 'Vô hiệu hóa' : 'kích hoạt';
            const textStatus = enabled ? 'hoạt động' : 'bị vô hiệu hóa';
            
            const { showFormat } = this.state.setting.initial;
            const { patternShow, titleBefore, titleAfter, colorBefore, colorAfter, showQuantity } = this.state.setting.configProduct;

            return (
                <Page title="Cài đặt ứng dụng Wishlist" separator  primaryAction={{
                    content: 'Lưu lại',
                    loading: this.props.setting.loadingSetting,
                    onClick: this.onUpdateSetting,
                    disabled: !this.state.saveStatus
                }}>
                            
                    <Layout>
                        <Layout.AnnotatedSection
                            title="Cài đặt chung"
                            description="Cấu hình cài đặt app Wishlist"
                        >
                            <Card sectioned>
                                <SettingToggle
                                    action={{
                                        content: contentStatus,
                                        onAction: this.toggleConnect
                                    }}
                                    enabled={enabled}
                                >
                                    Wishlist app đang <TextStyle variation="strong">{textStatus}</TextStyle>.
                                </SettingToggle>
                                <br />
                                <FormLayout>
                                    <TextField label="Text hiển thị trên nút wishlist" value={setting.general.titleGeneral} onChange={ this.onChangeTitleGeneral } />
                                    <TextField type="text" label="Chọn màu sắc chủ đạo" value={setting.general.mainColor} onChange={ this.setStatus } 
                                    connectedRight={
                                    
                                            <ColorPicker
                                                animation=""
                                                color={setting.general.mainColor}
                                                onChange={this.onChangeMainColor}
                                            />
                                    
                                    }
                                    />
                                </FormLayout>
                            </Card>
                        </Layout.AnnotatedSection>
                    </Layout>
                    <br />
                    <Layout>
                        <Layout.AnnotatedSection
                            title="Cấu hình khởi tạo"
                            description="Cấu hình nút Wishlist neo trên trang web của bạn."
                        >
                            <Card sectioned>
                                <p>Chọn cách hiển thị nút wishlist (nút dùng để gọi danh sách yêu thích)?</p>
                                <Stack distribution="fill">
                                    < RadioButton
                                    label = "Trên thanh menu"
                                    id = "0"
                                    name = "initial"
                                    value = "0"
                                    checked = { initialValue === '0' }
                                    onChange = { this.initialSelect }
                                    />
                                    < RadioButton
                                    label = "Một nút Wishlist riêng biệt"
                                    id = "1"
                                    name = "initial"
                                    value = "1"
                                    checked = { initialValue === '1' }
                                    onChange = { this.initialSelect }
                    
                                    />
                                    < RadioButton
                                    label = "Tùy chỉnh"
                                    id = "2"
                                    name = "initial"
                                    value = "2"
                                    checked = { initialValue === '2' }
                                    onChange = { this.initialSelect }
                    
                                    />
                                </Stack>
                                { this.renderInitialContent() }
                                <br />
                                <Stack>
                                    <ChoiceList
                                        title={'Hiển thị danh sách sản phẩm dạng :'}
                                        choices={[
                                            {label: 'Popup', value: '0'},
                                            {label: 'Một trang riêng', value: '1'}
                                        ]}
                                        selected={ showFormat.toString() }
                                        onChange={this.onChangeShowFormat}
                                    />
                                </Stack>
                            </Card>
                        </Layout.AnnotatedSection>
                    </Layout>
                    <br />
                    <Layout>
                        <Layout.AnnotatedSection
                            title="Cấu hình trang chi tiết sản phẩm"
                            description="Cấu hình nút yêu thích trên trang chi tiết sản phẩm"
                        >
                            <Card sectioned>
                                <Stack distribution="fill">
                                    <ChoiceList
                                        title={'Chọn mẫu cho nút Thêm vào danh sách yêu thích:'}
                                        choices={[
                                            {label: 'Mẫu 1', value: '0'},
                                            {label: 'Mẫu 2', value: '1'},
                                            {label: 'Mẫu 3', value: '2'},
                                            {label: 'Mẫu 4', value: '3'},
                                            {label: 'Mẫu 5', value: '4'}
                                        ]}
                                        selected={ patternShow.toString() }
                                        onChange={this.onChangePatternShow}
                                    />
                                    <div className="product__wishlist-type">
                                        { this.loadPatternShow() }
                                    </div>
                                </Stack>
                                <br />
                                <TextField
                                    label="Text hiển thị khi chưa yêu thích sản phẩm"
                                    value={titleBefore}
                                    onChange={ this.onChangeTitleBefore }
                                />
                                <br />
                                <TextField 
                                    label="Text hiển thị sau khi thêm vào yêu thích sản phẩm"
                                    value={titleAfter}
                                    onChange={ this.onChangeTitleAfter }
                                />
                                <br />
                                <TextField type="text" label="Chọn màu chữ trước khi thêm" value={colorBefore}
                                    connectedRight={
                                    
                                            <ColorPicker
                                                animation=""
                                                color={colorBefore}
                                                onChange={this.onChangeColorBefore}
                                            />
                                    
                                    }
                                />
                                <br />
                                <TextField type="text" label="Chọn màu chữ sau khi thêm" value={colorAfter}
                                    connectedRight={
                                    
                                            <ColorPicker
                                                animation=""
                                                color={colorAfter}
                                                onChange={this.onChangeColorAfter}
                                            />
                                    
                                    }
                                />
                                <br />
                                <Checkbox
                                    checked={ showQuantity }
                                    label="Hiển thị số lượt thích của từng sản phẩm"
                                    onChange={this.onChangeShowQuantity}
                                />
                            </Card> 
                        </Layout.AnnotatedSection>
                    </Layout>
                    { this.alertSuccess() }
                </Page>
            )
        } else{
            return <LoadingPage />
        }
    }

    onChangeSelectTemplate = (value) => {
        this.setState({templateOption: value});
    };

    renderInitialContent = () => {
        const optionsPosition = [
            {label: 'Dưới phải', value: '0'},
            {label: 'Dưới trái', value: '1'},
            {label: 'Giữa phải', value: '2'},
            {label: 'Giữa trái', value: '3'},
        ];

        const {showQuantityLiked} = this.state.setting.initial;

        switch(this.state.initialValue) {
            case "0":
              return   (
                        <Stack>
                            <Card title="Các bước thực hiện:" sectioned subdued>
                                <List type="number">
                                    <List.Item>Mở mục menu: Website -> Menu</List.Item>
                                    <List.Item>Chọn main menu hoặc menu cần thêm menu Wishlist -> chọn Chỉnh sửa menu Main Menu</List.Item>
                                    <List.Item>Nhấn thêm đường dẫn khác</List.Item>
                                    <List.Item>Đặt tên menu (ví dụ Wishlist), Liên kết đến chọn địa chỉ web và nhập: #dwish-wishlist</List.Item>
                                    <List.Item>Lưu lại menu</List.Item>
                                </List>
                            </Card>
                        </Stack>
                     )
            case "1":  
              return (
                  <div>
                        <br />
                        <Stack distribution="fill">
                            <Select
                                label="Chọn vị trí hiển thị nút Wishlist neo trên website"
                                options={optionsPosition}
                                onChange={ this.onChangePosition }
                                value={this.state.setting.initial.fixedLocation}
                            />
                        </Stack>
                        <Checkbox
                            checked={showQuantityLiked}
                            label="Hiển thị số lượt yêu thích của khách hàng trên thanh Neo"
                            onChange={this.onChangeshowQuantityChecked}
                        />
                    </div>
            )
            default:
                return (
                    <Card title="Nếu muốn tùy chỉnh wishlist ở một vị trí khác, tham khảo một số hướng dẫn sau:" sectioned subdued>
                        <ModalGuide />
                    </Card>
                )
        }
    }
    
    loadPatternShow = () => {
        const { patternShow } = this.state.setting.configProduct;
        switch( patternShow.toString() ){
            case '0':
                return <img height="35" src={mau_1} />;
            case '1':
                return <img height="35" src={mau_2} />;
            case '2':
                return <img height="35" src={mau_3} />;
            case '3':
                return <img height="35" src={mau_4} />;
            default:
                return <img height="35" src={mau_5} />
        }
    }
    
}

const mapStateToProps = (state) => {
    return {
        setting: state.setting
    }
};

const mapDispatchtoProps = (dispatch, props) => {
    return {
        onGetSetting: (shopName) => {
            dispatch(getSetting(shopName))
        },
        onUpdateSetting: (setting, shopName) => {
            dispatch(updateSetting(setting, shopName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Wishlist);