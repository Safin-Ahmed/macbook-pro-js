// Update Component Cost Function
function customizationCost(componentName, componentPrice){
    const componentAmount = document.getElementById(componentName + '-amount');
    componentAmount.innerText = componentPrice;
}
function getAmountValue(amountId){
    const amount = document.getElementById(amountId);
    const amountValue = parseInt(amount.innerText);
    return amountValue;
}
function updateTotalPrice(){
    const baseAmount = getAmountValue('base-amount');
    const memoryAmount = getAmountValue('memory-amount');
    const storageAmount = getAmountValue('storage-amount');
    const deliveryAmount = getAmountValue('delivery-amount');
    const totalPrice = document.getElementById('total-price');
    const finalPrice = baseAmount + memoryAmount + storageAmount + deliveryAmount;
    totalPrice.innerText = finalPrice;
    document.getElementById('footer-total-price').innerText = totalPrice.innerText;
}
// Memory Cost Calculation
const memoryButton8 = document.getElementById('eight-gb');
memoryButton8.addEventListener('click', function(){
     customizationCost('memory', 0);
     updateTotalPrice();   
});

const memoryButton16 = document.getElementById('sixteen-gb');
memoryButton16.addEventListener('click', function(){
    customizationCost('memory', 180);
    updateTotalPrice();
});

// Storage Cost Calculation
const storageButton256 = document.getElementById('storage256');
const storageButton512 = document.getElementById('storage512');
const storageButton1 = document.getElementById('storage1');

storageButton256.addEventListener('click', function(){
    customizationCost('storage', 0);
    updateTotalPrice();
})
storageButton512.addEventListener('click', function(){
    customizationCost('storage', 100);
    updateTotalPrice();
})
storageButton1.addEventListener('click', function(){
    customizationCost('storage', 180);
    updateTotalPrice();
})

// Delivery Cost Calculation
const freeDelivery = document.getElementById('free-delivery');
const fastDelivery = document.getElementById('fast-delivery');
freeDelivery.addEventListener('click', function(){
    customizationCost('delivery', 0);
    updateTotalPrice();
});
fastDelivery.addEventListener('click', function(){
    customizationCost('delivery', 20);
    updateTotalPrice();
});

// promo code validation 
document.getElementById('promo-submit').addEventListener('click', function(){
    const promoField = document.getElementById('promo-field');
    let totalPrice = getAmountValue('total-price');
    let usedCode = []; 
    if(promoField.value == "stevekaku"){
        debugger;
        totalPriceDiscount = (totalPrice * 20) / 100;
        totalPrice = totalPrice - totalPriceDiscount;
        document.getElementById('total-price').innerText = totalPrice;
        document.getElementById('footer-total-price').innerText = totalPrice;
        usedCode.push(promoField.value);
        document.getElementById('promo-submit').style.display = 'none';
        promoField.value = '';
    }
    else{
        alert('Invalid Code');
    }
    
});

