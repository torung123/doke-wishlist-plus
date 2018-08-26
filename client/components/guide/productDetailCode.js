import React, { Component } from 'react'

export default class productDetailCode extends Component {
  render() {
    return (
      <div>
            <div>
                <p>1) Vào Admin Haravan &gt; Website &gt; Giao diện &gt; Hiệu chỉnh theme &gt; product.liquid và thêm code sau vào vị trí muốn hiển thị wishlish:</p>
                <p>
                    <code>
                        {'{'}% include 'dwish' with 'dwishproduct' %{'}'}
                    </code>
                </p>
                <p>
                    Ví dụ (lưu ý đặt code trong form product):
                </p>
                <p>
                    <img src="http://file.hstatic.net/1000300730/file/demo-guide-product.png" />
                </p>
                <p>
                    Ngoài giao diện sản phẩm sẽ hiển thị như sau:
                </p>
                <p>
                    <img src="http://file.hstatic.net/1000300730/file/demo-guide-product-2.png" />
                </p>
                <p>2) Lưu lại các chỉnh sửa và kiểm tra ngoài giao diện trang chi tiết sản phẩm</p>
            </div>

      </div>
    )
  }
}
