
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
            case "alert('Hello, World!')":
                switch(out_lang)
                {
                    case "PHP":
                        document.getElementById("out").value = "echo('Hello, World!')";
                        break;
                    case "C#":
                        document.getElementById("out").value = "Console.Write('Hello, World!')";
                        break;
                    case "Ruby":
                        document.getElementById("out").value ="puts 'Hello, World!'";
                        break;
                    case "Python":
                        document.getElementById("out").value ="print 'Hello, World!'";
                        break;
                    case "Pascal":
                        document.getElementById("out").value ="Writeln('Hello, World!')";
                        break;   
                }
            break;
            case "var a = ''":
            switch(out_lang)
                {
                    case "PHP":
                        document.getElementById("out").value = "$ a = ''";
                        break;
                    case "C#":
                        document.getElementById("out").value = "string/int a = ''";
                        break;
                    case "Ruby":
                        document.getElementById("out").value ="$/@ a = ''";
                        break;
                    case "Python":
                        document.getElementById("out").value ="a = ''";
                        break;
                    case "Pascal":
                        document.getElementById("out").value ="a:''";
                        break;    
                }
            break;
            default:
                document.getElementById("out").value = "извините,команда не распознана";
            break;
        }
        break;
        case "C#":
            switch(input_text)
        {
            case "Console.Write('Hello, World!')":
                switch(out_lang)
                {
                    case "PHP":
                        document.getElementById("out").value = "echo('Hello, World!')";
                        break;
                    case "JavaScript":
                        document.getElementById("out").value = "alert('Hello, World!')";
                        break;
                    case "Ruby":
                        document.getElementById("out").value ="puts 'Hello, World!'";
                        break;
                    case "Python":
                        document.getElementById("out").value ="print 'Hello, World!'";
                        break;
                    case "Pascal":
                        document.getElementById("out").value ="Writeln('Hello, World!')";
                        break;
                }
            break;
            case "string a = ''":
            switch(out_lang)
                {
                    case "PHP":
                        document.getElementById("out").value = "$ a = ''";
                        break;
                    case "JavaScript":
                        document.getElementById("out").value = "var a = ''";
                        break;
                    case "Ruby":
                        document.getElementById("out").value ="$/@ a = ''";
                        break;
                    case "Python":
                        document.getElementById("out").value ="a = ''";
                        break;
                    case "Pascal":
                        document.getElementById("out").value ="a:''";
                        break;
                }
            break;    
            case "int a = ''":
            switch(out_lang)
                {
                    case "PHP":
                        document.getElementById("out").value = "$ a =''";
                        break;
                    case "JavaScript":
                        document.getElementById("out").value = "var a =''";
                        break;
                    case "Ruby":
                        document.getElementById("out").value ="$/@ a = ''";
                        break;
                    case "Python":
                        document.getElementById("out").value ="a = ''";
                        break;
                    case "Pascal":
                        document.getElementById("out").value ="a:''";
                        break;
                }
            break; 
            default:
                document.getElementById("out").value = "извините,команда не распознана";
            break;   
                
        }
        break;
        case "PHP":
            switch(input_text)
        {
            case "echo('Hello, World!')":
                switch(out_lang)
                {
                    case "JavaScript":
                        document.getElementById("out").value = "alert('Hello, World!')";
                        break;
                    case "C#":
                        document.getElementById("out").value = "Console.Write('Hello, World!')";
                        break;
                    case "Ruby":
                        document.getElementById("out").value ="puts 'Hello, World!'";
                        break;
                    case "Python":
                        document.getElementById("out").value ="print 'Hello, World!'";
                        break;
                    case "Pascal":
                        document.getElementById("out").value ="Writeln('Hello, World!')";
                        break;
                }
            break;    
            case "$ a = ''":
            switch(out_lang)
                {
                    case "C#":
                        document.getElementById("out").value = "string/int a = ''";
                        break;
                    case "JavaScript":
                        document.getElementById("out").value = "var a = ''";
                        break;
                    case "Ruby":
                        document.getElementById("out").value ="$/@ a = ''";
                        break;
                    case "Python":
                        document.getElementById("out").value ="a = ''";
                        break;
                    case "Pascal":
                        document.getElementById("out").value ="a:''";
                        break;
                }
            break;
            default:
                document.getElementById("out").value = "извините,команда не распознана";
            break;
                
        }
        break;
        case "Ruby":
        switch(input_text)
        {
            case "puts 'Hello, World!'":
                switch(out_lang)
                {
                    case "JavaScript":
                        document.getElementById("out").value = "alert('Hello, World!')";
                        break;
                    case "C#":
                        document.getElementById("out").value = "Console.Write('Hello, World!')";
                        break;
                    case "PHP":
                        document.getElementById("out").value ="echo('Hello, World!')";
                        break;
                    case "Python":
                        document.getElementById("out").value ="print 'Hello, World!'";
                        break;
                    case "Pascal":
                        document.getElementById("out").value ="Writeln('Hello, World!')";
                        break;
                }
            break;    
            case "@ a = ''":  
                switch(out_lang)
                {
                    case "C#":
                        document.getElementById("out").value = "string/int a = ''";
                        break;
                    case "JavaScript":
                        document.getElementById("out").value = "var a = ''";
                        break;
                    case "PHP":
                        document.getElementById("out").value ="$ a = ''";
                        break;
                    case "Python":
                        document.getElementById("out").value ="a = ''";
                        break;
                    case "Pascal":
                        document.getElementById("out").value ="a:''";
                        break;
                }
            break;
            case "$ a = ''":
                switch(out_lang)
                {
                    case "C#":
                        document.getElementById("out").value = "string/int a = ''";
                        break;
                    case "JavaScript":
                        document.getElementById("out").value = "var a = ''";
                        break;
                    case "PHP":
                        document.getElementById("out").value ="$ a = ''";
                        break;
                    case "Python":
                        document.getElementById("out").value ="a = ''";
                        break;
                    case "Pascal":
                        document.getElementById("out").value ="a:''";
                        break;
                }
            break;
            default:
                document.getElementById("out").value = "извините,команда не распознана";
            break;
        }
        break;
        case "Python":
        switch(input_text)
        {
            case "print 'Hello, World!'":
                switch(out_lang)
                {
                    case "JavaScript":
                        document.getElementById("out").value = "alert('Hello, World!')";
                        break;
                    case "C#":
                        document.getElementById("out").value = "Console.Write('Hello, World!')";
                        break;
                    case "PHP":
                        document.getElementById("out").value ="echo('Hello, World!')";
                        break;
                    case "Ruby":
                        document.getElementById("out").value ="puts 'Hello, World!'";
                        break;
                    case "Pascal":
                        document.getElementById("out").value ="Writeln('Hello, World!')";
                        break;
                }
            break;    
            case "a = ''":
                switch(out_lang)
                {
                    case "C#":
                        document.getElementById("out").value = "string/int a = ''";
                        break;
                    case "JavaScript":
                        document.getElementById("out").value = "var a = ''";
                        break;
                    case "PHP":
                        document.getElementById("out").value ="$ a = ''";
                        break;
                    case "Ruby":
                        document.getElementById("out").value ="$/@ a = ''";
                        break;
                    case "Pascal":
                        document.getElementById("out").value ="a:''";
                        break;
                }
            break;
            default:
                document.getElementById("out").value = "извините,команда не распознана";
            break;
        }
        break;
        case "Pascal":
        switch(input_text)
        {
            case "Writeln('Hello, World!')":
                switch(out_lang)
                {
                    case "JavaScript":
                        document.getElementById("out").value = "alert('Hello, World!')";
                        break;
                    case "C#":
                        document.getElementById("out").value = "Console.Write('Hello, World!')";
                        break;
                    case "PHP":
                        document.getElementById("out").value ="echo('Hello, World!')";
                        break;
                    case "Ruby":
                        document.getElementById("out").value ="puts 'Hello, World!'";
                        break;
                    case "Python":
                        document.getElementById("out").value ="print 'Hello, World!'";
                        break;
                }
            break;    
            case "a:''":
                switch(out_lang)
                {
                    case "C#":
                        document.getElementById("out").value = "string/int a = ''";
                        break;
                    case "JavaScript":
                        document.getElementById("out").value = "var a = ''";
                        break;
                    case "PHP":
                        document.getElementById("out").value ="$ a = ''";
                        break;
                    case "Ruby":
                        document.getElementById("out").value ="$/@ a = ''";
                        break;
                    case "Python":
                        document.getElementById("out").value ="a = ''";
                        break;
                }
            break;
            default:
                document.getElementById("out").value = "извините,команда не распознана";
            break;
        }
        break;
    }
}
