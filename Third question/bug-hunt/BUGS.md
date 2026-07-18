## باگ ۱ — Modal visible on load

 کجا: [\bug-hunt\public\style.css] خط [126]
 
 مشکل: ظاهر شدن فرم بدون کلیک کاربر
 
 ریشه: اگر در CSS همزمان هم با class identifier و با id identifier مشخصه ای رو تغییر بدیم اولویت با مقداری هست که در بلوک کد id identifier وجود داره.

- fix: Add a .modal-visible class containing "display: flex" and delete "display: flex" in \#modal then adjust the code in JS (public/js/modal.js)
  Also added the cancel functionality

## باگ 2 — Ketabs not showing

کجا: [Third question\bug-hunt\public\js\app.js] خط [6]

مشکل: ظاهر نشدن لیست کتاب ها

ریشه: مقدار برگشتی getBooks یک promise هست چون getBooks یک فانکشن async است.

- fix: Add "await" before the call. 

## باگ 3 — Read checkbox had no effect

کجا: [Third question\bug-hunt\routes\books.js] خط [29 و 22]

مشکل: مقدار چک باکس "خوانده شده" اثری نمیگذاشت

ریشه: به علت هارد کد شده بودن مقدار ذخیره شده در دیتابیس اثری نداشت.

- fix: Replace "false" with "req.body.read"

## باگ 4 — Book cannot be deleted

کجا: [Third question\bug-hunt\public\js\render.js] خط 34

مشکل: کتاب بعد از فشردن دکمه حذف, حذف نمیشد

ریشه: به علت function scope بودن  کلیدواژه var و دسترسی داشتن callback ها به i که به ایندکس خارج از آرایه اشاره میکند.

fix: Either use the defined "const book" object or change "var" to "let"


## باگ 5 — Book cannot be edited

کجا: [Third question\bug-hunt\public\js\render.js] خط 31

مشکل: کتاب بعد از فشردن دکمه ادیت, ادیت نمیشد

ریشه: به علت مشابه در باگ 4

fix: Either use the defined "const book" object or change "var" to "let"


## باگ 6 — Book list not updating after deletion

کجا: [Third question\bug-hunt\public\js\render.js] خط 34

مشکل: لیست کتاب ها بعد از فشردن دکمه دلیت اپدیت نمیشد

ریشه: چون هیچ عملی راجع به اپدیت کردن محتوا بعد از دلیت انجام نمیشه

- fix: add loadBooks() at line 35


## باگ 7 — Page refreshing after book update

کجا: [Third question\bug-hunt\public\index.html] خط 24

مشکل: صفحه بعد از ثبت, رفرش میشد.

ریشه: به علت رفتار طبیعی تگ form این اتفاق میوفته.

- fix: add this to the form attribute list
```html
 onsubmit="return false"
```



## باگ 8 — Unwanted exception when special regex characters are searched

کجا: [Third question\bug-hunt\routes\books.js] خط 11
مشکل: اکسپشن بعد از سرچ کردن کرکتر های مخصوص رجکس

ریشه: مشکل درونی رجکس

- fix: escape the search term