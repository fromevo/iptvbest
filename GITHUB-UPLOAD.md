# Как загрузить проект на GitHub

Пошаговая инструкция из папки проекта (в терминале).

---

## 1. Открыть терминал в папке проекта

- В Cursor / VS Code: **Terminal → New Terminal** (или `` Ctrl+` ``).
- Либо откройте PowerShell или «Командную строку» и перейдите в папку проекта:
  ```bash
  cd "d:\Проекты Cursor\iptvbest"
  ```

---

## 2. Инициализировать Git (если ещё не сделано)

Проверить, есть ли уже Git:
```bash
git status
```

Если команда не найдена — установите [Git для Windows](https://git-scm.com/download/win) и снова откройте терминал.

Если пишет «not a git repository», инициализируйте репозиторий:
```bash
git init
```

---

## 3. Добавить все файлы и сделать первый коммит

```bash
git add .
git status
```

Проверьте по `git status`, что в списке нет лишнего (например, `node_modules` или `.env.local` — они должны игнорироваться через `.gitignore`).

Создать коммит:
```bash
git commit -m "Первый коммит: сайт IPTV Best"
```

---

## 4. Создать репозиторий на GitHub

1. Зайдите на [github.com](https://github.com) и войдите в аккаунт.
2. Нажмите **«+»** (правый верхний угол) → **«New repository»**.
3. Заполните:
   - **Repository name**: например `iptvbest` или `iptv-best`.
   - **Description** (по желанию): «Рейтинг IPTV провайдеров».
   - Оставьте **Public**.
   - **Не ставьте** галочки «Add a README», «Add .gitignore», «Choose a license» — у вас уже есть свои файлы.
4. Нажмите **«Create repository»**.

---

## 5. Подключить удалённый репозиторий и отправить код

На странице нового репозитория GitHub покажут команды. Используйте свои URL и ветку.

**Вариант A — по HTTPS (проще, спросит логин/пароль или токен):**

Подставьте вместо `ВАШ_ЛОГИН` и `iptvbest` свои данные:
```bash
git remote add origin https://github.com/ВАШ_ЛОГИН/iptvbest.git
git branch -M main
git push -u origin main
```

**Вариант B — по SSH (если уже настроен ключ):**
```bash
git remote add origin git@github.com:ВАШ_ЛОГИН/iptvbest.git
git branch -M main
git push -u origin main
```

При первом `git push` по HTTPS браузер или Git может запросить вход в GitHub (логин + пароль или **Personal Access Token**). Пароль от аккаунта часто не подходит — тогда создайте токен: GitHub → **Settings → Developer settings → Personal access tokens → Generate new token**, поставьте право `repo`, скопируйте токен и введите его вместо пароля.

---

## 6. Проверка

Обновите страницу репозитория на GitHub — в нём должны появиться все файлы проекта (без `node_modules` и `.env.local`).

Дальше при изменениях в проекте:
```bash
git add .
git commit -m "Описание изменений"
git push
```

После этого можно подключать репозиторий к Vercel по инструкции из **DEPLOY-VERCEL.md**.
