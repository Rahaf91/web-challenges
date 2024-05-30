const allPages = document.querySelectorAll('[data-js*="page"]');
const allLinks = document.querySelectorAll('[data-js*="link"]');

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    allPages.forEach((page) => {
      page.classList.remove("current");
    });
    const hrefAttribute = event.target.getAttribute("href");
    const currentPage = document.querySelector(hrefAttribute);
    currentPage.classList.add("current");
  });
});
/*Dieser JavaScript-Code wird alle Elemente auf der Seite auswählen, 
die ein Attribut haben, das mit "data-js" beginnt und "page" bzw. "link" enthält.
 Dann wird für jeden Link ein Klickereignislistener hinzugefügt.

Wenn ein Link geklickt wird, wird zuerst die CSS-Klasse "current" von allen Elementen entfernt, die das Attribut "data-js" mit "page" enthalten. 
Dann wird das Attribut "href" des angeklickten Links abgerufen, um die ID der Seite zu erhalten, die angezeigt werden soll. Anschließend wird die Klasse "current" dieser Seite hinzugefügt, sodass sie angezeigt wird, während alle anderen Seiten ausgeblendet werden.

Dieser Code könnte beispielsweise in einer einfachen Single-Page-Anwendung verwendet werden, um zwischen verschiedenen "Seiten" zu navigieren, 
die im HTML-Dokument vorhanden sind, ohne die Seite neu laden zu müssen.*/
