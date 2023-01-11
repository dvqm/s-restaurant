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

  pageRoute(node, sets) {
    const {
      route,
      id,
      eventType,
    } = sets;

    const btn = node.querySelector(`#${id}`);

    btn.addEventListener(eventType, () => {
      window.location.assign(route);
    });

    return node;
  }

  pagination(node, sets) {
    const {
      id,
      nodesId,
      nextBtnId,
      prevBtnId,
      eventType,
      pageSize,
    } = sets;

    const btns = node.querySelectorAll(`.${id}`);

    const nextBtn = node.querySelector(`#${nextBtnId}`);

    const prevBtn = node.querySelector(`#${prevBtnId}`);

    const restaurantNodes = node.querySelector(`#${nodesId}`);

    const restaurantBackup = restaurantNodes.cloneNode(true);

    const setFirstPage = (nodes, start, sizeOfPage) => {
      const elements = Array.from(nodes.childNodes)
        .slice(start, sizeOfPage);

      nodes.innerHTML = '';

      elements.forEach((element) => {
        nodes.append(element);
      });

      btns[0].disabled = true;
    };

    const setElements = (nodes, content, ind, offset) => {
      const elements = nodes.cloneNode(true);

      for (let i = ind; i < ind + offset; i += 1) {
        if (i >= nodes.childNodes.length) return;

        content.append(elements.childNodes[ind]);
      }
    };

    const enableBtns = () => {
      btns.forEach((btn) => {
        btn.disabled = false;
      });
    };

    const getBtnId = (btn) => Number(btn.id.replace('startFrom', ''));

    const checkBtnDisable = (btn, neighborBtn) => {
      btn.disabled = !!neighborBtn.disabled;
    };

    const pagesToggle = (e) => {
      let getIndexOfFirstChild;

      for (let i = 0; i < btns.length; i += 1) {
        const btn = btns[i];

        if (btn.disabled) {
          btn.disabled = false;

          getIndexOfFirstChild = getBtnId(btn);

          if (e.target.id === nextBtnId) {
            btns[i + 1].disabled = true;
          } else {
            btns[i - 1].disabled = true;
          }

          if (e.target.id === nextBtnId && i + 1 === btns.length - 1) {
            e.target.disabled = true;
          } else if (e.target.id === prevBtnId && i - 1 === 0) e.target.disabled = true;

          checkBtnDisable(prevBtn, btns[0]);

          checkBtnDisable(nextBtn, btns[btns.length - 1]);

          break;
        }
      }

      const toggleIndex = e.target.id === nextBtnId
        ? getIndexOfFirstChild + pageSize
        : getIndexOfFirstChild - pageSize;

      restaurantNodes.innerHTML = '';

      setElements(restaurantBackup, restaurantNodes, toggleIndex, pageSize);
    };

    btns.forEach((btn, ind) => btn.addEventListener(eventType, (e) => {
      const startItem = getBtnId(e.target);

      enableBtns();

      nextBtn.disabled = ind === btns.length - 1;

      e.target.disabled = true;

      restaurantNodes.innerHTML = '';

      checkBtnDisable(prevBtn, btns[0]);

      checkBtnDisable(nextBtn, btns[btns.length - 1]);

      setElements(restaurantBackup, restaurantNodes, startItem, pageSize);
    }));

    nextBtn.addEventListener(eventType, pagesToggle);

    prevBtn.addEventListener(eventType, pagesToggle);

    setFirstPage(restaurantNodes, 0, pageSize);

    return node;
  }

  mealsToggle(node, sets) {
    const {
      startFrom,
      wrapper,
      selector,
      eventType,
    } = sets;

    const meals = node.querySelector(wrapper);

    const mealsClone = meals.cloneNode(true);

    const mealsArray = Array.from(mealsClone.childNodes);

    const categories = node.querySelectorAll(`${selector} button`);

    const categoriesArray = Array.from(categories);

    const toggleCategory = (e) => {
      categories.forEach((category) => category.disabled = false);

      e.target.disabled = true;

      const i = categoriesArray.findIndex((category) => category.textContent === startFrom);

      const index = categoriesArray.indexOf(e.target) + 1;

      const nextCategory = categories[index] ? categories[index].textContent : -1;

      const startOfCategory = mealsArray
        .findIndex((header) => header.textContent === e.target.textContent);

      const endOfCategory = mealsArray
        .findIndex((header) => header.textContent === nextCategory);

      let result;

      if (e.target.textContent === categories[0].textContent) {
        result = mealsArray.slice(1, mealsArray.length - 1);
      } else if (nextCategory === -1) {
        result = mealsArray.slice(startOfCategory, mealsArray.length - 1);
      } else {
        result = mealsArray
          .slice(startOfCategory, endOfCategory);
      }

      const ribbon = meals.firstChild;

      meals.innerHTML = '';

      meals.append(ribbon);

      result.forEach((meal) => meals.append(meal));
    };

    categories.forEach((category) => category
      .addEventListener(eventType, toggleCategory));

    return node;
  }
}

export default EventCreator;
