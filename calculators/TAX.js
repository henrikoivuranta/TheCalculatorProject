function calculateTAX(){
    var tax, amount, result, taxSubtract, taxAdd; 

    var add;
    var sub;

    add = document.getElementById("Add");
    sub = document.getElementById("Subtract");

    tax = document.getElementById("tax").value / 100;
    amount = document.getElementById("amount").value;

    taxSubtract = 1 - tax;
    taxAdd = 1 + tax;

    if(add.checked)
    {
        result = amount * taxAdd;
    }

    if(sub.checked)
    {
        result = amount * taxSubtract;
    }

    if(add.checked || sub.checked)
    {
        alert(result);
    }
    else
    {
        alert("Error");
    }
}