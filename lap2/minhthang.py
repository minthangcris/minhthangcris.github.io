import streamlit as st

# --- PAGE CONFIG ---
st.set_page_config(page_title="Game Gear Store", page_icon="🎮", layout="wide")

# --- CSS CUSTOM ---
st.markdown("""
    <style>
    .stButton > button {
        background-color: #e63946;
        color: white;
        padding: 10px 24px;
        border: none;
        border-radius: 10px;
        font-size: 16px;
    }
    .stButton > button:hover {
        background-color: #d62828;
    }
    .product-card {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        text-align: center;
    }
    .banner {
        width: 100%;
        border-radius: 10px;
    }
    </style>
""", unsafe_allow_html=True)

# --- DATA ---
products = [
    {"name": "Nintendo Switch 2", "price": 14000000, "image": "https://eibrx5yeyug.exactdn.com/wp-content/uploads/2025/06/Nintendo_Switch2_nueva_era_Gaming.jpg"},
    {"name": "PS5 Controller", "price": 2000000, "image": "https://th.bing.com/th/id/OIP._kEU8aKGHxqllHnADWlAAQHaEK?rs=1&pid=ImgDetMain&cb=idpwebpc1"},
    {"name": "Xbox Series X", "price": 15000000, "image": "https://th.bing.com/th/id/OIP.xdDxVtikwxvByq9WtwqlGwHaE8?rs=1&pid=ImgDetMain&cb=idpwebpc1"},
    {"name": "8BitDo Controller", "price": 900000, "image": "https://cdn.mos.cms.futurecdn.net/cpKUSNQVseZeJvPUDeT3Di.jpeg"},
]

if "cart" not in st.session_state:
    st.session_state.cart = []

# --- HEADER ---
st.markdown("<h1 style='color: #e63946;'>🎮 Game Gear Store</h1>", unsafe_allow_html=True)
st.write("Play more, live more | Hotline: 0963.769.777")

# --- BANNER ---
st.image("https://static.vecteezy.com/system/resources/previews/023/986/360/original/nintendo-switch-console-on-red-background-free-png.png", use_column_width=True)

# --- CATEGORIES ---
st.subheader("Danh mục nổi bật")
cols_cat = st.columns(4)
categories = ["Playstation 5", "Nintendo Switch", "Xbox", "Phụ kiện"]
for i, cat in enumerate(categories):
    with cols_cat[i]:
        st.markdown(f"<div class='product-card'><strong>{cat}</strong></div>", unsafe_allow_html=True)

# --- PRODUCT LIST ---
st.subheader("Sản phẩm nổi bật")
cols_prod = st.columns(2)
for idx, product in enumerate(products):
    with cols_prod[idx % 2]:
        st.markdown(f"<div class='product-card'>", unsafe_allow_html=True)
        st.image(product["https://yt3.googleusercontent.com/ytc/AIdro_neBpApczMb70QxbPqWlwNcTHQ9XSEd3S4llCHLrRkZMA=s900-c-k-c0x00ffffff-no-rj"], width=150)
        st.write(f"**{product['name']}**")
        st.write(f"Giá: **{product['price']:,} VNĐ**")
        if st.button(f"🛒 Thêm vào giỏ - {product['name']}"):
            st.session_state.cart.append(product)
            st.success(f"Đã thêm {product['name']} vào giỏ hàng!")
        st.markdown("</div>", unsafe_allow_html=True)

# --- SIDEBAR CART ---
st.sidebar.header("🛒 Giỏ hàng của bạn")
if st.session_state.cart:
    total = 0
    for item in st.session_state.cart:
        st.sidebar.write(f"{item['name']} - {item['price']:,} VNĐ")
        total += item["price"]
    st.sidebar.markdown(f"**Tổng cộng: {total:,} VNĐ**")
else:
    st.sidebar.write("Giỏ hàng trống!")

