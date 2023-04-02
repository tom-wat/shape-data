//新しいポイントを追加//

const addPointButton = document.querySelector(".add-point-button");
const pointContainer = document.querySelector("#point");
let pointIndex = [];
let arcIndex = [];

function removeValueFromArray(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      arr.splice(i, 1); // 配列から値を削除
      // i--; // 削除した要素の後ろにある要素を1つ前にずらす
    }
  }
  return arr;
}

function ascendingOrder(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr;
}

const addPointProperty = (elementID) => {
  const newUl = document.createElement("ul");
  const newDeleteButton = document.createElement("button");
  let newNumber;
  if (!pointIndex.length) {
    newNumber = 1;
  } else {
    newNumber = pointIndex[pointIndex.length - 1] + 1;
  }

  let minMissingNumber = null;
  for (let i = 0; i < pointIndex.length - 1; i++) {
    const diff = pointIndex[i + 1] - pointIndex[i];
    if (diff > 1) {
      minMissingNumber =
        minMissingNumber === null
          ? pointIndex[i] + 1
          : Math.min(minMissingNumber, pointIndex[i] + 1);
    }
  }
  if (minMissingNumber) {
    newNumber = minMissingNumber;
    minMissingNumber = null;
  }
  if (pointIndex[0] !== 1) {
    newNumber = 1;
  }
  pointIndex.push(newNumber);
  console.log(pointIndex);
  console.log(newNumber);

  const newListText = document.createTextNode("point" + newNumber + " ");
  newUl.appendChild(newListText);
  newUl.id = `point-${newNumber}`;
  newDeleteButton.textContent = "Delete";
  newDeleteButton.classList.add("delete-button");

  newDeleteButton.addEventListener("click", function () {
    const removeNumber = parseInt(this.closest("ul").id.slice(-1));
    const resultArray = removeValueFromArray(pointIndex, removeNumber);
    pointIndex = [...resultArray];
    console.log(pointIndex);
    this.closest("ul").remove();
  });
  const inserthtml = `
  <li>
    <label for="point-name-${newNumber}">name:</label>
    <input type="text" id="point-name-${newNumber}" name="point-name-${newNumber}" />
  </li>
  <li>
    <label for="point-type-${newNumber}">type:</label>
    <input type="text" id="point-type-${newNumber}" name="point-type-${newNumber}" list="point-type-example" />
    <datalist id="point-type-example">
      <option value="top"></option>
      <option value="left"></option>
      <option value="bottom"></option>
      <option value="right"></option>
      <option value="top-left"></option>
      <option value="bottom-left"></option>
      <option value="bottom-right"></option>
      <option value="top-right"></option>
    </datalist>
  </li>
  <li>
  <label for="point-position-x-block-${newNumber}">position-x_block:</label>
  <input
    type="number"
    min="-20"
    max="20"
    name="point-position-x-block-${newNumber}"
    id="point-position-x-block-${newNumber}"
  />
</li>
  <li>
  <label for="point-position-x-miniblock-${newNumber}"
    >position-x_miniblock:</label
  >
  <input
    type="number"
    min="-20"
    max="20"
    name="point-position-x-miniblock-${newNumber}"
    id="point-position-x-miniblock-${newNumber}"
  />
</li>
<li>
  <label for="point-position-y-block-${newNumber}">position-y_block:</label>
  <input
    type="number"
    min="-20"
    max="20"
    name="point-position-y-block-${newNumber}"
    id="point-position-y-block-${newNumber}"
  />
</li>
<li>
  <label for="point-position-y-miniblock-${newNumber}"
    >position-y_miniblock:</label
  >
  <input
    type="number"
    min="-20"
    max="20"
    name="point-position-y-miniblock-${newNumber}"
    id="point-position-y-miniblock-${newNumber}"
  />
</li>
`;
  newUl.appendChild(newDeleteButton);
  newUl.insertAdjacentHTML("beforeend", inserthtml);
  elementID.appendChild(newUl);
  ascendingOrder(pointIndex);
};
addPointButton.addEventListener("click", function () {
  addPointProperty(pointContainer);
});

