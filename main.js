const marseCost = 50;
const moonCost = 60;



function planettravel(type,identity){

//catch the input value
    const planet_input_id = document.getElementById(type+'-input');
    const planet_input_text = planet_input_id.value;
    const planet_value =parseInt(planet_input_text);

//catch the value cost
    const planet_cost_id =document.getElementById(type+'-cost');
    const planet_cost =planet_cost_id.innerText;
    const planet_cost_value =parseInt(planet_cost);

//catch the total cost
    const total_cost_id =document.getElementById('total-cost');
    const total_cost =total_cost_id.innerText;
    const total_cost_value =parseInt(total_cost);

   

    if(identity =='plus'){
        let numer_of_cost =planet_value+1;
        planet_input_id.value =numer_of_cost;
        if(type=='mars')
        {
            const per_value_cost = numer_of_cost*50;
            planet_cost_id.innerText =per_value_cost
        }
        else{
            const per_value_cost = numer_of_cost*60;
            planet_cost_id.innerText =per_value_cost
        }
  
    }
    else{

        if(planet_value>0){
            let numer_of_cost =planet_value-1;
            planet_input_id.value =numer_of_cost;

            if(type=='mars')
            {
                const per_value_cost = numer_of_cost*50;
                planet_cost_id.innerText =per_value_cost
            }
            else{
                const per_value_cost = numer_of_cost*60;
                planet_cost_id.innerText =per_value_cost
            }
        }  
    }  
    
    //cost calculation

    let total = updatebalance('mars',50)+updatebalance('mon',60) ;
    //console.log(total);
    total_cost_id.innerText =total 
    

}

function updatebalance(type,price){

        //catch the value cost
        const planet_cost_id =document.getElementById(type+'-input');
        const planet_cost =planet_cost_id.value;
        const planet_cost_value =parseInt(planet_cost);
        return planet_cost_value*price; 

}

/*******mars event handler*****/
document.getElementById('buton-mars-plus').addEventListener('click',function(){
    planettravel('mars','plus')
});

document.getElementById('buton-mars-minus').addEventListener('click',function(){
    planettravel('mars','minus') 
});

/******* moon event handler *****/
document.getElementById('buton-mon-plus').addEventListener('click',function(){
    planettravel('mon','plus')
});


document.getElementById('buton-mon-minus').addEventListener('click',function(){
    planettravel('mon','minus')   
})