/*┌────────────────────────────────────────────────────────────────────────────────────────────────┐
┌─┤                                                                                                │
│ └→ Переопределяем "$"                                                                            │
│                                                                                                ┌─┘
└────────────────────────────────────────────────────────────────────────────────────────────────┘*/
    if (typeof window.$ == 'undefined') {
        window.$ = {};
    }
    
/*┌────────────────────────────────────────────────────────────────────────────────────────────────┐
┌─┤                                                                                                │
│ └→ Возвращает элемент по "ID"                                                                    │
│                                                                                                ┌─┘
└────────────────────────────────────────────────────────────────────────────────────────────────┘*/
    $.id = function(ID) {
        return document.getElementById(ID);
    };
    
/*┌────────────────────────────────────────────────────────────────────────────────────────────────┐
┌─┤                                                                                                │
│ └→ Удаляет элемент                                                                               │
│                                                                                                ┌─┘
└────────────────────────────────────────────────────────────────────────────────────────────────┘*/
    $.remove = function(elem) {
        if (elem && elem.parentNode) {
            elem.parentNode.removeChild(elem);
        }
        elem = null;
    };
    
/*┌────────────────────────────────────────────────────────────────────────────────────────────────┐
┌─┤                                                                                                │
│ └→ Возвращает случайное число                                                                    │
│                                                                                                ┌─┘
└────────────────────────────────────────────────────────────────────────────────────────────────┘*/
    $.rand = function(min, max) {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    };
    
//──────────────────────────────────────────────────────────────────────────────────────────────────