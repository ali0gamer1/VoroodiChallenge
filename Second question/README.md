سوال دوم:
این سوال جالبی بود. اولین راه حلی که به ذهنم رسید استفاده از یک تابع hash بود اما به یاد نداشتم که باید دقیقا چه الگوریتمی داشته باشه. نشستم فکر کردم دیدم اعداد اول در رمزنگاری خیلی استفاده میشن.
	ایده به این صورته که چون هر عدد رو میتوان بصورت ضربی از اعداد اول نوشت و اگر رشته هارو در یک لیست spread کنیم و هر لیست رو یک عدد در نظر بگیریم, میشه anagram ها رو گروه بندی کرد.
برای این کار نیازه که هر حرف الفبای انگلیسی رو به یک عدد اول منتسب کنیم که بتونیم حین کار با یک کلمه اونهارو درهم ضرب کنیم که به یک عدد یونیک منتسب به یک آناگرام برسیم.  
کد در زیر و در [این فایل](./code.py) آورده شده و فایل تست هم [اینجاس](./test.py).

```python
#Question 2.

#Anagram hash using prime numbers.

#Prime * Prime = Product of primes.

#hash = sum of products

#dictionary for group placement

#the first 26 prime numbers

primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]

def hashString(arg:str)->int:

    total = 1

    for char in arg:

        index = ord(char) - ord("a")

        total = total * primes[index]

    return total


def groupByHash(arg:list[str]):

    group:dict[int,list[str]] = {}

    for word in arg:
        _hash = hashString(word)

        if not group.get(_hash):
            group[_hash] = [word]

        else:

            group[_hash].append(word)

    return list(group.values())


if __name__ == "__main__":

    l = ["eat", "tea", "tan", "ate", "nat", "bat"]

    print(groupByHash(l))
```


و اما راه حل های دیگر:
راه های دیگه رو با فکر کردن بیشتر بدست اوردم چون منطقی ترین راه برای من اینجوری بود و از طرفی پیچیدگی زیادی نداره.
راه حل ممکن دیگر:
مرتب سازی رشته ها بر اساس کد ASCII و مقایسه کردن اونها.(راه ساده تر)
چک کردن طول هر رشته و سپس شمردن تعداد تکرار هر حرف الفبا در هر کلمات گروه بندی شده توسط طول کلمه. این کار سَمّیه.
