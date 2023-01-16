class EventCreator {
  slider(node, sets) {
    const {
      offset,
      showItems,
      shell,
      card,
      notFinished,
      underConstructEvent,
      eventType,
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

      underConstructEvent(node, {
        content: notFinished,
        eventType,
        id: '.orderNow',
        bunch: true,
        ifSlider: true,
      });
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
      ifSlider,
    } = sets;

    const backdrop = content.querySelector('#backdrop');

    backdrop.addEventListener(eventType, (e) => e.target.parentNode.remove());

    const cancelBtn = content.querySelector('#notFinished');

    cancelBtn.addEventListener(eventType, (e) => e.target.parentNode.parentNode.remove());

    const show = () => {
      document.body.append(content);
    };

    if (bunch) {
      const btns = node.querySelectorAll(id);

      if (ifSlider) {
        btns.item(btns.length - 1)
          .addEventListener(eventType, show);
      } else {
        btns.forEach((btn) => btn.addEventListener(eventType, show));
      }
    } else {
      const btn = node.querySelector(id);

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

    const btns = node.querySelectorAll(id);

    const nextBtn = node.querySelector(nextBtnId);

    const prevBtn = node.querySelector(prevBtnId);

    const restaurantNodes = node.querySelector(nodesId);

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

    const setRestaurants = (nodes, content, ind, offset) => {
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

    const getBtnId = (btn) => parseInt(btn.id.replace('startFrom', ''), 10);

    const checkBtnDisable = (btn, neighborBtn) => {
      btn.disabled = !!neighborBtn.disabled;
    };

    const pagesToggle = (e) => {
      let getIndexOfFirstChild;

      const nextBtnIdStr = nextBtnId.slice(1);

      for (let i = 0; i < btns.length; i += 1) {
        const btn = btns[i];

        if (btn.disabled) {
          btn.disabled = false;

          getIndexOfFirstChild = getBtnId(btn);

          if (e.target.id === nextBtnIdStr) {
            btns[i + 1].disabled = true;
          } else {
            btns[i - 1].disabled = true;
          }

          if (e.target.id === nextBtnIdStr && i + 1 === btns.length - 1) {
            e.target.disabled = true;
          } else if (e.target.id === prevBtnId && i - 1 === 0) e.target.disabled = true;

          checkBtnDisable(prevBtn, btns[0]);

          checkBtnDisable(nextBtn, btns[btns.length - 1]);

          break;
        }
      }

      const toggleIndex = e.target.id === nextBtnIdStr
        ? getIndexOfFirstChild + pageSize
        : getIndexOfFirstChild - pageSize;

      restaurantNodes.innerHTML = '';

      setRestaurants(restaurantBackup, restaurantNodes, toggleIndex, pageSize);
    };

    btns.forEach((btn, ind) => btn
      .addEventListener(eventType, (e) => {
        const startItem = getBtnId(e.target);

        enableBtns();

        nextBtn.disabled = ind === btns.length - 1;

        e.target.disabled = true;

        restaurantNodes.innerHTML = '';

        checkBtnDisable(prevBtn, btns[0]);

        checkBtnDisable(nextBtn, btns[btns.length - 1]);

        setRestaurants(restaurantBackup, restaurantNodes, startItem, pageSize);
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
      header,
      ribbon,
      orderBtnPoint,
      notFinished,
      underConstructEvent,
      eventType,
    } = sets;

    const meals = node.querySelector(wrapper);

    const mealsClone = Array.from(meals.cloneNode(true).childNodes);

    const categories = Array.from(node.querySelectorAll(`${ribbon} button`));

    const scrollToTop = (headersCollection) => {
      const scroll = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

      headersCollection.forEach((heading) => heading.addEventListener(eventType, scroll));
    };
    const toggleDisabled = (name, btnsArr) => {
      btnsArr.forEach((btn) => {
        btn.disabled = false;

        if (name === null) btnsArr[0].disabled = true;
        if (btn.id === name) btn.disabled = true;
      });
    };

    const mealsOffset = (name, index, categArr, mealsArr, point) => {
      const nextCategory = categArr[index + 1] ? categArr[index + 1].textContent : -1;

      const startOfCategory = mealsArr.findIndex((heading) => heading.textContent === name);

      const endOfCategory = mealsArr.findIndex((heading) => heading.textContent === nextCategory);

      let result;

      if (name === categArr[0].textContent) {
        result = mealsArr.slice(1, mealsArr.length);
      } else if (nextCategory === -1) {
        result = mealsArr.slice(startOfCategory, mealsArr.length + 1);
      } else {
        result = mealsArr
          .slice(startOfCategory, endOfCategory);
      }

      const paginator = point.firstChild;

      point.innerHTML = '';

      point.append(paginator);

      result.forEach((meal) => point.append(meal));

      return point;
    };

    if (startFrom !== null) {
      const index = categories.findIndex((category) => category.textContent === startFrom);

      toggleDisabled(startFrom, categories);

      mealsOffset(startFrom, index, categories, mealsClone, meals);

      const headers = node.querySelectorAll(header);

      scrollToTop(headers);
    }

    const toggleCategory = (e) => {
      toggleDisabled(e.target.id, categories);

      const categoryIndex = categories.indexOf(e.target);

      mealsOffset(
        e.target.textContent,
        categoryIndex,
        categories,
        mealsClone,
        meals,
      );

      const headers = node.querySelectorAll(header);

      scrollToTop(headers);

      underConstructEvent(node, {
        content: notFinished,
        id: orderBtnPoint,
        bunch: true,
        eventType: 'click',
      });
    };

    categories.forEach((category) => category
      .addEventListener(eventType, toggleCategory));

    underConstructEvent(node, {
      content: notFinished,
      id: orderBtnPoint,
      bunch: true,
      eventType: 'click',
    });

    return node;
  }
}

export default EventCreator;
