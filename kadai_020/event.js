let text = document.getElementById('text').textContent;
const btn = document.getElementById('btn');
btn.addEventListener('click', () =>{
    document.getElementById('text').textContent = 'ボタンをクリックしました';
})
