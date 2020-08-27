

function convertToMetric(val){
    //converts imperial amount 'val' into cms
    var cm = parseFloat(0);
    cm = val * 12 * 2.54;
    
    //push back into metric value
    if(document.getElementById("imperial").value != "")
        {
            document.getElementById("metric").value = cm.toFixed(2);
            document.getElementById("metricLit").value = null;
            document.getElementById("imperialGal").value = null;
            document.getElementById("metricKilo").value = null;
            document.getElementById("imperialPound").value = null;
            document.getElementById("metricCels").value = null;
            document.getElementById("imperialFaren").value = null;
            document.getElementById("metricMetre").value = null;
            document.getElementById("imperialYard").value = null;
            document.getElementById("metricKmPH").value = null;
            document.getElementById("imperialMPH").value = null;
        }
    
    // change the background colours
    document.getElementById("metric").setAttribute("class", "output")
    document.getElementById("imperial").setAttribute("class", "input")
    
    
}

function convertToImperial(val){
    //converts imperial amount 'val' into cms
    var feet = parseFloat(0);
    feet = val / 12 / 2.54;
    
    //push back into metric value
        if(document.getElementById("metric").value != " ")
        {
            document.getElementById("imperial").value = feet.toFixed(2);
            document.getElementById("metricLit").value = null;
            document.getElementById("imperialGal").value = null;
            document.getElementById("metricKilo").value = null;
            document.getElementById("imperialPound").value = null;
            document.getElementById("metricCels").value = null;
            document.getElementById("imperialFaren").value = null;
            document.getElementById("metricMetre").value = null;
            document.getElementById("imperialYard").value = null;
            document.getElementById("metricKmPH").value = null;
            document.getElementById("imperialMPH").value = null;
        }
   
    // change the background colours
    document.getElementById("metric").setAttribute("class", "output")
    document.getElementById("imperial").setAttribute("class", "input")

}

function convertToMetricGal(val){
    //converts imperial amount 'val' into litre
    var litre = parseFloat(0);
    litre = val * 3.785;
    
    //push back into metric value
    if(document.getElementById("imperialGal").value != "")
    {
        document.getElementById("metricLit").value = litre.toFixed(2);
            document.getElementById("metric").value = null;
            document.getElementById("imperial").value = null;
            document.getElementById("metricKilo").value = null;
            document.getElementById("imperialPound").value = null;
            document.getElementById("metricCels").value = null;
            document.getElementById("imperialFaren").value = null;
            document.getElementById("metricMetre").value = null;
            document.getElementById("imperialYard").value = null;
            document.getElementById("metricKmPH").value = null;
            document.getElementById("imperialMPH").value = null;
        
    }
    // change the background colours
    document.getElementById("metricLit").setAttribute("class", "output")
    document.getElementById("imperialGal").setAttribute("class", "input")
    
    
}

function convertToImperialLit(val){
    //converts imperial amount 'val' into litre
    var gallon = parseFloat(0);
    gallon = val * 0.264172;
    
        //push back into metric value
    if(document.getElementById("metricLit").value != "")
    {
    document.getElementById("imperialGal").value = gallon.toFixed(2);
            document.getElementById("metric").value = null;
            document.getElementById("imperial").value = null;
            document.getElementById("metricKilo").value = null;
            document.getElementById("imperialPound").value = null;
            document.getElementById("metricCels").value = null;
            document.getElementById("imperialFaren").value = null;
            document.getElementById("metricMetre").value = null;
            document.getElementById("imperialYard").value = null;
            document.getElementById("metricKmPH").value = null;
            document.getElementById("imperialMPH").value = null;
    }
    
    // change the background colours
    document.getElementById("metricLit").setAttribute("class", "output")
    document.getElementById("imperialGal").setAttribute("class", "input")
       
}


function convertToMetricPound(val){
    var kilo = parseFloat(0);
    kilo = val / 2.205;
    
    //push back into metric value
    if(document.getElementById("imperialPound").value != "")
        {
            document.getElementById("metricKilo").value = kilo.toFixed(2);
            document.getElementById("metric").value = null;
            document.getElementById("imperial").value = null;
            document.getElementById("metricLit").value = null;
            document.getElementById("imperialGal").value = null;
            document.getElementById("metricCels").value = null;
            document.getElementById("imperialFaren").value = null;
            document.getElementById("metricMetre").value = null;
            document.getElementById("imperialYard").value = null;
            document.getElementById("metricKmPH").value = null;
            document.getElementById("imperialMPH").value = null;
        }
    
    // change the background colours
    document.getElementById("metricKilo").setAttribute("class", "output")
    document.getElementById("imperialPound").setAttribute("class", "input")
    
    
}

function convertToImperialKilo(val){
    var pound = parseFloat(0);
    pound = val * 2.205;
    
    //push back into metric value
    if(document.getElementById("metricKilo").value != "")
        {
            document.getElementById("imperialPound").value = pound.toFixed(2);
            document.getElementById("metric").value = null;
            document.getElementById("imperial").value = null;
            document.getElementById("metricLit").value = null;
            document.getElementById("imperialGal").value = null;
            document.getElementById("metricCels").value = null;
            document.getElementById("imperialFaren").value = null;
            document.getElementById("metricMetre").value = null;
            document.getElementById("imperialYard").value = null;
            document.getElementById("metricKmPH").value = null;
            document.getElementById("imperialMPH").value = null;
            
        }
    
    // change the background colours
    document.getElementById("metricKilo").setAttribute("class", "output")
    document.getElementById("imperialPound").setAttribute("class", "input")
    
}