//新しいarcを追加//

const addArcButton = document.querySelector(".add-arc-button");
const arcContainer = document.querySelector("#arc");

const addArcProperty = (elementID) => {
  const newUl = document.createElement("ul");
  const newDeleteButton = document.createElement("button");
  let newNumber;
  if (!arcIndex.length) {
    newNumber = 1;
  } else {
    newNumber = arcIndex[arcIndex.length - 1] + 1;
  }

  let minMissingNumber = null;
  for (let i = 0; i < arcIndex.length - 1; i++) {
    const diff = arcIndex[i + 1] - arcIndex[i];
    if (diff > 1) {
      minMissingNumber =
        minMissingNumber === null
          ? arcIndex[i] + 1
          : Math.min(minMissingNumber, arcIndex[i] + 1);
    }
  }
  if (minMissingNumber) {
    newNumber = minMissingNumber;
    minMissingNumber = null;
  }
  if (arcIndex[0] !== 1) {
    newNumber = 1;
  }
  arcIndex.push(newNumber);
  console.log(arcIndex);
  console.log(newNumber);

  const newListText = document.createTextNode("arc" + newNumber + " ");
  newUl.appendChild(newListText);
  newUl.id = `arc-${newNumber}`;
  newDeleteButton.textContent = "Delete";
  newDeleteButton.classList.add("delete-button");

  newDeleteButton.addEventListener("click", function () {
    const removeNumber = parseInt(this.closest("ul").id.slice(-1));
    const resultArray = removeValueFromArray(arcIndex, removeNumber);
    arcIndex = [...resultArray];
    console.log(arcIndex);
    this.closest("ul").remove();
  });
  const inserthtml = `
  <li>
    <label for="arc-name-${newNumber}">name:</label>
    <input type="text" id="arc-name-${newNumber}" name="arc-name-${newNumber}" />
  </li>
  <li>
    <label for="arc-type-circle-${newNumber}">type-circle:</label>
    <input type="text" id="arc-type-circle-${newNumber}" name="arc-type-circle-${newNumber}" list="arc-type-circle-example" />
    <datalist id="arc-type-circle-example">
      <option value="top"></option>
      <option value="top-topLeft"></option>
      <option value="topLeft"></option>
      <option value="left-topLeft"></option>
      <option value="left"></option>
      <option value="left-bottomLeft"></option>
      <option value="bottomLeft"></option>
      <option value="bottom-bottomLeft"></option>
      <option value="bottom"></option>
      <option value="bottom-bottomRight"></option>
      <option value="bottomRight"></option>
      <option value="right-bottomRight"></option>
      <option value="right"></option>
      <option value="right-topRight"></option>
      <option value="topRight"></option>
      <option value="top-topRight"></option>
    </datalist>
  </li>
  <li>
    <label for="arc-type-clock_start-${newNumber}">type-clock_start:</label>
    <input
    type="number"
    min="0"
    max="11"
    name="arc-type-clock_start-${newNumber}"
    id="arc-type-clock_start-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-arc-type-clock_goal-${newNumber}"
    >type-clock_goal:</label
    >
    <input
    type="number"
    min="0"
    max="11"
    name="arc-type-clock_goal-${newNumber}"
    id="arc-type-clock_goal-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-type-mount-${newNumber}">type-mount:</label>
    <input type="text" id="arc-type-mount-${newNumber}" name="arc-type-mount-${newNumber}" list="arc-type-mount-example" />
    <datalist id="arc-type-mount-example">
      <option value="flat"></option>
      <option value="inside"></option>
      <option value="outside"></option>
    </datalist>
  </li>
  <li>
    <label for="arc-length-x-block-${newNumber}">length-x_block:</label>
    <input
    type="number"
    min="-20"
    max="20"
    name="arc-length-x-block-${newNumber}"
    id="arc-length-x-block-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-length-x-miniblock-${newNumber}"
    >length-x_miniblock:</label
    >
    <input
    type="number"
    min="-20"
    max="20"
    name="arc-length-x-miniblock-${newNumber}"
    id="arc-length-x-miniblock-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-length-y-block-${newNumber}">length-y_block:</label>
    <input
      type="number"
      min="-20"
      max="20"
      name="arc-length-y-block-${newNumber}"
      id="arc-length-y-block-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-length-y-miniblock-${newNumber}"
      >length-y_miniblock:</label
    >
    <input
      type="number"
      min="-20"
      max="20"
      name="arc-length-y-miniblock-${newNumber}"
      id="arc-length-y-miniblock-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-slope">slope:</label>
    <input
      type="text"
      id="arc-slope"
      name="arc-slope"
      list="arc-slope-example"
    />
    <datalist id="arc-slope-example">
      <option value="0"></option>
      <option value="10"></option>
      <option value="20"></option>
      <option value="30"></option>
      <option value="40"></option>
      <option value="50"></option>
      <option value="60"></option>
      <option value="70"></option>
      <option value="80"></option>
      <option value="90"></option>
      <option value="100"></option>
      <option value="110"></option>
      <option value="120"></option>
      <option value="130"></option>
      <option value="140"></option>
      <option value="150"></option>
      <option value="160"></option>
      <option value="170"></option>
      <option value="180"></option>
    </datalist>
  </li>
  <li>
    <label for="arc-reference">reference:</label>
    <input
      type="text"
      id="arc-reference"
      name="arc-reference"
    />
  </li>
  <li>
    <label for="arc-origin-${newNumber}">origin:</label>
    <input type="text" id="arc-origin-${newNumber}" name="arc-origin-${newNumber}" list="arc-origin-example" />
    <datalist id="arc-origin-example">
      <option value="middle"></option>
      <option value="left"></option>
      <option value="right"></option>
      <option value="top"></option>
      <option value="bottom"></option>
    </datalist>
  </li>
  <li>
    <label for="arc-start-x-block-${newNumber}">start-x_block:</label>
    <input
    type="number"
    min="-20"
    max="20"
    name="arc-start-x-block-${newNumber}"
    id="arc-start-x-block-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-start-x-miniblock-${newNumber}"
    >start-x_miniblock:</label
    >
    <input
    type="number"
    min="-20"
    max="20"
    name="arc-start-x-miniblock-${newNumber}"
    id="arc-start-x-miniblock-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-start-y-block-${newNumber}">start-y_block:</label>
    <input
      type="number"
      min="-20"
      max="20"
      name="arc-start-y-block-${newNumber}"
      id="arc-start-y-block-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-start-y-miniblock-${newNumber}"
      >start-y_miniblock:</label
    >
    <input
      type="number"
      min="-20"
      max="20"
      name="arc-start-y-miniblock-${newNumber}"
      id="arc-start-y-miniblock-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-goal-x-block-${newNumber}">goal-x_block:</label>
    <input
    type="number"
    min="-20"
    max="20"
    name="arc-goal-x-block-${newNumber}"
    id="arc-goal-x-block-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-goal-x-miniblock-${newNumber}"
    >goal-x_miniblock:</label
    >
    <input
    type="number"
    min="-20"
    max="20"
    name="arc-goal-x-miniblock-${newNumber}"
    id="arc-goal-x-miniblock-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-goal-y-block-${newNumber}">goal-y_block:</label>
    <input
      type="number"
      min="-20"
      max="20"
      name="arc-goal-y-block-${newNumber}"
      id="arc-goal-y-block-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-goal-y-miniblock-${newNumber}"
      >goal-y_miniblock:</label
    >
    <input
      type="number"
      min="-20"
      max="20"
      name="arc-goal-y-miniblock-${newNumber}"
      id="arc-goal-y-miniblock-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-width-block-${newNumber}">width_block:</label>
    <input
    type="number"
    min="-20"
    max="20"
    name="arc-width-block-${newNumber}"
    id="arc-width-block-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-width-miniblock-${newNumber}"
    >width_miniblock:</label
    >
    <input
    type="number"
    min="-20"
    max="20"
    name="arc-width-miniblock-${newNumber}"
    id="arc-width-miniblock-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-start-width-block-${newNumber}">start-width_block:</label>
    <input
    type="number"
    min="-20"
    max="20"
    name="arc-start-width-block-${newNumber}"
    id="arc-start-width-block-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-start-width-miniblock-${newNumber}"
    >start-width_miniblock:</label
    >
    <input
    type="number"
    min="-20"
    max="20"
    name="arc-start-width-miniblock-${newNumber}"
    id="arc-start-width-miniblock-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-middle-width-block-${newNumber}">middle-width_block:</label>
    <input
    type="number"
    min="-20"
    max="20"
    name="arc-middle-width-block-${newNumber}"
    id="arc-middle-width-block-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-middle-width-miniblock-${newNumber}"
    >middle-width_miniblock:</label
    >
    <input
    type="number"
    min="-20"
    max="20"
    name="arc-middle-width-miniblock-${newNumber}"
    id="arc-middle-width-miniblock-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-goal-width-block-${newNumber}">goal-width_block:</label>
    <input
    type="number"
    min="-20"
    max="20"
    name="arc-goal-width-block-${newNumber}"
    id="arc-goal-width-block-${newNumber}"
    />
  </li>
  <li>
    <label for="arc-goal-width-miniblock-${newNumber}"
    >goal-width_miniblock:</label
    >
    <input
    type="number"
    min="-20"
    max="20"
    name="arc-goal-width-miniblock-${newNumber}"
    id="arc-goal-width-miniblock-${newNumber}"
    />
  </li>
`;
  newUl.appendChild(newDeleteButton);
  newUl.insertAdjacentHTML("beforeend", inserthtml);
  elementID.appendChild(newUl);
  ascendingOrder(arcIndex);
};
addArcButton.addEventListener("click", function () {
  addArcProperty(arcContainer);
});

