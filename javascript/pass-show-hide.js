const pswrdField = document.querySelector('.form input[type="password"]'),
    toggleBtn = document.querySelector('.form .field i');

toggleBtn.onclick = () => {
    if (pswrdField.type == "password") {
        pswrdField.type = "text";
        toggleBtn.classList.add('active');
    } else {
        pswrdField.type = "password";
        toggleBtn.classList.remove('active');
    }
}
/* toggleBtn을 클릭했을 때 pswrdField의 type이 password인 경우, type을
text로 바꿔서 입력되는 또는 입력된 패스워드가 보이게 하고
pswrdField의 type이 password가 아닌 경우, 즉 text인 경우 toggleBtn을
클릭했을 시에 type이 password로 바뀌어 패스워드가 보이지 않게 함*/