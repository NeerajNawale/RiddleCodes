let bug = document.querySelector('#bug')
let navbar = document.querySelector('.navbar')
let list = document.querySelector('.list')
let right_nav = document.querySelector('#right_nav')
let btn_form = document.querySelector('.btn_form')

bug.addEventListener('click', ()=>{
    list.classList.toggle('v_opa')
    right_nav.classList.toggle('v_opa')
    navbar.classList.toggle('h_nav')
})

let data = [];
const addData = (v)=>{
    v.preventDefault();
    let d = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        textarea: document.getElementById('textarea').value
    }
    data.push(d);

    console.warn('added', {data});
    localStorage.setItem('DataList', JSON.stringify(data));
}
document.addEventListener('DOMContentLoaded', ()=>{
    btn_form.addEventListener('click', addData)
});