//オブジェクトにinputの値を入れる//

function getObject() {
  let objectName = document.querySelector("#object-name").value;
  if (!objectName) {
    objectName = "object";
  }
  const inputElements = document.querySelectorAll("#object li input[id]");
  const object = {};
  for (let i = 0; i < inputElements.length; i++) {
    const input = inputElements[i];
    const label = input.closest("li").querySelector("label");
    const labelValue = label.textContent.replace(":", "").trim();
    let inputValue = input.value;
    if (!inputValue) {
      continue;
    }
    if (labelValue.endsWith("_block")) {
      if (inputValue >= 0) {
        inputValue = `+ ${inputValue} b`;
      } else {
        inputValue = `- ${String(inputValue).slice(1)} b`;
      }
    }
    if (labelValue.endsWith("_miniblock")) {
      if (inputValue >= 0) {
        inputValue = `+ ${inputValue} mb`;
      } else {
        inputValue = `- ${String(inputValue).slice(1)} mb`;
      }
    }
    object[labelValue] = inputValue;
  }
  const groupedObj = {};

  for (const key in object) {
    const prefix = key.split("_")[0];
    //先頭の文字列が prefix と同じプロパティが既に groupedObj に存在する場合
    if (groupedObj[prefix]) {
      // if (object[key] >= 0) {
      groupedObj[prefix] += ` ${object[key]}`;
      // } else {
      //   groupedObj[prefix] += ` ${String(object[key]).slice(0, 1)} ${String(
      //     object[key]
      //   ).slice(1)}`;
    }
    //先頭の文字列が prefix と同じプロパティが groupedObj に存在しない場合
    else {
      groupedObj[prefix] = object[key];
    }
  }
  console.log(groupedObj);
  // let text = JSON.stringify(object);
  // text = text.replace(/[{}]/g, "");
  // text = text.replace(/,/g, ",\n");
  console.log(object);

  let text = objectName + "\n";
  for (let prop in groupedObj) {
    text += "\t" + prop + ": " + groupedObj[prop] + "\n";
  }

  // console.log(inputElements);
  // console.log(object);
  console.log(text);
  // return text;
  return text;
}

