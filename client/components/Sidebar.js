import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

export default class Sidebar extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            
            <div className="App-sidebar">
                <div className="App-sidebarLogo"><img src="logo.png" />
                    <div className="App-sidebarMenuIcon">
                        <button type="button" className="Polaris-Button Polaris-Button--sizeSlim"><span className="Polaris-Button__Content"><span><span className="Polaris-Icon Polaris-Icon--colorSkyDark Polaris-Icon--isColored"><svg className="Polaris-Icon__Svg" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M6 10a2 2 0 1 1-4.001-.001A2 2 0 0 1 6 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 12 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 18 10z" fillRule="evenodd" /></svg></span></span>
                        </span>
                        </button>
                    </div>
                </div>
                <div className="App-sidebarContent">
                    <div className="App-sidebarLinks">
                        <NavLink
                        exact
                        className="App-sidebarLink"
                        to="/"
                        activeClassName="active">
                        <span className="App-sidebarLinkIcon"><span className="Polaris-Icon Polaris-Icon--colorSkyDark Polaris-Icon--isColored"><svg className="Polaris-Icon__Svg" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><g><path d="M19,0h-6c-0.6,0-1,0.4-1,1v3H7C6.4,4,6,4.4,6,5v3H1C0.4,8,0,8.4,0,9v6c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1V1C20,0.4,19.6,0,19,0z M6,14H2v-4h4V14z M12,14H8V6h4V14z M18,14h-4V2h4V14z" /><path d="M19,18H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S19.6,18,19,18z" /></g></svg></span></span>
                        <span className="App-sidebarLinkText">Thống kê</span></NavLink>
                        <NavLink
                        exact
                        className="App-sidebarLink"
                        to="/wishlist"
                        activeClassName="active">
                            <span className="App-sidebarLinkIcon">
                            <span className="Polaris-Icon Polaris-Icon--colorSkyDark Polaris-Icon--isColored"><svg className="Polaris-Icon__Svg" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><g><path d="M10,6c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4s4-1.8,4-4C14,7.8,12.2,6,10,6z M10,12c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C12,11.1,11.1,12,10,12z" /><path d="M19.5,11.9L17.9,11c0-0.3,0.1-0.7,0.1-1c0-0.3,0-0.7-0.1-1l1.6-0.9C19.7,8,19.9,7.8,20,7.5C20,7.2,20,7,19.9,6.7l-2-3.5c-0.3-0.5-0.9-0.6-1.4-0.4L15,3.7c-0.6-0.5-1.3-0.9-2-1.2V1c0-0.6-0.4-1-1-1H8C7.4,0,7,0.4,7,1v1.6C6.3,2.9,5.6,3.3,5,3.7L3.5,2.9C3.1,2.6,2.5,2.8,2.2,3.3l-2,3.5C0,7,0,7.2,0,7.5C0.1,7.8,0.3,8,0.5,8.1L2.1,9C2,9.3,2,9.7,2,10c0,0.3,0,0.7,0.1,1l-1.6,0.9C0.3,12,0.1,12.2,0,12.5C0,12.8,0,13,0.1,13.3l2,3.5c0.3,0.5,0.9,0.6,1.4,0.4L5,16.3c0.6,0.5,1.3,0.9,2,1.2V19c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1v-1.6c0.7-0.3,1.4-0.7,2-1.2l1.5,0.8c0.5,0.3,1.1,0.1,1.4-0.4l2-3.5C20,13,20,12.8,20,12.5C19.9,12.2,19.7,12,19.5,11.9z M15.8,8.7C15.9,9.1,16,9.6,16,10c0,0.4,0,0.9-0.2,1.3c-0.1,0.4,0.1,0.9,0.5,1.1l1.3,0.7l-1,1.7l-1.3-0.7C15,14,14.5,14,14.2,14.3c-0.7,0.7-1.5,1.2-2.4,1.4c-0.4,0.1-0.7,0.5-0.7,1V18H9v-1.3c0-0.4-0.3-0.8-0.7-1c-0.9-0.3-1.8-0.8-2.4-1.4C5.5,14,5,14,4.7,14.2l-1.3,0.7l-1-1.7l1.3-0.7c0.4-0.2,0.6-0.7,0.5-1.1C4.1,10.9,4,10.4,4,10c0-0.4,0.1-0.9,0.2-1.3c0.1-0.4-0.1-0.9-0.5-1.1L2.4,6.9l1-1.7l1.3,0.7C5,6,5.5,6,5.8,5.7C6.5,5,7.4,4.5,8.3,4.3C8.7,4.1,9,3.7,9,3.3V2h2v1.3c0,0.4,0.3,0.8,0.7,1c0.9,0.3,1.7,0.8,2.4,1.4C14.5,6,15,6,15.3,5.8l1.3-0.7l1,1.7l-1.3,0.7C15.9,7.8,15.8,8.2,15.8,8.7z" /></g></svg></span></span>
                            <span className="App-sidebarLinkText">Cấu hình Wishlist</span>
                        </NavLink>
                    </div>
                    {/* <div className="App-sidebarBottom">
                        <div>
                            <div tabIndex={-1} aria-controls="Popover1" aria-owns="Popover1" aria-haspopup="true" aria-expanded="false">
                                <div className="App-sidebarProfile">
                                    <div className="Polaris-Stack Polaris-Stack--alignmentCenter Polaris-Stack--noWrap">
                                        <div className="Polaris-Stack__Item"><span aria-label="trunghd1231@gmail.com" role="img" className="Polaris-Avatar Polaris-Avatar--styleThree Polaris-Avatar--sizeSmall Polaris-Avatar--hasImage"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMCAwaDEwMHYxMDBIMHoiIGZpbGw9IiNmZmMwNGQiLz48cGF0aCBkPSJNMCAwaDY5LjQxdjEwMEgweiIgZmlsbD0iIzVkNmNjMSIvPjxwYXRoIGQ9Ik03MC4yMSA4MC44OGgtMTUuMWMtNC44MSAwLTUuNjgtNS44NC01LjY4LTUuODRoMjAuNzgiIGZpbGw9IiNmZmMwNGQiLz48cGF0aCBkPSJNODIgNjAuNDhsLTE0IC4yNVYwaDEwLjE3QzgwLjU5IDIwLjE0IDgyIDYwLjQ4IDgyIDYwLjQ4eiIgZmlsbD0iIzVkNmNjMSIvPjxwYXRoIGZpbGw9IiM0MTIzNmUiIGQ9Ik01Ny43MSA2MC40OGE1LjQ0IDUuNDQgMCAxIDEgMTAuODcgMCIvPjxjaXJjbGUgY3g9IjI0Ljc3IiBjeT0iNDAuMTkiIHI9IjExLjIyIiBmaWxsPSIjZWJlZGYxIiBvcGFjaXR5PSIuMiIvPjwvc3ZnPgo=" className="Polaris-Avatar__Image" role="presentation" /></span></div>
                                        <div className="Polaris-Stack__Item Polaris-Stack__Item--fill"><span>Trung Ho Duc</span>
                                            <p className="Polaris-Caption"><span className="Polaris-TextStyle--variationSubdued">Torung</span></p>
                                        </div>
                                        <div className="Polaris-Stack__Item"><span className="Polaris-Icon Polaris-Icon--colorSky Polaris-Icon--isColored"><svg className="Polaris-Icon__Svg" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M6 10a2 2 0 1 1-4.001-.001A2 2 0 0 1 6 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 12 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 18 10z" fillRule="evenodd" /></svg></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        )
    }
}
