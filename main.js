var tableOne = document.getElementById("tableOne");
var tableTwo = document.getElementById("tableTwo");
var tableThree = document.getElementById("tableThree");


tableOne.addEventListener("click", function(){
    var tableOneAux = 0;
    var tableOneOrder = [];
    var orderCount = 0;

    while (tableOneAux == 0){ //Laço 'Enquanto' responsável por perguntar repetidamente sobre os pedidos. 
        var orderCustomer = window.prompt("|Mesa 1|  -  Por gentileza, faça o seu pedido!");   
        if (orderCustomer){
            tableOneOrder[orderCount] = orderCustomer; // 'tableOneOrder' é um array que recebe o pedido através da 
            orderCount++;                              //  var 'orderCount', na posição 'orderCount'
        }
       
        var tableOneWhile = window.prompt("Gostaria de pedir algo mais? 'S/N'"); // 'tableOneWhile' recebe 'S/N' e é 
        if (tableOneWhile == "N"){                                               //  utilizado para determinar a continuidade
            tableOneAux = 1;                                                     //  do laço 'Enquanto'
        }
    }
    
    var allOrders = "|Mesa 1|:\n";
    if (orderCount > 0) {
        for (var i = 0; i < orderCount; i++) {
            var itemNumber = parseInt(tableOneOrder[i]);
            var itemName = getItemName(itemNumber);
            allOrders += "Pedido " + (i + 1) + ": " + itemName + "\n"; 
        }
    } else {
        allOrders += "Nenhum pedido foi feito.";
    }
    
    alert(allOrders);

    function getItemName(number) {
        var items = {
            1: "Pastel",
            2: "Cachorro-quente",
            3: "Pão de quejo",
            4: "Refrigerante",
            5: "Água",
            6: "Suco",
            7: "Brigadeiro",
            8: "Cocada",
            9: "Beijinho",
        };
        return items[number] || "Item não encontrado";
    }
});

tableTwo.addEventListener("click", function(){
    var tableTwoAux = 0;
    var tableTwoOrder = [];
    var orderCount = 0;

    while (tableTwoAux == 0){ //Laço 'Enquanto' responsável por perguntar repetidamente sobre os pedidos. 
        var orderCustomer = window.prompt("|Mesa 2|  -  Por gentileza, faça o seu pedido!");   
        if (orderCustomer){
            tableTwoOrder[orderCount] = orderCustomer; // 'tableTwoOrder' é um array que recebe o pedido através da 
            orderCount++;                              //  var 'orderCustomer', na posição 'orderCount'
        }
       
        var tableTwoWhile = window.prompt("Gostaria de pedir algo mais? 'S/N'"); // 'tableTwoWhile' recebe 'S/N' e é 
        if (tableTwoWhile == "N"){                                               //  utilizado para determinar a continuidade
            tableTwoAux = 1;                                                     //  do laço 'Enquanto'
        }
    }
    
    var allOrders = "|Mesa 2|:\n";
    if (orderCount > 0) {
        for (var i = 0; i < orderCount; i++) {
            var itemNumber = parseInt(tableTwoOrder[i]);
            var itemName = getItemName(itemNumber);
            allOrders += "Pedido " + (i + 1) + ": " + itemName + "\n"; 
        }
    } else {
        allOrders += "Nenhum pedido foi feito.";
    }
    
    alert(allOrders);

    function getItemName(number) {
        var items = {
            1: "Pastel",
            2: "Cachorro-quente",
            3: "Pão de quejo",
            4: "Refrigerante",
            5: "Água",
            6: "Suco",
            7: "Brigadeiro",
            8: "Cocada",
            9: "Beijinho",
        };
        return items[number] || "Item não encontrado";
    }
});

tableThree.addEventListener("click", function(){
    var tableThreeAux = 0;
    var tableThreeOrder = [];
    var orderCount = 0;

    while (tableThreeAux == 0){
        var orderCustomer = window.prompt("|Mesa 3|  -  Por gentileza, faça o seu pedido!");
        if (orderCustomer){
            tableThreeOrder[orderCount] = orderCustomer; 
            orderCount++;
        }
        var tableThreeWhile = window.prompt("Gostaria de pedir algo mais? S/N");
        if (tableThreeWhile == "N"){
            tableThreeAux = 1;
        }
    }
    
    var allOrders = "|Mesa 3|:\n";
    if (orderCount > 0) {
        for (var i = 0; i < orderCount; i++) {
            var itemNumber = parseInt(tableThreeOrder[i]);
            var itemName = getItemName(itemNumber);
            allOrders += "Pedido " + (i + 1) + ": " + itemName + "\n"; 
        }
    } else {
        allOrders += "Nenhum pedido foi feito.";
    }
    
    alert(allOrders);

    function getItemName(number) {
        var items = {
            1: "Pastel",
            2: "Cachorro-quente",
            3: "Pão de quejo",
            4: "Refrigerante",
            5: "Água",
            6: "Suco",
            7: "Brigadeiro",
            8: "Cocada",
            9: "Beijinho",
        };
        return items[number] || "Item não encontrado";
    }
});