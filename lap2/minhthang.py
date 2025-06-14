import streamlit as st

# --- PAGE CONFIG ---
st.set_page_config(page_title="Gaming Accessories Store", page_icon="🎮", layout="wide")

# --- CSS STYLING ---
st.markdown("""
    <style>
    .stButton > button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 24px;
        border: none;
        border-radius: 10px;
        font-size: 16px;
    }
    .stButton > button:hover {
        background-color: #45a049;
    }
    .product-card {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    </style>
""", unsafe_allow_html=True)

# --- DATA ---
products = [
    {"name": "Pro Gaming Mouse", "price": 49.99, "image": "https://cdn-icons-png.flaticon.com/512/3469/3469723.png"},
    {"name": "Mechanical Keyboard", "price": 89.99, "image": "https://cdn-icons-png.flaticon.com/512/3469/3469716.png"},
    {"name": "Gaming Headset", "price": 69.99, "image": "https://cdn-icons-png.flaticon.com/512/3469/3469736.png"},
    {"name": "RGB Mouse Pad", "price": 19.99, "image": "https://cdn-icons-png.flaticon.com/512/3469/3469729.png"},
]

if "cart" not in st.session_state:
    st.session_state.cart = []

# --- HEADER ---
st.title("🎮 Gaming Accessories Store")
st.write("Welcome to your one-stop shop for all your gaming needs!")

# --- PRODUCT DISPLAY ---
cols = st.columns(2)
for idx, product in enumerate(products):
    with cols[idx % 2]:
        st.markdown(f"<div class='product-card'>", unsafe_allow_html=True)
        st.image(product["image"], width=120)
        st.subheader(product["name"])
        st.write(f"Price: **${product['price']}**")
        if st.button(f"Add to Cart - {product['name']}"):
            st.session_state.cart.append(product)
            st.success(f"Added {product['name']} to cart!")
        st.markdown("</div>", unsafe_allow_html=True)

# --- CART SUMMARY ---
st.sidebar.header("🛒 Your Cart")
if st.session_state.cart:
    total = 0
    for item in st.session_state.cart:
        st.sidebar.write(f"{item['name']} - ${item['price']}")
        total += item["price"]
    st.sidebar.markdown(f"**Total: ${total:.2f}**")
else:
    st.sidebar.write("Your cart is empty!")

