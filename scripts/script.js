let couponInput="";

document.getElementById('coupon-code').addEventListener('keyup', function (event) {
    const button = document.getElementById('coupon-btn');
    if (event.target.value !== "" && selectedSeats>3) {
        button.classList.remove('hidden')
    }
    else {
        button.classList.add('hidden');
    }

    couponInput=event.target.value;
}
)

let a = 0;
let totalSeats = 40;
let selectedSeats = 0;
let currentPrice=0;
function seats(event) {
    a = !a;
    if (a) {
        event.style.backgroundColor = 'rgb(29,209,0)';
        totalSeats--;
        selectedSeats++;
        document.getElementById('seats-left').innerText = totalSeats;
        document.getElementById('selected-seats').innerText = selectedSeats;

        const g = document.getElementById('selected-seats-details');

        const newDiv=document.createElement('div');
        newDiv.classList.add('text-gray-700','font-medium','flex','justify-between','pb-5');

        const seatP = document.createElement('p');
        seatP.innerText = event.innerText;
        const classP=document.createElement('p');
        classP.innerText='Economy';
        const priceP=document.createElement('p');
        priceP.innerText='550';

        newDiv.appendChild(seatP);
        newDiv.appendChild(classP);
        newDiv.appendChild(priceP);
        g.appendChild(newDiv);
        
        currentPrice+=550;
        const totalPrice=document.getElementById('total-price');
        totalPrice.innerText=currentPrice;

        const grandTotal=document.getElementById('grand-total');
        grandTotal.innerText=currentPrice;
    }
    else {
        event.style.backgroundColor = 'rgba(29,209,0,0.15)';
    }
}

function priceAfterCoupon(){
    const grandTotal=document.getElementById('grand-total');
    if(couponInput==='NEW15'){
        let price=currentPrice*0.85;
        grandTotal.innerText=price;
    }
    if(couponInput==='Couple 20'){
        let price=currentPrice*0.8;
        grandTotal.innerText=price;
    }
    
}

// const nameInput = document.querySelector('#name-input').value.trim();
// const phoneInput = document.querySelector('#number-input').value.trim();
// const emailInput = document.querySelector('#email-input').value;

// console.log(emailInput)

// if(nameInput!=="" && phoneInput!==""){
//     document.getElementById('next-btn').classList.remove('hidden');
// }


