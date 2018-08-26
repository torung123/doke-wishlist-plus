function initLiquid(Haravan){
    const themeUrl = '/admin/themes.json';
    // console.log(Haravan);
    Haravan.get(themeUrl, function(error, body) {
        if (error) {
            console.log(error);
            // console.trace();
            return false;
        } else{
            var theme = body.themes;
            var themeid = '';
            for (var i = 0; i < theme.length; i++) {
                if (theme[i].role === 'main')
                    themeid = parseInt(theme[i].id);
            }
            if (themeid !== '') {
                /****Cài snippet vào theme****/
                const AssetUrl = '/admin/themes/' + themeid + '/assets.json';
                const URI_GET_LIQID = AssetUrl + '?asset[key]=layout/theme.liquid';
                //File dwish.liquid
                const dwishLiquid = {
                    "asset": {
                        "key": "snippets/dwish.liquid",
                        "value": `
{% if dwish == 'dwishheader' %}
{{ 'dWish.css' | asset_url | stylesheet_tag }}
<script>
window.dwish = {
        shopName: '{{shop.name}}',
    template: '{{template}}',
    cid: '{% if customer %}{{ customer.id }}{% else %}0{% endif %}',
    quickview: true,
    moneyFormat: '{{ shop.money_format }}'
}  
</script>
{% elsif dwish == 'dwishlink' %}
<a class="dwishlink" href="/pages/wishlist" data-action="linkWidget" data-cid="{% if customer %}{{ customer.id }}{% else %}0{% endif %}"><span>Danh sách yêu thích </span>(<span class="dWish__badge-count dWish__hidden"></span>)</a>
{% elsif dwish == 'dwishproduct' %}
<div class="dWish__btn-wrap dWish__btn-product dWish__btn--hidden dWish__btn-count" style="display: none" data-count="0">
    <a class="dWish__add dWish__btn" href="javascript:;" data-cid="{% if customer %}{{ customer.id }}{% else %}0{% endif %}" data-pid="{{ product.id }}" data-vid="{{ product.variants[0].id }}" data-body='{"title":"{{product.title}}", "handle":"{{product.handle}}", "images":"{{ product.featured_image | product_img_url : 'master' }}", "product_type":"{{product.type}}", "vendor":"{{product.vendor}}", "price":"{{product.price | money}}", "created_at":"{{product.published_at}}"}'>
        <i class="dWish__icon-heart"><svg enable-background="new 0 0 51.997 51.997" version="1.1" viewBox="0 0 51.997 51.997" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m51.911 16.242c-0.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906-7.399 0-13.313 6.061-14.071 14.415-0.06 0.369-0.306 2.311 0.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014 0.748-3.166 0.502-5.108 0.443-5.477zm-2.39 5.019c-0.984 4.172-3.265 7.973-6.59 10.985l-17.076 15.235-16.783-15.231c-3.331-3.018-5.611-6.818-6.596-10.99-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101c0.65-7.319 5.731-12.632 12.083-12.632 4.687 0 8.813 2.88 10.771 7.515l0.921 2.183 0.921-2.183c1.927-4.564 6.271-7.514 11.069-7.514 6.351 0 11.433 5.313 12.096 12.727 2e-3 0.016 0.293 1.71-0.415 4.707z" fill="#D80027"/></svg></i>
        <span>Thêm vào yêu thích</span>
    </a>
    <a class="dWish__added dWish__btn dWish__btn--added dWish__btn--hidden" href="javascript:;" data-cid="{% if customer %}{{ customer.id }}{% else %}0{% endif %}" data-pid="{{ product.id }}" data-vid="{{ product.variants[0].id }}">
        <i class="dWish__icon-heart"><svg enable-background="new 0 0 50 50" version="1.1" viewBox="0 0 50 50" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543  c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503  c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z" fill="#D75A4A"/></svg></i> 
        <span>Đã yêu thích</span>
    </a>
</div>
{% elsif dwish == 'dwishcollection' %}
<div class="dWish__btn-wrap dWish__btn-wrap-collection dWish__btn--hidden" style="display: none" data-count="0">
    <a class="dWish__add dWish__btn" href="javascript:;" data-cid="{% if customer %}{{ customer.id }}{% else %}0{% endif %}" data-pid="{{ product.id }}" data-vid="{{ product.variants[0].id }}" data-body='{"title":"{{product.title}}", "handle":"{{product.handle}}", "images":"{{ product.featured_image | product_img_url : 'master' }}", "product_type":"{{product.type}}", "vendor":"{{product.vendor}}", "price":"{{product.price | money}}", "created_at":"{{product.published_at}}"}' title="Thêm vào yêu thích">
        <i class="dWish__icon-heart"><svg enable-background="new 0 0 51.997 51.997" version="1.1" viewBox="0 0 51.997 51.997" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m51.911 16.242c-0.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906-7.399 0-13.313 6.061-14.071 14.415-0.06 0.369-0.306 2.311 0.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014 0.748-3.166 0.502-5.108 0.443-5.477zm-2.39 5.019c-0.984 4.172-3.265 7.973-6.59 10.985l-17.076 15.235-16.783-15.231c-3.331-3.018-5.611-6.818-6.596-10.99-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101c0.65-7.319 5.731-12.632 12.083-12.632 4.687 0 8.813 2.88 10.771 7.515l0.921 2.183 0.921-2.183c1.927-4.564 6.271-7.514 11.069-7.514 6.351 0 11.433 5.313 12.096 12.727 2e-3 0.016 0.293 1.71-0.415 4.707z" fill="#D80027"/></svg></i>
    </a>
    <a class="dWish__added dWish__btn dWish__btn--added dWish__btn--hidden" href="javascript:;" data-cid="{% if customer %}{{ customer.id }}{% else %}0{% endif %}" data-pid="{{ product.id }}" data-vid="{{ product.variants[0].id }}" title="Đã yêu thích">
        <i class="dWish__icon-heart"><svg enable-background="new 0 0 50 50" version="1.1" viewBox="0 0 50 50" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543  c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503  c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z" fill="#D75A4A"/></svg></i>
    </a>
</div>
{% elsif dwish == 'dwishfooter' %}
<div class="dWish__button-side-wrapper dWish__hidden">
    <div id="dWish__button-side" class="dWish__button-side-action" data-action="popupWidget">
        <div class="dWish__button-caption"><i class="dwish-icon-heart"><svg enable-background="new 0 0 50 50" version="1.1" viewBox="0 0 50 50" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543  c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503  c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z" fill="#fff"></path></svg></i> 
            <span class="dWish__text-side">Wishlist</span>
            <span class="dWish__badge-count dWish__hidden"></span>
        </div>
    </div>
</div>
<div class="dWish__quickview overlay">
    <div class="dWish__quickview-content">  
        <div class="dWish__quickview-header">
            Danh sách sản phẩm yêu thích <a href="javascript:void(0)" class="dWish__quickview-close">×</a>
        </div>
        <div class="dWish__quickview-list">
            <ul class="dWish__list-wrap dWish__loading">
                
            </ul>
        </div>
    </div>
</div>
<script src="{{'dwish.js' | asset_url }}"></script>
{% elsif dwish == 'dwishpage' %}
<div class="dWish__page--listing">{% if customer %}{%else%}Vui lòng <a href="/account/login">đăng nhập</a> để thực hiện chức năng này{%endif%}</div>
{% endif %}
                            `
                    }
                }
                // File css
                const dwishCss = {
                    "asset": {
                        "key": "assets\/dwish.css",
                        "value": `
.dWish__btn--hidden,.dWish__hidden{display:none!important}.dWish__btn-wrap{position:relative;display:inline-block;margin:0;padding:0;min-width:30px;min-height:30px}.dWish__btn-wrap.dWish__bg{padding:5px 10px 5px 5px}.dWish__btn-wrap.dWish__only-icon .dWish__btn{font-size:0!important}.dWish__btn-wrap.dWish__btn-count:before{border:1px solid #d3d3d3;border-right:0;border-top:0;background-color:#FEFEFE;border-color:-moz-use-text-color -moz-use-text-color #D3D3D3 #D3D3D3;border-image:none;border-style:none none solid solid;border-width:0 0 1px 1px;content:"";position:absolute;-webkit-transform:rotate(45deg);transform:rotate(45deg);z-index:1;zoom:1;right:-13px;top:calc(50% - 4px);height:8px;width:8px}.dWish__btn-wrap.dWish__btn-count:after{text-shadow:none;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;background-color:#FEFEFE;border:1px solid #D3D3D3;color:#999;content:attr(data-count);font-weight:400;left:100%;margin-left:8px;position:absolute;padding:0 8px;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%)}.dWish__btn-wrap-collection .dWish__btn{border-radius:50%;box-shadow:0 0 4px 0 #dbdbdb}.dWish__btn-wrap-collection .dWish__btn.dWish__added{box-shadow:0 0 4px 0 #d75a4a}.dWish__btn{display:inline-block;width:auto!important;margin:0!important;line-height:25px!important}.dWish__btn--added{color:#ea9999!important}.dWish__add.dWish__loading,.dWish__added.dWish__loading{cursor:not-allowed;color:#d2d2d2!important;pointer-events:none}.dWish__icon-heart{display:inline-block;width:30px;height:30px;border-radius:50%;padding:5px 6px;text-align:center;float:left}.dWish__btn-wrap:not(.dWish__btn-wrap-collection):not(.dWish__only-icon) .dWish__btn .dWish__icon-heart{margin-right:3px;margin-top:-1px}.dWish__btn .dWish__icon-heart svg{width:100%;height:100%}.dWish__btn:hover .dWish__icon-heart{-webkit-animation:pulse-shadow--collection 2s infinite;animation:pulse-shadow 2s infinite}.dWish__button-side-wrapper{background-color:rgba(0,0,0,0)!important;position:fixed;right:0;top:50%!important;width:33px;z-index:1200000;transition:transform .2s ease 0;-webkit-transition:-webkit-transform .2s ease 0}.dWish__bottom-right{right:0!important;bottom:0!important;top:auto!important;left:auto!important}.dWish__bottom-left{right:auto!important;bottom:0!important;top:auto!important;left:0!important}.dWish__left,.dWish__right{bottom:auto!important;top:50%!important}.dWish__right{right:0!important;left:auto!important}.dWish__left{right:auto!important;left:0!important}.dWish__button-side-action{display:inline-block;transform:rotate(-90deg);-webkit-transform:rotate(-90deg);white-space:nowrap;width:30px;box-sizing:border-box}.dWish__button-side-action>.dWish__button-caption{background-color:#F44336;border:2px solid transparent;border-radius:3px 3px 0 0;box-shadow:0 0 10px rgba(0,0,0,.2),0 0 0 rgba(255,255,255,.5) inset;color:#fff;cursor:pointer;display:inline-block;font-size:14px;letter-spacing:2px;line-height:24px;padding:.3em .5em;text-align:center;text-transform:uppercase}.dWish__button-side-action i,.dWish__button-side-action svg{transform:rotate(90deg);transition:transform .2s ease,opacity .2s ease;-webkit-transform:rotate(90deg);-webkit-transition:-webkit-transform .2s ease,opacity .2s ease;width:15px;height:15px;padding-left:3px}.dWish__btn-wrap.dWish__bg .dWish__btn,.dWish__btn-wrap.dWish__bg svg path{color:#fff;fill:#fff}.dWish__btn-wrap.dWish__bg .dWish__loading:not(.dWish__list-wrap):after{background-color:transparent}.dWish__no-icon i{display:none!important}.dWish__button-side-wrapper .dWish__badge-count{position:absolute;background:#FF4500;z-index:1;width:26px;text-align:center;box-sizing:border-box;font-size:10px;color:#fff;border-radius:100%;height:26px;line-height:20px;font-weight:700;border:1px solid #e83737;text-shadow:1px 1px 1px rgba(255,255,255,.3);box-shadow:1px 1px 1px 1px rgba(0,0,0,.2);max-width:26px;text-overflow:ellipsis;overflow:hidden;padding:2px;visibility:visible;bottom:25px;transform:rotate(90deg);-webkit-transform:rotate(90deg)}.dWish__page--listing{min-height:350px;margin:10px 0;width:100%}.dWish__page--listing:after,.dWish__page--listing:before{display:table;content:' ';clear:both}.dWish__no-product{text-align:center;padding:10px}.dWish__quickview{display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;align-items:center;z-index:9999;text-align:center;overflow:hidden;visibility:hidden;opacity:0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.dWish__quickview.overlay,.dWish__quickview.overlay:before{position:fixed;width:0;height:0;top:0!important;left:0;right:0;bottom:0}.dWish__quickview:before{content:'';background-color:rgba(0,0,0,.3);color:rgba(0,0,0,.4);top:0!important;margin:auto}.dWish__quickview.open{visibility:visible;opacity:1;height:auto;width:auto}.dWish__quickview.open:before{width:100%;height:100%}.dWish__quickview-content{max-width:992px;max-height:100%;padding:0;margin:0 auto;text-align:left;position:relative;background:#fff;min-width:750px;-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.dWish__quickview-header{padding:15px;background:#ea9999;color:#fff}a.dWish__quickview-close{font-size:36px;float:right;color:#fff}.dWish__quickview-list{padding:3px}.dWish__quickview-title{color:#000;height:36px;overflow:hidden;font-size:12px;line-height:18px;margin-bottom:10px}.dWish__list-wrap{position:relative;background:#fcfcfc;height:450px;width:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.dWish__list-wrap::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#F5F5F5}.dWish__list-wrap::-webkit-scrollbar{width:6px;background-color:#F5F5F5}.dWish__list-wrap::-webkit-scrollbar-thumb{background-color:#000}.dWish__list-product{width:25%;padding:15px;float:left;list-style:none;position:relative}.dWish__list-product *{font:inherit;line-height:1.4em;vertical-align:baseline;box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box}.dWish__list-image{height:200px;position:relative;overflow:hidden;background-size:cover!important}.dWish__list-information{height:80px;padding:9px}.dWish__list-price{color:#ea9999;font-size:14px;line-height:16px}.dWish__list-old{color:#999;font-size:11px;text-decoration:line-through}.dWish__removeProduct{position:absolute;top:0;right:0;width:30px;height:30px;background:#dbdbdb;color:red;font-size:20px;text-align:center;z-index:10;display:none}.dWish__list-product:hover .dWish__removeProduct{display:block}.dWish__list-add-to-cart{text-align:center;border-top:1px solid #DDD;position:relative;height:30px;overflow:hidden;background-color:#ea9999;z-index:10}.dWish__list-add-to-cart a{padding:5px 0;display:block;color:#FFF;text-decoration:none}.dWish__list-link{z-index:9;position:absolute;left:0;top:0;right:0;bottom:0}.dWish__loading{position:relative;margin:0;border:2px solid transparent;border-radius:5px;cursor:pointer;display:inline-block}.dWish__loading:not(.dWish__list-wrap):after{content:'';box-sizing:border-box;position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(255,255,255,.85)}.dWish__btn-wrap-collection .dWish__loading:not(.dWish__list-wrap):after,.dWish__btn-wrap-collection.dWish__loading:after{border-radius:50%}.dWish__box-loading{animation:timeline;animation-duration:1s;animation-timing-function:linear;animation-iteration-count:infinite;background:linear-gradient(to right,#eee 8%,#ddd 18%,#eee 33%);background-size:800px auto;background-position:100px 0;border-radius:50%}@keyframes timeline{0%{background-position:-350px 0}100%{background-position:400px 0}}@-webkit-keyframes spinner{to{transform:rotate(360deg)}}@keyframes spinner{to{transform:rotate(360deg)}}@-webkit-keyframes pulse-shadow{0%{-webkit-box-shadow:0 0;box-shadow:0 0}70%{-webkit-box-shadow:0 0 5px 10px rgba(255,255,255,0);box-shadow:0 0 5px 10px rgba(255,255,255,0)}100%{-webkit-box-shadow:0 0 0 0 rgba(255,255,255,0);box-shadow:0 0 0 0 rgba(255,255,255,0)}}@keyframes pulse-shadow{0%{-webkit-box-shadow:0 0;box-shadow:0 0}70%{-webkit-box-shadow:0 0 5px 10px rgba(255,255,255,0);box-shadow:0 0 5px 10px rgba(255,255,255,0)}100%{-webkit-box-shadow:0 0 0 0 rgba(255,255,255,0);box-shadow:0 0 0 0 rgba(255,255,255,0)}}.dWish__heart{background-color:red;display:inline-block;height:30px;margin:0 10px;position:relative;top:0;transform:rotate(-45deg);width:30px}.dWish__heart:after,.dWish__heart:before{content:"";background-color:red;border-radius:50%;height:30px;position:absolute;width:30px}.dWish__heart:before{top:-15px;left:0}.dWish__heart:after{left:15px;top:0}@media screen and (max-width:992px){.dWish__quickview-content{min-width:80%}.dWish__list-product{width:33.33%;margin:0;padding:0 15px}}@media screen and (max-width:768px){.dWish__quickview-content{min-width:90%}.dWish__list-product{width:50%}}@media screen and (max-width:480px){.dWish__button-side-action>.dWish__button-caption span{display:none}.dWish__button-side-action i,.dWish__button-side-action svg{width:30px;height:30px;padding-left:0}}@media screen and (max-width:320px){.dWish__list-product{width:100%}}
                        `
                    }
                }
                const dwishJs = {
                    "asset": {
                        "key": "assets\/dwish.js",
                        "value": `
function defer(i){if(window.jQuery)i();else{var t=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.src="//cdn.doke.vn/libs/jquery/1.9.1/jquery.min.js",t.appendChild(s),setTimeout(function(){defer(i)},50)}}defer(function(){var i,t=window.dmain||{},s=(window.dwishSetting,"https://"+Haravan.domain),d=dwish.shopName,a="https://doke-wishlist-plus.herokuapp.com";i=jQuery,t={getSettings:function(t){var s=a+"/api/v1/setting/"+d;i.ajax({type:"GET",url:s,dataType:"json",contentType:"application/json",async:!1,success:function(i){if(i.error)return!1;"function"==typeof t&&t(window.dwishSetting=i.setting)},error:function(i,t){console.log(t)}})},init:function(){this.getSettings(function(i){1==Number(i.status)?(t.loadSettings(i),dwish.template,t.checkLoaded=!1,t.loadStatusWishlist(),t.loadWishlistToPage(),t.redirectAfterLogin(),t.linkToPage(),t.openPopupWishlist(),t.closePopupWishlist(),t.menuWishlistAction(),t.addToWishlist(),t.removeWishlist(),t.removeProductInList()):console.log("Ứng dụng yêu thích đã tắt")})},loadSettings:function(t){var s=t.general.mainColor,d=t.general.titleGeneral,a=t.initial.optionPosition,e=t.initial.fixedLocation,n=t.initial.showFormat,o=t.initial.showQuantityLiked,c=t.configProduct.patternShow,h=t.configProduct.titleBefore,r=t.configProduct.titleAfter,l=t.configProduct.colorBefore,_=t.configProduct.colorAfter,p=t.configProduct.showQuantity,u=i(".dWish__button-side-wrapper"),f=u.find(".dWish__button-caption"),W=i(".dWish__btn-product"),g=W.find(".dWish__add"),v=W.find(".dWish__added"),m=i(".dWish__quickview-header");switch(a){case 0:u.remove();break;case 1:u.removeClass("dWish__hidden");break;default:u.removeClass("dWish__hidden")}switch(n){case 0:var w="popupWidget";break;case 1:w="linkWidget"}switch(e){case 0:var k="dWish__bottom-right";break;case 1:k="dWish__bottom-left";break;case 2:k="dWish__right";break;case 3:k="dWish__left"}switch(i("#dWish__button-side").attr("data-action",w),i("[href='#dwish-wishlist']").attr("data-action",w),o&&0!=dwish.cid&&i(".dWish__badge-count").removeClass("dWish__hidden"),u.addClass(k),f.css("background-color",s).find(".dWish__badge-count").css("background-color",s),f.find(".dWish__text-side").text(d),m.css("background-color",s),c){case 0:W.css("background-color",s).addClass("dWish__bg"),i(".dWish__btn-wrap.dWish__bg svg path").css("fill",l);break;case 1:W.css("background-color",s).addClass("dWish__bg").addClass("dWish__no-icon"),i(".dWish__btn-wrap.dWish__bg svg path").css("fill",l);break;case 2:break;case 3:W.addClass("dWish__no-icon");break;case 4:W.addClass("dWish__only-icon")}g.find("span").text(h).css("color",l),v.find("span").text(r).css("color",_),p||W.removeClass("dWish__btn-count")},removeLoading:function(){i(".dWish__hidden").removeClass("dWish__hidden")},get:function(t,s){i.ajax({type:"GET",url:t,dataType:"json",contentType:"application/json",success:function(i){"function"==typeof s&&s(i)},error:function(i,t){console.log(t)}})},dwishLogin:function(){localStorage.setItem("dwish_redirect",window.location.href),window.location.href="/account/login"},checkLogin:function(t){if(0==dwish.cid)return console.log("Bạn chưa đăng nhập!!"),i(".dWish__btn-wrap").removeClass("dWish__btn--hidden").show(),!1;"function"==typeof t&&t()},dWishLoadProduct:function(i,t){var s=t.meta,d='<li class="dWish__list-product" data-pid="'+t.id+'">';d+='<div class="dWish__list-inner">',d+='<div class="dWish__list-image" style="background: url( '+s.images+') no-repeat center;">',d+='<a href="/products/'+s.handle+'"></a></div>',d+='<div class="dWish__list-information">',d+='<div class="dWish__list-title"><a href="/products/'+s.handle+'">'+s.title+"</a></div>",d+='<div class="dWish__list-price"><span class="dWish__list-old"></span>'+s.price+"</div></div>",d+='<a class="dWish__removeProduct" data-vid="'+s.variantID+'" data-pid="'+t.id+'" href="javascript:;">×</a>',d+='<a class="dWish__list-link" href="/products/'+s.handle+'"></a></div></li>',i.append(d)},redirectAfterLogin:function(){var i=s+"/account",t=localStorage.getItem("dwish_redirect");window.location.href==i&&null!==t&&(localStorage.removeItem("dwish_redirect"),document.location=t)},menuWishlistAction:function(){},linkToPage:function(){var t=this;i(document).on("click","[data-action=linkWidget]",function(s){var d=i(this);s.preventDefault();var a=dwish.cid||d.data("cid");0===parseInt(a)?t.dwishLogin():window.location.href="/pages/wishlist"})},openPopupWishlist:function(){var t=this;i(document).on("click","[data-action=popupWidget]",function(s){var d=i(this);s.preventDefault();var a=dwish.cid||d.data("cid");0===parseInt(a)?t.dwishLogin():(0==t.checkLoaded&&(t.loadWishlistToContent(".dWish__list-wrap"),t.checkLoaded=!0),i(".dWish__quickview").addClass("open"))})},closePopupWishlist:function(){i(document).on("click",".dWish__quickview-close",function(t){i(".dWish__quickview").removeClass("open")})},addToWishlist:function(){var t=this;i(document).on("click",".dWish__add",function(s){s.preventDefault();var a=i(this);a.addClass("dWish__loading");var e=dwish.cid||a.data("cid"),n=a.data("pid");if(a.parents("form").find("[name='id']").val()||a.data("vid"),0===parseInt(e))t.dwishLogin();else{var o=a.data("body"),c={shopName:d,p_id:n,c_id:e,meta:o};i.ajax({type:"POST",url:"https://doke-wishlist-plus.herokuapp.com/api/v1/add-wishlist",data:JSON.stringify(c),dataType:"json",contentType:"application/json",success:function(s){if(s&&!s.error){var d=s.data.push_data_for_product.list_liker.length;t.updateBadge(1),i(".dWish__add[data-pid="+n+"]").addClass("dWish__btn--hidden").removeClass("dWish__loading").parent().attr("data-count",d).find(".dWish__added").removeClass("dWish__btn--hidden"),t.checkLoaded=!1}else a.removeClass("dWish__loading")}})}})},removeWishlist:function(){var t=this;i(document).on("click",".dWish__added",function(s){s.preventDefault();var a=i(this);a.addClass("dWish__loading");var e=dwish.cid||a.data("cid"),n=a.data("pid"),o=(a.parents("form").find("[name='id']").val()||a.data("vid"),{shopName:d,p_id:n,c_id:e});i.ajax({type:"POST",url:"https://doke-wishlist-plus.herokuapp.com/api/v1/remove-wishlist",data:JSON.stringify(o),dataType:"json",contentType:"application/json",success:function(s){if(s&&!s.error){t.updateBadge(-1);var d=i(".dWish__add[data-pid="+n+"]").parent().data("count");d-=1,i(".dWish__add[data-pid="+n+"]").removeClass("dWish__btn--hidden").parent().attr("data-count",d).find(".dWish__added").addClass("dWish__btn--hidden").removeClass("dWish__loading"),t.checkLoaded=!1}else a.removeClass("dWish__loading")}})})},removeProductInList:function(){var t=this;i(document).on("click",".dWish__removeProduct",function(s){s.preventDefault();var a=i(this),e=dwish.cid||a.data("cid"),n=a.data("pid"),o=(a.data("vid"),{shopName:d,p_id:n,c_id:e});i.ajax({type:"POST",url:"https://doke-wishlist-plus.herokuapp.com/api/v1/remove-wishlist",data:JSON.stringify(o),dataType:"json",contentType:"application/json",success:function(s){if(s&&!s.error){t.updateBadge(-1);var d=i(".dWish__add[data-pid="+n+"]").parent().data("count");d-=1,i(".dWish__add[data-pid="+n+"]").removeClass("dWish__btn--hidden").parent().attr("data-count",d).find(".dWish__added").addClass("dWish__btn--hidden").removeClass("dWish__loading"),t.checkLoaded=!1,a.parents(".dWish__list-product").remove();var e=i(".dWish__list-wrap");0==e.find("li").length&&e.html('<p class="dWish__no-product">Chưa có sản phẩm nào trong danh sách yêu thích.</p>')}else console.log("Lỗi xóa sản phẩm!!")}})})},updateBadge:function(t){var s=Number(i(".dWish__badge-count").attr("data-count"));s+=t,i(".dWish__badge-count").attr("data-count",s).text(s)},loadStatusWishlist:function(){this.checkLogin(function(){var s=a+"/api/v1/list-wishlist/"+dwish.cid+"/"+d;i.ajax({type:"GET",url:s,dataType:"json",contentType:"application/json",async:!1,success:function(s){if(s&&!s.error){i.each(s.data.list_wistlist,function(t,s){i(".dWish__add[data-pid="+s.id+"]").addClass("dWish__btn--hidden").parent().attr("data-count",s.list_liker.length).find(".dWish__added").removeClass("dWish__btn--hidden")});var d=s.data.list_wistlist.length;i(".dWish__badge-count").attr("data-count",d).text(d);var a=i(".dWish__list-wrap");s.data.list_wistlist.length>0?(i.each(s.data.list_wistlist,function(i,s){t.dWishLoadProduct(a,s)}),t.checkLoaded=!0):a.html('<p class="dWish__no-product">Chưa có sản phẩm nào trong danh sách yêu thích.</p>'),a.removeClass("dWish__loading")}i(".dWish__btn-wrap").removeClass("dWish__btn--hidden").show()}})})},loadWishlistToPage:function(){i(".dWish__page--listing").length>0&&0!=dwish.cid&&this.loadWishlistToContent(".dWish__page--listing")},loadWishlistToContent:function(t){var s=this,e=i(t);e.html("");var n=a+"/api/v1/list-wishlist/"+dwish.cid+"/"+d;i.ajax({type:"GET",url:n,dataType:"json",contentType:"application/json",async:!1,success:function(t){t&&!t.error?(t.data.list_wistlist.length>0?i.each(t.data.list_wistlist,function(i,t){s.dWishLoadProduct(e,t)}):e.html('<p class="dWish__no-product">Chưa có sản phẩm nào trong danh sách yêu thích.</p>'),e.removeClass("dWish__loading")):(e.removeClass("dWish__loading"),e.html('<p class="dWish__no-product">Chưa có sản phẩm nào trong danh sách yêu thích.</p>'))}})}},i(document).ready(function(){t.init()})});
 `
                    }
                }
                const dWishPage = {
                    "asset": {
                        "key": "templates\/page.wishlist.liquid",
                        "value": `
<div class="dWish__page-listing" style="text-align:center;max-width:1200px;margin:0 auto;">
    <div class="dWish__page-title">
        <h1>{{ page.title }}</h1>
    </div>
    <div class="dWish__page-content">
        Danh sách sản phẩm yêu thích
        {% include 'dwish' with 'dwishpage' %}
    </div>
</div>
                        `
                }
            }
                Haravan.put(AssetUrl, dwishLiquid, function(error, data) {
                    if (error) return false;
                    console.log('Cài đặt Snippet dwish.liquid thành công!!');
                });
                Haravan.put(AssetUrl, dwishCss, function(error, data) {
                    if (error) return false;
                    console.log('Cài đặt Snippet dwishCss thành công!!');
                });
                Haravan.put(AssetUrl, dwishJs, function(error, data) {
                    if (error) return false;
                    console.log('Cài đặt Snippet dwishJs thành công!!');
                });
                Haravan.put(AssetUrl, dWishPage, function(error, data) {
                    if (error) return false;
                    console.log('Cài đặt page.wishlish thành công!!');
                });
                Haravan.get(URI_GET_LIQID, function(error, theme){
                    if (error) return console.log(error);
                    try {
                        var themeValue = theme.asset.value;
                        // console.log(themeValue);
                        var themeValueNew = themeValue.replace('</head>', '\n{% include "dwish" with "dwishheader" %}\n</head>')
                            .replace('</body>', '\n{% include "dwish" with "dwishfooter" %}\n</body>');
                        
                        // console.log(themeValueNew);
                        const dwishLayout = {"asset": {
                                "key": "layout\/theme.liquid",
                                "value": themeValueNew
                            }
                        }
                        Haravan.put(AssetUrl, dwishLayout, function (error, data) {
                            if (error) return false;
                            console.log('Update layout theme.liquid thành công!!');
                        });
                    } catch (error) {
                        console.log('lỗi update theme.liquid')
                    }
                    
                });
                //Thêm page Wishlist trong admin
                const dWishNewPage = {
                    "page": {
                        "title": "Wishlist",
                        "template_suffix": "page.wishlist"
                    }
                }
                Haravan.post('/admin/pages.json', dWishNewPage, function (error, data) {
                    if (error) return false;
                    console.log('Thêm Page Wishlist thành công!!');
                });
            } else {
                res.send('Không tìm thấy themeID !!')
            }
        }
    });
}
module.exports = {
    initLiquid
};