
سوال اول:
در این سوال از stack و عملیات push و pop برای تایید یک رشته استفاده کردم.
چون ترتیب بسته شدن مهمه فقط از یک استک استفاده میکنم و فقط براکت های باز رو توی استک پوش میکنم و اگر حین iterate کردن رشته به کرکتر بسته شدن براکت برخورد کردم با اخرین مورد توی استک مقایسه اش میکنم و چک میکنم که مچ هستن یا نه. 
بجای اینکه دو لیست برای تعیین نوع باز یا بسته شدن براکت ها و یک لیست برای کرکتر های معتبر درست بکنم, اول اومدم یک دیکشنری تعریف کردم که هم در چکینگ کمتر کد بنویسم هم فضای کمتری اشغال بشه توی سیستم.
البته بحث اینکه function call ها و بقیه موارد چقدر از منابع سیستم استفاده میکنند جداست ولی این راه حل مورد علاقه منه.
بقیه توضیحات در خود [کد](./code.py) که در زیر هم آوردم.
Let the code speak for itself 🗿🗿

```Python
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

    assert validateString("abc") == True  # No brackets, should be valid

    assert validateString("(a[b{c}d]e)f") == True  # Mixed with other characters

    print("All tests passed!")

test_validateString()
```

راه حل دوم:
بجای استفاده از دیکشنری و ناخوانا تر کردن کد میتونستم اینجوری تعریف کنم:

```Python
	openings = ["(", "[", "{"]
    closings = [")", "]", "}"]
    openingsAndClosings = {o:c for o,c in zip(openings, closings)}
```
یا اصلا متغیر سوم رو تعریف نمیکردم و if طولانی تر مینوشتم ولی سرعت کد نوشتن و حتی اجرا کردن ممکنه زیاد تر بشه.