function createElementFromHTML(html) {
  const tempEl = document.createElement("div");
  tempEl.innerHTML = html;
  toBootstrap(tempEl.children);
  return tempEl;
}

function addClass(oneElement) {
  switch (oneElement.tagName.toLowerCase()) {
    case "h1":
      oneElement.classList.add("display-3");
      break;
    case "h2":
      oneElement.classList.add(
        "display-4",
        "border-bottom",
        "border-success",
        "border-3",
        "mt-5"
      );
      break;
    case "h3":
      oneElement.classList.add(
        "display-5",
        "border-bottom",
        "border-success",
        "border-3"
      );
      break;
    case "b":
    case "strong":
      oneElement.classList.add("text-danger", "border-bottom", "border-danger");
      break;
    case "pre": //コードブロック
      oneElement.classList.add(
        "bg-dark",
        "text-white",
        "p-2",
        "m-2",
        "border",
        "rounded-3",
        "mt-3",
        "mb-3"
      );
      break;
    case "ul":
    case "ol":
      oneElement.classList.add(
        "list-group",
        "list-group-flush",
        "list-group-numbered",
        "p-2",
        "m-2"
      );
      break;
    case "li":
      oneElement.classList.add(
        "list-group-item",
        "list-group-item-primary",
        "font-weight-bold"
      );
      break;
    case "a":
      oneElement.classList.add("link-primary");
      oneElement.setAttribute("target", "_blank");

      const url = new URL(oneElement.href);

      if (
        url.hostname === "localhost" ||
        url.href.indexOf("akahoshi1421.github.io/command") !== -1 ||
        url.href.indexOf("akahoshi1421.github.io/block") !== -1 ||
        url.href.indexOf("akahoshi1421.github.io/file") !== -1
      ) {
        oneElement.setAttribute("href", "/prog-polta" + url.pathname);
      }

      break;
    case "p":
      oneElement.classList.add("h4");
      break;
    default:
      break;
  }
}

//行きがけ順でhtmlの要素を探索
function toBootstrap(html) {
  for (let oneElement of html) {
    addClass(oneElement);
    toBootstrap(oneElement.children);
  }
}

export default createElementFromHTML;
