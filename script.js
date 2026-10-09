// Lấy các phần tử HTML
const authModal = document.getElementById('authModal');
const openAuthBtn = document.getElementById('openAuthBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

const tabLogin = document.getElementById('tabLogin');
const tabRegister = document.getElementById('tabRegister');
const formLogin = document.getElementById('formLogin');
const formRegister = document.getElementById('formRegister');
const userStatusText = document.getElementById('userStatusText');

// Mở & Đóng Popup
openAuthBtn.addEventListener('click', () => {
  authModal.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
  authModal.classList.remove('active');
});

authModal.addEventListener('click', (e) => {
  if (e.target === authModal) {
    authModal.classList.remove('active');
  }
});

// Chuyển đổi Tab Đăng Nhập / Đăng Ký
tabLogin.addEventListener('click', () => {
  tabLogin.classList.add('active');
  tabRegister.classList.remove('active');
  formLogin.classList.add('active');
  formRegister.classList.remove('active');
});

tabRegister.addEventListener('click', () => {
  tabRegister.classList.add('active');
  tabLogin.classList.remove('active');
  formRegister.classList.add('active');
  formLogin.classList.remove('active');
});

// Xử lý khi bấm nút "Đăng Ký"
formRegister.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('regUser').value;
  const password = document.getElementById('regPass').value;

  // Lưu thông tin vào bộ nhớ trình duyệt (LocalStorage)
  localStorage.setItem('savedUser', username);
  localStorage.setItem('savedPass', password);

  alert('Đăng ký thành công! Bạn có thể đăng nhập ngay.');
  tabLogin.click(); // Tự động chuyển qua tab Đăng nhập
});

// Xử lý khi bấm nút "Đăng Nhập"
formLogin.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('loginUser').value;
  const password = document.getElementById('loginPass').value;

  const savedUser = localStorage.getItem('savedUser');
  const savedPass = localStorage.getItem('savedPass');

  if (username === savedUser && password === savedPass) {
    alert('Đăng nhập thành công!');
    userStatusText.innerText = 'Xin chào, ' + username;
    authModal.classList.remove('active');
  } else {
    alert('Tài khoản hoặc mật khẩu không chính xác!');
  }
});