function action(id,type){
    let div = document.getElementById(id)
    let itog = document.getElementsByClassName('itog')[0].getElementsByTagName('div')[1]
    let cost = div.getElementsByClassName('cost')[0];
    if(type === '+'){
        itog.innerHTML = parseInt(itog.innerHTML)+parseInt(cost.innerHTML);
        let count = div.getElementsByClassName('quantity_choose')[0].getElementsByTagName('span')[0]
        count.innerHTML = parseInt(count.innerHTML)+1;
    }else if(type === '-'){
        itog.innerHTML = parseInt(itog.innerHTML)-parseInt(cost.innerHTML);
        let count = div.getElementsByClassName('quantity_choose')[0].getElementsByTagName('span')[0]
        count.innerHTML = parseInt(count.innerHTML)-1;
        if(count.innerHTML == 0){
            div.style.display = 'none';
        }
    }
}

function deleteItem(id){
    let deleteItem = document.getElementById(id);
    deleteItem.style.display = 'none';
    let itog = document.getElementsByClassName('itog')[0].getElementsByTagName('div')[1];
    let cost = deleteItem.getElementsByClassName('cost')[0];
    let count = deleteItem.getElementsByClassName('quantity_choose')[0].getElementsByTagName('span')[0];
    itog.innerHTML = parseInt(itog.innerHTML) - (parseInt(cost.innerHTML)*parseInt(count.innerHTML));
}



    // let div1 = document.getElementsByClassName('first_border');
    // console.log(div1)
    // let div2 = document.getElementsByClassName('first_border')[1];
    // let div3 =  document.getElementsByClassName('first_border')[2];

    // let firstPrice = parseInt(div1.getElementsByClassName('cost')[0].innerHTML) * parseInt(div1.getElementsByClassName('quantity_choose')[0].getElementsByTagName('span')[0].innerHTML) 
    // let secondPrice = parseInt(div2.getElementsByClassName('cost')[0].innerHTML) * parseInt(div2.getElementsByClassName('quantity_choose')[0].getElementsByTagName('span')[0].innerHTML) 
    // let thirdPrice = parseInt(div3.getElementsByClassName('cost')[0].innerHTML) * parseInt(div3.getElementsByClassName('quantity_choose')[0].getElementsByTagName('span')[0].innerHTML) 

    // let itog = document.getElementsByClassName('itog')[0].getElementsByTagName('div')[1]
    // itog.innerHTML = firstPrice+secondPrice+thirdPrice;