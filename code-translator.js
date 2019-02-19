
function inp(){
    var input_text,inp_lang,out_lang,test1_1,test1_2,inp_test1;
    input_text = document.getElementById("input").value;
    inp_lang = document.getElementById("inplang").value;
    out_lang = document.getElementById("out_lang").value;
    switch(inp_lang)
    {
        case "JavaScript":
            switch(input_text)
        {
            case "alert('123')":
                switch(out_lang)
                {
                    case "PHP":
                        document.getElementById("out").value = "echo('123')";
                        break;
                    case "C#":
                        document.getElementById("out").value = "Console.Write('123')";
                        break;
                }
            break;
            case "var a":
            switch(out_lang)
                {
                    case "PHP":
                        document.getElementById("out").value = "$ a";
                        break;
                    case "C#":
                        document.getElementById("out").value = "string/int a";
                        break;
                }
            break;
        }
        break;
        case "C#":
            switch(input_text)
        {
            case "Console.Write('123')":
                switch(out_lang)
                {
                    case "PHP":
                        document.getElementById("out").value = "echo('123')";
                        break;
                    case "JavaScript":
                        document.getElementById("out").value = "alert('123')";
                        break;
                }
            break;
            case "string a":
            switch(out_lang)
                {
                    case "PHP":
                        document.getElementById("out").value = "$ a";
                        break;
                    case "JavaScript":
                        document.getElementById("out").value = "var a";
                        break;
                }
            break;    
            case "int a":
            switch(out_lang)
                {
                    case "PHP":
                        document.getElementById("out").value = "$ a";
                        break;
                    case "JavaScript":
                        document.getElementById("out").value = "var a";
                        break;
                }
            break;    
                
        }
        break;
        case "PHP":
            switch(input_text)
            {
            case "echo('123')":
                switch(out_lang)
                {
                    case "JavaScript":
                        document.getElementById("out").value = "alert('123')";
                        break;
                    case "C#":
                        document.getElementById("out").value = "Console.Write('123')";
                        break;
                }
            break;    
            case "$ a":
            switch(out_lang)
                {
                    case "C#":
                        document.getElementById("out").value = "string/int a";
                        break;
                    case "JavaScript":
                        document.getElementById("out").value = "var a";
                        break;
                }
            break;
                
        }
        break;
    }
}