function getPoints() {
  const pointElements = document.querySelectorAll("#point > ul");
  if (!pointElements.length) return;
  const points = {};
  // const point = {};
  for (let i = 0; i < pointElements.length; i++) {
    let point = {};
    let pointInputElements = document.querySelectorAll(
      `#point-${pointIndex[i]} input[id]`
    );
    // console.log(pointElements);
    // console.log(pointElements.length);
    // console.log(pointInputElements);
    // console.log(pointInputElements.length);

    for (let j = 0; j < pointInputElements.length; j++) {
      const input = pointInputElements[j];
      console.log(input);
      const labelValue = input.previousElementSibling.textContent
        .replace(":", "")
        .trim();
      let inputValue = input.value;
      // console.log(input);
      // console.log(label);
      // console.log(labelValue);
      // console.log(inputValue);

      if (!inputValue) {
        continue;
      }
      if (labelValue.endsWith("_block")) {
        if (inputValue >= 0) {
          inputValue = `+ ${inputValue} b`;
        } else {
          inputValue = `- ${String(inputValue).slice(1)} b`;
        }
      }
      if (labelValue.endsWith("_miniblock")) {
        if (inputValue >= 0) {
          inputValue = `+ ${inputValue} mb`;
        } else {
          inputValue = `- ${String(inputValue).slice(1)} mb`;
        }
      }
      point[labelValue] = inputValue;
    }
    // console.log(point);
    const groupedObj = {};

    for (const key in point) {
      const prefix = key.split("_")[0];
      //先頭の文字列が prefix と同じプロパティが既に groupedObj に存在する場合
      if (groupedObj[prefix]) {
        groupedObj[prefix] += ` ${point[key]}`;
        //先頭の文字列が prefix と同じプロパティが groupedObj に存在しない場合
      } else {
        groupedObj[prefix] = point[key];
      }
    }
    points[`point${pointIndex[i]}`] = { ...groupedObj };
  }
  console.log(points);

  let text = "points\n";
  for (let props in points) {
    text += "\t" + props + "\n";
    for (let prop in points[props]) {
      text += "\t" + "\t" + prop + ": " + points[props][prop] + "\n";
    }
  }

  // console.log(points);
  console.log(text);

  return text;
}

