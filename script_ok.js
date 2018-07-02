
var incomeArr = [];
var expensesArr = [];
//console.log(incomeArr);
///console.log(expensesArr);
//add
var id_elem=0;

document.querySelector('.add__btn').addEventListener("click", function(){
	getInput();
	displayElem();
	calculateBudget();
	console.log(incomeArr);
	console.log(expensesArr);
	
})

function getInput(){

	var type=document.querySelector(".add__type").value;
	var title=document.querySelector(".add__description").value;
	var val=document.querySelector(".add__value").value;
	var elemArr = [];
	if(title!=="" && val!=="" && val!==NaN){
		elemArr.push(type);
		elemArr.push(title);
		elemArr.push(val);
		id_elem++
	//console.log(id_elem)
		elemArr.push(id_elem);

		if (type=="inc"){
		
		incomeArr.push(elemArr);
	//console.log(id);
		}
		else{
		expensesArr.push(elemArr);
		}
	}
	//return id_elem
}


function displayElem(){

income_lista=document.querySelector(".income__list");
exp_lista=document.querySelector(".expenses__list");
income_lista.innerHTML=""
exp_lista.innerHTML=""
for(i=0; i<incomeArr.length; i++){
	income_lista.innerHTML+='<div class="item clearfix" id="income-0"><div class="item__description">'+incomeArr[i][1]+'</div><div class="right clearfix"><div class="item__value">+'+ incomeArr[i][2]+'</div><div class="item__delete"><button class="item__delete--btn" id="inc_delete" onClick="deletee1('+i+')"><i class="ion-ios-close-outline"></i></div>'
}
for(i=0; i<expensesArr.length; i++){
	exp_lista.innerHTML+='<div class="item clearfix" id="expense-0"><div class="item__description">'+expensesArr[i][1]+'</div><div class="right clearfix"><div class="item__value">-'+ expensesArr[i][2]+'</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn" id="exp_delete" onClick="deletee2('+i+')"><i class="ion-ios-close-outline"></i></button></div></div></div>'
}
title=document.querySelector(".add__description").value="";
val=document.querySelector(".add__value").value="";
}


function deletee1(i){
//	console.log(i)
	incomeArr.splice(i, 1);
//	console.log(incomeArr)
	displayElem()
	calculateBudget()
}

function deletee2(i){
//	console.log(i)
	expensesArr.splice(i, 1);
//	console.log(expensesArr)
calculateBudget()
	displayElem()
	
}


function calculateBudget(){
	var sumIncome=0
	for(i=0; i<incomeArr.length; i++){
		sumIncome +=Number(incomeArr[i][2])
		
		console.log(sumIncome)

	}

	var sumExp=0
	for(i=0; i<expensesArr.length; i++){
		sumExp +=Number(expensesArr[i][2])
		
		console.log(sumExp)


	}
	document.querySelector('.budget__income--value').innerHTML="+"+sumIncome;
	document.querySelector('.budget__expenses--value').innerHTML="-"+sumExp;
	var budget=sumIncome-sumExp;
	document.querySelector('.budget__value').innerHTML=budget

	var budgetPurcentage=Math.floor((sumExp*100)/(sumIncome));

	document.querySelector('.budget__expenses--percentage').innerHTML=budgetPurcentage+"%"
}

function getDate(){
	var curDate=new new Date()
	var month= curDate.getMonth();
	var year= curDate.getFullYear()
	document.querySelector('.budget__title--month').innerHTML=month+" "+year
}



