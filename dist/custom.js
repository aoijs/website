(() => {

  const key = 'toc-position';
  
  let timeout = 0;

  let position = { scrollTop: 0, details: [] };

  const sidebar = document.querySelector('#starlight__sidebar > .sidebar-content');

  if (sidebar) {
    const details = Array.from(sidebar.querySelectorAll('details'));
    position.details = details.map(detail => detail.hasAttribute('open'));

    const data = sessionStorage.getItem(key);
    if (data) {
      try {
        const obj = JSON.parse(data);
        position = {
          ...position, ...obj,
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
            details[index].setAttribute('open', 'true');
            if (q) {
              q.setAttribute('aria-current', 'page');
              q.scrollIntoView();
            }
          }
          else {
            details[index].removeAttribute('open');
          }
        }

        if (target) {
          target.scrollIntoView({behavior: 'smooth'});
        }
        else {
          sidebar.scrollTop = position.scrollTop || 0;
        }

      }
      catch (err) {
        console.error(err);
      }
    }

    const Store = () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }
      timeout = window.setTimeout(() => {
        position.scrollTop = sidebar.scrollTop;
        position.details = details.map(detail => detail.hasAttribute('open'));
        sessionStorage.setItem(key, JSON.stringify(position));
        timeout = 0;
      }, 1000);
    };

    sidebar.addEventListener('scroll', Store);

    for (const detail of details) {
      detail.addEventListener('toggle', Store);
    }

  }

})();

// codeblock copy button (ignore)
let codeBlocks = Array.from(document.querySelectorAll("pre"));

for (let codeBlock of codeBlocks) {
  let wrapper = document.createElement("div");
  wrapper.style.position = "relative";

  let copyButton = document.createElement("div");
  copyButton.className = "copy-button";
  copyButton.innerHTML = `Copy`;
  copyButton.style.display = "none";

  copyButton.addEventListener("click", async () => {
    await copyCode(codeBlock, copyButton);
  });

  wrapper.appendChild(codeBlock.cloneNode(true));
  codeBlock.parentNode.replaceChild(wrapper, codeBlock);
  wrapper.appendChild(copyButton);

  wrapper.addEventListener("mouseenter", () => {
    copyButton.style.display = "block";
  });

  wrapper.addEventListener("mouseleave", () => {
    copyButton.style.display = "none";
  });
}

async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;
  await navigator.clipboard.writeText(text);
  button.innerHTML = `Copied!`;
  button.disabled = true;
  setTimeout(() => {
    button.innerHTML = `Copy`;
    button.disabled = false;
  }, 3000);
}
