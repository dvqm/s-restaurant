class Common {
  constructor() {
    this.content = document.querySelector('div#content');
  }

  tagPrepend(parent, child, cloneNode = true) {
    cloneNode ? parent.prepend(child.cloneNode(true)) : parent.prepend(child);
  }

  tag(tag, {} = {}, ...rest) {
    const newTag = document.createElement(arguments[0]);
    for (let v in arguments[1]) {
      newTag[v] = arguments[1][v];
    }

    if (rest !== undefined) {
      for (let r in rest) {
        newTag.append(rest[r].cloneNode(true));
      }
    }
    return newTag;
  }

  appendEl(data) {
    const dataFile = Object.keys(data.file);
    const parent = document.querySelector(data.parent);
    data.tag = this.tag.bind(this);
    if (data.offset) {
      for (let i = 0; i < data.offset; i++) {
        parent.append(data.ui(data.file[dataFile[i]]).cloneNode(true));
      }
    } else {
      for (let i = 0; i < dataFile.length; i++) {
        parent.append(data.ui(data.file[dataFile[i]]).cloneNode(true));
      }
    }
  }

  slider(data) {
    const dataFile = Object.keys(data.file);
    data.tag = this.tag.bind(this);

    const addCard = (index) => {
      const card = data.file[dataFile[index]];
      const sliderContent = document.querySelector(`.${data.sliderContent}`);
      sliderContent.append(data.ui(card));
    };

    const removeCard = (child) => {
      //child = 'last-child' || 'first-child'
      const card = document.querySelector(`.${data.sliderCard}:${child}`);
      card.remove();
    };

    const drawCards = (elIndex = 0, offset = 4) => {
      for (elIndex; elIndex <= offset; elIndex++) {
        addCard(elIndex);
      }
    };

    drawCards(data.elIndex, data.offset);

    const forwardBtn = document.querySelector(`#${data.forward}`);
    const backwardBtn = document.querySelector(`#${data.backward}`);

    forwardBtn.addEventListener('click', () => {
      backwardBtn.removeAttribute('disabled');
      if (data.offset === dataFile.length - 1)
        return forwardBtn.setAttribute('disabled', 'disabled');
      else {
        removeCard('first-child');
        addCard(++data.offset);
        ++data.elIndex;
      }
    });

    backwardBtn.addEventListener('click', () => {
      forwardBtn.removeAttribute('disabled');
      if (data.elIndex <= 0)
        return backwardBtn.setAttribute('disabled', 'disabled');
      else {
        removeCard('last-child');
        addCard(--data.elIndex, this.tagPrepend);
        --data.offset;
      }
    });
    return {};
  }
}

export default Common;
