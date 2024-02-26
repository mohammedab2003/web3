const b = document.getElementById('b1');
const list = document.getElementById('list');
const div = document.getElementById('div');
b.addEventListener('click',() => {
    if (list.classList.contains('hidden')) {
        list.classList.remove('hidden');
        div.classList.add('bg-black','rounded-xl','absolute','top-3','right-3');
    } else {
        list.classList.add('hidden');
        div.classList.remove('bg-black','absolute');
    }
})