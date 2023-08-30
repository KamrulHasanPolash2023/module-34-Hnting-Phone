const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phone = data.data
    // console.log(phone);
    displayPhones(phone);
}


const displayPhones = phones =>{
// console.log(phone); 
const phoneContainer = document.getElementById('phone-container')
// clear phone container cards before  adding new card by search
phoneContainer.textContent = '';
phones.forEach(phone =>{
    console.log(phone)
    // 1 create a div

    //  2 dreate a div
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card bg-pink-200 shadow-xl mt-4 p-10`;
    // 3 set inner html
    phoneCard.innerHTML =`
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>${phone.brand}</p>
        <p>${phone.slug}</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
    </div>`;
    //4 appendChaild
    phoneContainer.appendChild(phoneCard);
})
}

// handle Search Button
const handleSearch = () =>{
const searchField=document.getElementById('search-field');
const searchText = searchField.value;
console.log(searchText);
loadPhone(searchText)
}



// loadPhone();
console.log(phones);