function getArcs() {
  const arcElements = document.querySelectorAll("#arc > ul");
  if (!arcElements.length) return;
  const arcs = {};
  // for (let i = 0; i < arcElements.length; i++) {
  //   let arc = {};
  //   const arcInputElements = document.querySelectorAll(
  //     `#arc-${i + 1} input[id]`
  //   );

  //   for (let j = 0; j < arcInputElements.length; j++) {
  //     const input = arcInputElements[j];
  //     const label = input.closest("li").querySelector("label");
  //     const labelValue = label.textContent.replace(":", "").trim();
  //     const inputValue = input.value;

  //     if (!inputValue) {
  //       continue;
  //     }
  //     arc[labelValue] = inputValue;
  //   }
  for (let i = 0; i < arcElements.length; i++) {
    let arc = {};
    let arcInputElements = document.querySelectorAll(
      `#arc-${arcIndex[i]} input[id]`
    );
    // console.log(arcIndex[i]);
    // console.log(arcElements);
    // console.log(arcElements.length);
    // console.log(arcInputElements);
    // console.log(arcInputElements.length);

    for (let j = 0; j < arcInputElements.length; j++) {
      const input = arcInputElements[j];
      const labelValue = input.previousElementSibling.textContent
        .replace(":", "")
        .trim();
      let inputValue = input.value;
      // console.log(input);
      // console.log(labelValue);
      // console.log(inputValue);

      if (!inputValue) {
        continue;
      }
      if (labelValue.endsWith("_block")) {
        if (inputValue >= 0) {
          inputValue = `+ ${inputValue} b`;
        } else {
          inputValue = `- ${String(inputValue).slice(1)} b`;
        }
      }
      if (labelValue.endsWith("_miniblock")) {
        if (inputValue >= 0) {
          inputValue = `+ ${inputValue} mb`;
        } else {
          inputValue = `- ${String(inputValue).slice(1)} mb`;
        }
      }
      arc[labelValue] = inputValue;
    }
    const groupedObj = {};

    for (const key in arc) {
      const prefix = key.split("_")[0];
      //先頭の文字列が prefix と同じプロパティが既に groupedObj に存在する場合
      if (groupedObj[prefix]) {
        groupedObj[prefix] += ` ${arc[key]}`;
        //先頭の文字列が prefix と同じプロパティが groupedObj に存在しない場合
      } else {
        groupedObj[prefix] = arc[key];
      }
    }
    console.log(groupedObj);

    arcs[`arc${arcIndex[i]}`] = { ...groupedObj };
  }

  let text = "arcs\n";
  for (let props in arcs) {
    text += "\t" + props + "\n";
    for (let prop in arcs[props]) {
      text += "\t" + "\t" + prop + ": " + arcs[props][prop] + "\n";
    }
  }

  // console.log(arcs);
  console.log(text);

  return text;
}

