#Parenthesis and bracket validator

def validateString(arg:str):

    openingsAndClosings = {o:c for o,c in zip(['(', '[', '{'], [')', ']', '}'])}

    stack = []
    
    validChars = [*openingsAndClosings.keys(), *openingsAndClosings.values()] 
    
    for char in arg:
        if char in validChars:
            
            if char in openingsAndClosings.keys():
                stack.append(char)
            else:
                if not stack:
                    return False
                top = stack.pop()
                
                #Computationally, writing multiple ifs is faster. but i used a hacky way to make this more readable.               
                if openingsAndClosings[top] != char:
                    return False
       
    
    return len(stack) == 0    

#AI designed test cases for the validateString function
def test_validateString():
    assert validateString("()") == True
    assert validateString("[]") == True
    assert validateString("{}") == True
    assert validateString("({[]})") == True
    assert validateString("({[)]}") == False
    assert validateString("({[}") == False
    assert validateString("({[]})]") == False
    assert validateString("") == True
    assert validateString("abc") == True  # No brackets, should be valid
    assert validateString("(a[b{c}d]e)f") == True  # Mixed with other characters
    print("All tests passed!")
test_validateString()