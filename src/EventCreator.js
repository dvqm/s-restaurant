class EventCreator {
  slider(node, sets) {
    const {
      offset,
      showItems,
      shell,
      card,
    } = sets;

    const wrapper = node.querySelector(`#${shell}`);

    const content = node.querySelectorAll(`#${shell}>.${card}`);

    const contentCopy = content;

    const prevBtn = node.querySelector(`#${sets.prev}`);

    const nextBtn = node.querySelector(`#${sets.next}`);

    content.forEach((item) => item.remove());

    let i = showItems - 1;

    const initialShowItems = (itemsCount) => {
      for (let ind = 0; ind < itemsCount; ind += 1) {
        wrapper.append(contentCopy[ind]);
      }
    };

    const ticker = (step, reverse = false) => {
      if (reverse) {
        for (let j = 0; j < step; j += 1) {
          if (i === showItems - 1) return;

          const prev = i - showItems;

          wrapper.lastChild.remove();

          wrapper.prepend(contentCopy[prev]);

          i -= 1;
        }
      } else {
        for (let j = 0; j < step; j += 1) {
          if (i === contentCopy.length - 1) return;

          wrapper.firstChild.remove();

          wrapper.append(contentCopy[i += 1]);
        }
      }
    };

    initialShowItems(showItems);

    nextBtn.addEventListener('click', () => {
      ticker(offset);
    });

    prevBtn.addEventListener('click', () => {
      ticker(offset, true);
    });

    return node;
  }

  underConstruction(node, sets) {
    const {
      content,
      id,
      bunch,
      eventType,
    } = sets;

    const cancel = (e) => {
      e.target.parentNode.remove();
    };

    const backdrop = content.querySelector('#backdrop');

    backdrop.addEventListener(eventType, cancel);

    const cancelBtn = content.querySelector('#notFinished');

    cancelBtn.addEventListener(eventType, cancel);

    const show = () => {
      document.body.append(content);
    };

    if (bunch) {
      const btns = node.querySelectorAll(`.${id}`);

      btns.forEach((btn) => btn.addEventListener(eventType, show));
    } else {
      const btn = node.querySelector(`#${id}`);

      btn.addEventListener(eventType, show);
    }

    return node;
  }
}

export default EventCreator;
