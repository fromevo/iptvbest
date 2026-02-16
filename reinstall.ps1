# Чистая переустановка зависимостей (закройте Cursor перед запуском)
Set-Location $PSScriptRoot

Write-Host "Удаляю node_modules..." -ForegroundColor Yellow
if (Test-Path node_modules) {
    Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
    if (Test-Path node_modules) {
        Write-Host "Не удалось удалить node_modules. Закройте Cursor и все терминалы, затем запустите скрипт снова." -ForegroundColor Red
        exit 1
    }
}

Write-Host "Удаляю package-lock.json..." -ForegroundColor Yellow
if (Test-Path package-lock.json) { Remove-Item package-lock.json -Force }

Write-Host "Очищаю кэш npm..." -ForegroundColor Yellow
npm cache clean --force

Write-Host "Устанавливаю зависимости заново..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "Готово. Запускаю сборку..." -ForegroundColor Green
    npm run build
} else {
    Write-Host "npm install завершился с ошибкой. Попробуйте переместить проект в короткий путь, например D:\iptvbest" -ForegroundColor Red
}
