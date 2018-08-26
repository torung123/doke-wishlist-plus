import React, { Component } from 'react';

export default class initCode extends Component {
  render() {
    return (
        <div>
            <p>Vào Admin Haravan &gt; Website &gt; Giao diện &gt; Hiệu chỉnh theme &gt; theme.liquid và thêm code sau vào trước &lt;/head&gt;:</p>
            <p>
            <code>
                {'{'}% include 'dwish' with 'dwishheader' %{'}'}
            </code>
            </p>
            <p>Và thêm code sau vào trước &lt;/body&gt;:</p>
            <p>
            <code>
                {'{'}% include 'dwish' with 'dwishfooter' %{'}'}
            </code>
            </p>
            <p>
            <img src="http://file.hstatic.net/1000300730/file/demo-guide-init.png" />
            </p>
            <p>
            Hiển thị danh sách các sản phẩm đã yêu thích tại một trang bất kỳ =&gt; thêm code sau tại vị trí mong muốn:
            </p>
            <p>
            <code>
                {'{'}% include 'dwish' with 'dwishpage' %{'}'}
            </code>
            </p>
            <p>
            <img src="http://file.hstatic.net/1000300730/file/demo-guide-listing.png" />
            </p>
            <p>
            Nút điều hướng tới trang danh sách sản phẩm đã yêu thích
            <br />
            - Nếu bạn muốn hiển thị ở menu: Admin Haravan =&gt; Website =&gt; Menu =&gt; Chọn menu cần thêm nút wishlist =&gt; 
            Thêm đường dẫn, đặt tên liên kết (ví dụ: Wishlist), phần liên kết đến chọn "Địa chỉ web" và nhập: #dwish-wishlist
            <br />
            <img src="http://file.hstatic.net/1000300730/file/demo-guide-menu.png" />
            <br />
            - Nếu bạn muốn hiển thị nút tại vị trí bất kỳ: #dwish-wishlist trong href của thẻ a
            <img src="http://file.hstatic.net/1000300730/file/demo-guide-a.png" />
            </p>
      </div>
    )
  }
}
