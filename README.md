# Лендинг Кати Усмановой — Фитнес-тренировки

Тестовое задание: повторение 3+ экранов референсного лендинга [usmanovafit.gymteam.ru/mainpage](https://usmanovafit.gymteam.ru/mainpage).

**Деплой:** [fitnes-usmanova-yrkg.vercel.app](https://fitnes-usmanova-yrkg.vercel.app/)

**Скриншоты:**

![Скриншот 1](https://raw.githubusercontent.com/M00N77/fitnes_usmanova/main/public/demo/1.png)
![Скриншот 2](https://raw.githubusercontent.com/M00N77/fitnes_usmanova/main/public/demo/2.png)
![Скриншот 3](https://raw.githubusercontent.com/M00N77/fitnes_usmanova/main/public/demo/3.png)

## Инструмент

Собрано вручную в **Cline / VS Code** на **React 18 + Vite**.

Использован AI-ассистент **Claude (Anthropic)** для анализа HTML/CSS референса и генерации компонентов.

## Время

~30 минут (видно по таймстемпам коммитов).

## Реализованные экраны

| Экран | Что повторено |
|---|---|
| **Hero** | Grid 2 колонки, заголовок uppercase, subtitle italic, розовый акцент, кнопка CTA |
| **О тренере** | Заголовок, подзаголовок, карточка с достижениями, галерея (горизонтальный скролл) |
| **Тренировки дома** | 5 карточек MarathonCard, Флагман с рамкой, Марафоны без рамки |
| **Тренировки в зале** | Карточка «Для зала» |
| **Беременность и роды** | 2 карточки |
| **Питание** | 2 карточки (ИИ-нутрициолог с рамкой, Курс) |

## Ключевые решения

**Единый компонент MarathonCard** — все карточки программ реализованы через один компонент. Флагман/Бестселлер получают `border: 2px solid #F66297` и badge с полупрозрачным фоном `#F6629730`. Марафон/Курс — только розовый `tag`-текст без рамки.

**Фото в карточке** — `position: absolute; left: 0; bottom: 0; height: 100%` — фото "прилипает" к низу и левому краю, текст начинается с `margin-left: 50%`. Точное воспроизведение поведения оригинала.

**Адаптив** — при `max-width: 768px` контент Hero перестраивается в одну колонку, карточки сохраняют структуру фото/текст 50/50 в уменьшенном виде.

**Шрифт** — Gilroy через `@font-face` (woff), fallback: `Roboto, sans-serif`.

## Что не реализовано

- Таймер обратного отсчёта
- Живой счётчик «тренируются прямо сейчас»
- Секции FAQ, Гарантии, Отзывы
- Форма регистрации (кнопки активны, ведут на `#form`)

## Файловая структура

```
src/
  App.jsx        — все компоненты + стили в одном файле
  index.css      — минимальный сброс
  main.jsx       — точка входа
public/
  fonts/
    Gilroy-Regular.woff
    Gilroy-Medium.woff
    Gilroy-SemiBold.woff
    Gilroy-Bold.woff
  HeroImg.png
  trainings/
    train1.png
    train2.png
    train3.png
    train4.png
    train5.png
```

## Запуск локально

```bash
npm install
npm run dev
```

Открыть: [http://localhost:5173](http://localhost:5173)

## Стек

- React 18
- Vite
- TypeScript
- CSS-in-JS через `<style>` тег в GlobalStyles компоненте