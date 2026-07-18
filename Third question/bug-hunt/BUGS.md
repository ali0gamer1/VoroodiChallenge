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
