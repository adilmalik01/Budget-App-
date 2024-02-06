let budget = document.querySelector("#yourbudget")
let budgetBtn = document.querySelector("#budgetBtn")
let totalBudgut = document.querySelector("#totalBudget")
let totalBalance = document.querySelector("#totalBalance")
let expenseCost = document.querySelector("#expenseCost")
let expenseProduct = document.querySelector("#expenseProduct")
let list = document.querySelector(".ExpenseList")
let errorMsg = document.querySelector(".errorMsg")
let totalExpense = document.querySelector("#totalExpense")









document.querySelector(".btn").addEventListener("click", () => {
  if (!expenseCost.value || !expenseProduct.value) {
    alert("please write something")
    return false;
  }

  if (expenseCost.value.match('-')) {
    alert("Only positive value")
    return false;
  }
  let intial = JSON.parse(localStorage.getItem("detail")) || [];
  console.log(intial);

  let addObj = {
    product_Name_value: expenseProduct.value,
    product_Cost_value: expenseCost.value
  }

  intial.push(addObj)

  localStorage.setItem("detail", JSON.stringify(intial))

  location.href = location.href
})


//  budget function 

var totalAmmout = 0;
budgetBtn.addEventListener("click", (e) => {
  if (budget.value == "" || budget.value < 100) {
    errorMsg.style.display = 'block '
  } else {

    localStorage.setItem("budget", budget.value)
    console.log('buget');
    location.href = location.href
  }
})




// show list function 
const showList = () => {
  let getList = JSON.parse(localStorage.getItem("detail")) || [];
  getList.forEach((lists, i) => {
    list.innerHTML += `
    <div class="list">
                <div class="list-item">
                    <p>${lists.product_Name_value}</p>
                </div>
                <div class="list-item">
                    <p>${lists.product_Cost_value}</p>
                </div>
                <div class="list-item">
                    <div class="btn-div">
                        <button><i class="bi bi-pencil-square"></i></button>
                        <button onclick='OneListDel(${i})'><i class="bi bi-trash-fill"></i></button>
                    </div>
                </div>
            </div>
    `
  });
}



const OneListDel = (index) => {
  let delList = JSON.parse(localStorage.getItem("detail")) || [];
  console.log(delList);
  delList.splice(index, 1)
  console.log(delList);

  localStorage.setItem("detail", JSON.stringify(delList))

  location.href = location.href
}


showList()