//textを出力する//

function save() {
  const filename = "data.txt";
  const gettext = () => {
    let text;
    let objectText = getObject();
    let pointText = getPoints();
    let arcText = getArcs();
    if (!pointText && !arcText) {
      text = objectText;
      return text;
    }
    if (!pointText) {
      text = objectText + "\n" + arcText;
      return text;
    }
    if (!arcText) {
      text = objectText + "\n" + pointText;
      return text;
    }
    text = objectText + "\n" + pointText + "\n" + arcText;
    return text;
  };
  const text = gettext();
  console.log(text);
  let file = new Blob([text], { type: "text/plain" });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
}

//Command+Enterキーでファイル出力//

// Set up an object to track the current state of each key
let keyCommand = false;
let keyEnter = false;

function debounce(func, delay, immediate) {
  let timerId;
  return function () {
    const context = this;
    const args = arguments;
    const callNow = immediate && !timerId;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      timerId = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }, delay);
    if (callNow) {
      func.apply(context, args);
    }
  };
}
// Define your key press handler
function handleKeyPress() {
  if (keyCommand) {
    if (keyEnter) {
      // Do something when both keys are pressed simultaneously
      debouncedSave();

      // console.log("multiple");
      // console.log(`keyCommand:${keyCommand}`);
      // console.log(`keyEnter:${keyEnter}`);
      keyCommand = false;
      keyEnter = false;
    }
  }
}
const debouncedSave = debounce(save, 2000, true);

// Add event listeners to track the state of each key
document.addEventListener("keydown", (event) => {
  if (event.key === "Meta") {
    keyCommand = true;
  }
  if (event.key === "Enter") {
    keyEnter = true;
  }
  // console.log(event.key);
  // console.log(`keyCommand:${keyCommand}`);
  // console.log(`keyEnter:${keyEnter}`);
  handleKeyPress();
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Meta") {
    keyCommand = false;
    keyEnter = false;
  }
  if (event.key === "Enter") {
    keyCommand = false;
    keyEnter = false;
  }
  // console.log(`keyCommand:${keyCommand}`);
  // console.log(`keyEnter:${keyEnter}`);
});
