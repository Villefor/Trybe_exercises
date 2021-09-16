function selectStates (){
    let state = document.getElementById("estados")

    let stateList = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    for (let index = 0; index < stateList.length; index += 1) {
     let optionsList = document.createElement('option')
     optionsList.value = stateList[index];
     optionsList.innerHTML = stateList[index];
     state.appendChild(optionsList);
  }
}
selectStates();