function convertToMetricFarenheit(val){
    //converts imperial amount 'val' into cms
    var celsius = parseFloat(0);
    celsius = (val-32)/1.8;
    
    //push back into metric value
    if(document.getElementById("imperialFaren").value != "")
        {
            document.getElementById("metricCels").value = celsius.toFixed(2);
            document.getElementById("metric").value = null;
            document.getElementById("imperial").value = null;
            document.getElementById("metricLit").value = null;
            document.getElementById("imperialGal").value = null;
            document.getElementById("metricKilo").value = null;
            document.getElementById("imperialPound").value = null;
            document.getElementById("metricMetre").value = null;
            document.getElementById("imperialYard").value = null;
            document.getElementById("metricKmPH").value = null;
            document.getElementById("imperialMPH").value = null;
        }
    
    // change the background colours
    document.getElementById("metricCels").setAttribute("class", "output")
    document.getElementById("imperialFaren").setAttribute("class", "input")
    
    
}

function convertToImperialCelsius(val){
    var farenheit = parseFloat(0);
    farenheit = (val*1.8) + 32;
    
    //push back into metric value
    if(document.getElementById("metricCels").value != "")
        {
            document.getElementById("imperialFaren").value = farenheit.toFixed(2);
            document.getElementById("metric").value = null;
            document.getElementById("imperial").value = null;
            document.getElementById("metricLit").value = null;
            document.getElementById("imperialGal").value = null;
            document.getElementById("metricKilo").value = null;
            document.getElementById("imperialPound").value = null;
            document.getElementById("metricMetre").value = null;
            document.getElementById("imperialYard").value = null;
            document.getElementById("metricKmPH").value = null;
            document.getElementById("imperialMPH").value = null;
        }
    
    // change the background colours
    document.getElementById("metricCels").setAttribute("class", "output")
    document.getElementById("imperialFaren").setAttribute("class", "input")
    
}

function convertToMetricYard(val){
    var metre = parseFloat(0);
    metre = val/1.196;
    
    //push back into metric value
    if(document.getElementById("imperialYard").value != "")
        {
            document.getElementById("metricMetre").value = metre.toFixed(2);
            document.getElementById("metric").value = null;
            document.getElementById("imperial").value = null;
            document.getElementById("metricLit").value = null;
            document.getElementById("imperialGal").value = null;
            document.getElementById("metricKilo").value = null;
            document.getElementById("imperialPound").value = null;
            document.getElementById("metricCels").value = null;
            document.getElementById("imperialFaren").value = null;
            document.getElementById("metricKmPH").value = null;
            document.getElementById("imperialMPH").value = null;
        }
    
    // change the background colours
    document.getElementById("metricMetre").setAttribute("class", "output")
    document.getElementById("imperialYard").setAttribute("class", "input")
    
    
}

function convertToImperialMetre(val){
    var yard = parseFloat(0);
    yard = val * 1.196;
    
    //push back into metric value
    if(document.getElementById("metricMetre").value != "")
        {
            document.getElementById("imperialYard").value = yard.toFixed(2);
            document.getElementById("metric").value = null;
            document.getElementById("imperial").value = null;
            document.getElementById("metricLit").value = null;
            document.getElementById("imperialGal").value = null;
            document.getElementById("metricKilo").value = null;
            document.getElementById("imperialPound").value = null;
            document.getElementById("metricCels").value = null;
            document.getElementById("imperialFaren").value = null;
            document.getElementById("metricKmPH").value = null;
            document.getElementById("imperialMPH").value = null;
        }
    
    // change the background colours
    document.getElementById("metricMetre").setAttribute("class", "output")
    document.getElementById("imperialYard").setAttribute("class", "input")
    
}


function convertToMetricMPH(val){
    var kmPH = parseFloat(0);
    kmPH = val * 1.609;
    
    //push back into metric value
    if(document.getElementById("imperialMPH").value != "")
        {
            document.getElementById("metricKmPH").value = kmPH.toFixed(2);
            document.getElementById("metric").value = null;
            document.getElementById("imperial").value = null;
            document.getElementById("metricLit").value = null;
            document.getElementById("imperialGal").value = null;
            document.getElementById("metricKilo").value = null;
            document.getElementById("imperialPound").value = null;
            document.getElementById("metricCels").value = null;
            document.getElementById("imperialFaren").value = null;
            document.getElementById("metricMetre").value = null;
            document.getElementById("imperialYard").value = null;
        }
    
    // change the background colours
    document.getElementById("metricKmPH").setAttribute("class", "output")
    document.getElementById("imperialMPH").setAttribute("class", "input")
    
    
}

function convertToImperialKmPH(val){
    var mph = parseFloat(0);
    mph = val / 1.609;
    
    //push back into metric value
    if(document.getElementById("metricKmPH").value != "")
        {
            document.getElementById("imperialMPH").value = mph.toFixed(2);
            document.getElementById("metric").value = null;
            document.getElementById("imperial").value = null;
            document.getElementById("metricLit").value = null;
            document.getElementById("imperialGal").value = null;
            document.getElementById("metricKilo").value = null;
            document.getElementById("imperialPound").value = null;
            document.getElementById("metricCels").value = null;
            document.getElementById("imperialFaren").value = null;
            document.getElementById("metricMetre").value = null;
            document.getElementById("imperialYard").value = null;
        }
    
    // change the background colours
    document.getElementById("metricKmPH").setAttribute("class", "output")
    document.getElementById("imperialMPH").setAttribute("class", "input")
    
}

       
