import streamlit as st

# --- PAGE CONFIG ---
st.set_page_config(page_title="Login Page", page_icon="🔒", layout="centered")

# --- CSS FOR STYLING ---
st.markdown("""
    <style>
    .main {
        background-color: #f0f2f6;
    }
    div.block-container {
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .stTextInput > div > div > input {
        background-color: #fff;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #ddd;
    }
    .stButton > button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 24px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-size: 16px;
    }
    .stButton > button:hover {
        background-color: #45a049;
    }
    </style>
""", unsafe_allow_html=True)

# --- LOGIN FORM ---
st.image("https://cdn-icons-png.flaticon.com/512/3064/3064197.png", width=100)
st.title("Welcome to MyApp")

st.subheader("Please login to continue")

# User inputs
username = st.text_input("Username")
password = st.text_input("Password", type="password")

# Login button
if st.button("Login"):
    if username == "admin" and password == "1234":
        st.success("Login successful!")
        st.balloons()
    else:
        st.error("Invalid username or password")

