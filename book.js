let form = document.querySelector('form');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let destination = document.querySelector('#destination');
let check_in = document.querySelector('#check-in');
let check_out = document.querySelector('#check-out');
let hotel = document.querySelector('#hotel');
let tbody = document.querySelector('tbody');

let booked = JSON.parse(localStorage.getItem('book')) || [];

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    let obj = {
        name:name.value.trim(),
        email:email.value.trim(),
        destination:destination.value.trim(),
        check_in:check_in.value.trim(),
        check_out:check_out.value.trim(),
        hotel:hotel.value.trim()
    }
    booked.push(obj);
    localStorage.setItem('book',JSON.stringify(booked));
    display(booked);
    function display(data) {
    tbody.innerHTML ="";
    data.forEach((e, index) => {
        let tr = document.createElement('tr');
        let nametd = document.createElement('td');
        let destinationtd = document.createElement('td');
        let check_intd = document.createElement('td');
        let check_outtd = document.createElement('td');
        let hoteltd = document.createElement('td');
        let status = document.createElement('td');
        let cancel = document.createElement('td');

        nametd.textContent = e.name;
        destinationtd.textContent = e.destination;
        check_intd.textContent = e.check_in;
        check_outtd.textContent = e.check_out;
        hoteltd.textContent = e.hotel;
        status.textContent = 'Booked';
        cancel.textContent = 'Cancel';
        cancel.style.cursor ='pointer'

        tr.append(nametd, destinationtd, check_intd, check_outtd, hoteltd, status, cancel);
        tbody.append(tr);

        cancel.addEventListener('click', () => {
            booked.splice(index, 1);
            localStorage.setItem('book', JSON.stringify(booked));
            tr.remove();
        });
    });
}
    form.reset();
});

