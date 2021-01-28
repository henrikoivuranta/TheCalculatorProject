function calculateTAX(){
    var tax, amount, result, taxSubtract, taxAdd; 

    var add;
    var sub;

    var resultBox;

    add = document.getElementById("Add");
    sub = document.getElementById("Subtract");

    resultBox = document.getElementById("resultBox");

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
        resultBox.value = result.toFixed(2);
    }
    else
    {
        document.getElementById("red-alert0").style.display = "block";
        setTimeout(function(){
            document.getElementById("red-alert0").style.display = "none";
        }, 3000);
        
    }
}