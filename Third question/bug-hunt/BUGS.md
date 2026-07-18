## باگ ۱ — Modal visible on load

- کجا: [\bug-hunt\public\style.css] خط [126]
- مشکل: ظاهر شدن فرم بدون کلیک کاربر
- ریشه: اگر در CSS همزمان هم با class identifier و با id identifier مشخصه ای رو تغییر بدیم اولویت با مقداری هست که در بلوک کد id identifier وجود داره.
- fix: Add a .modal-visible class containing "display: flex" and delete "display: flex" in \#modal then adjust the code in JS (public/js/modal.js)
