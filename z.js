"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
    const goods = [
		{item: "Von refrigerator", color: "black", cost:10},
		{item: "Gas cylinder", color: "Orange", cost:20},
		{item:"Safety Boots", color: "white", cost: 30},
		{item: "rain coat", color: "blue", cost: 40},
		{item: "bar soap", color: "green", cost:50},
	];
    document.querySelectorAll("button").forEach((button)=>{
    button.addEventListener("click", ()=>{
		let userBudgetSelection = goods.filter(i=>i.cost==button.dataset.value);
		let itemName = userBudgetSelection.map(i=>i.item);
		let itemColor = userBudgetSelection.map(i=>i.color);
		
		let li = document.createElement("p");
		let p =document.createElement("p");
		li.innerHTML = `ITEM: ${itemName}`;
		p.innerHTML = `COLOR: ${itemColor}`;
		
		document.querySelector(".output").appendChild(li);
		document.querySelector(".output").appendChild(p)
	})
	});


});