import React, { Component } from 'react'

export default class collectionCode extends Component {
  render() {
    return (
      <div>
            <p>1) Vào Admin Haravan &gt; Website &gt; Giao diện &gt; Hiệu chỉnh theme &gt; Snippets &gt; product-loop.liquid và thêm code sau vào vị trí muốn hiển thị wishlish:</p>
            <p>
                <code>
                {'{'}% include 'dwish' with 'dwishcollection' %{'}'}
                </code>
            </p>
            <p>
                Ví dụ:
            </p>
            <p>
                <img src="http://file.hstatic.net/1000300730/file/demo-guide-collection-2.png" />
            </p>
            <p>
                Ngoài giao diện nhóm sản phẩm sẽ hiển thị như sau:
            </p>
            <p>
                <img src="http://file.hstatic.net/1000300730/file/demo-guide-collection.png" />
            </p>
            <p>2) Lưu lại các chỉnh sửa và kiểm tra ngoài giao diện trang nhóm sản phẩm</p>
      </div>
    )
  }
}
