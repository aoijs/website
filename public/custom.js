(async () => {
  const key = "toc-position";
  let position = { scrollTop: 0, details: [] };

  const sidebar = document.querySelector(
    "#starlight__sidebar > .sidebar-content"
  );

  if (sidebar) {
    const details = Array.from(sidebar.querySelectorAll("details"));
    position.details = details.map((detail) => detail.hasAttribute("open"));

    const data = sessionStorage.getItem(key);
    if (data) {
      try {
        const obj = JSON.parse(data);
        position = {
          ...position,
          ...obj,
        };

        const pathname = document.location.pathname;
        const query = `[href="${pathname}/"]`;

        let target = undefined;

        for (const [index, entry] of obj.details.entries() || []) {
          const q = details[index].querySelector(query);
          if (q) {
            target = q;
          }

          if (entry || !!q) {
            details[index].setAttribute("open", "true");
            if (q) {
              q.setAttribute("aria-current", "page");
              q.scrollIntoView();
            }
          } else {
            details[index].removeAttribute("open");
          }
        }

        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        } else {
          sidebar.scrollTop = position.scrollTop || 0;
        }
      } catch (err) {
        return;
      }
    }

    const Store = () => {
      position.scrollTop = sidebar.scrollTop;
      position.details = details.map((detail) => detail.hasAttribute("open"));
      sessionStorage.setItem(key, JSON.stringify(position));
    };

    const uic = () => {
      Store();
    };

    document.addEventListener("mousemove", uic);
    document.addEventListener("click", uic);
  }
})();
