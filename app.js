//新しいポイントを追加//

const addPointButton = document.querySelector(".add-point-button");
const pointContainer = document.querySelector("#point");

const addPointProperty = (elementID) => {
  const newUl = document.createElement("ul");
  const newNumber = elementID.querySelectorAll("ul").length + 1;
  const newListText = document.createTextNode("point" + newNumber + " ");
  const newDeleteButton = document.createElement("button");

  newUl.appendChild(newListText);
  newUl.id = `point-${newNumber}`;
  newDeleteButton.textContent = "Delete";
  newDeleteButton.classList.add("delete-button");

  newDeleteButton.addEventListener("click", function () {
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
  </li>
  <li>
  <label for="point-position-x-block-${newNumber}">position-x-block:</label>
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
    >position-x-miniblock:</label
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
  <label for="point-position-y-block-${newNumber}">position-y-block:</label>
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
    >position-y-miniblock:</label
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
};
addPointButton.addEventListener("click", function () {
  addPointProperty(pointContainer);
});

//新しいarcを追加//

const addArcButton = document.querySelector(".add-arc-button");
const arcContainer = document.querySelector("#arc");

const addArcProperty = (elementID) => {
  const newUl = document.createElement("ul");
  const newNumber = elementID.querySelectorAll("ul").length + 1;
  const newListText = document.createTextNode("arc" + newNumber + " ");
  const newDeleteButton = document.createElement("button");

  newUl.appendChild(newListText);
  newUl.id = `arc-${newNumber}`;
  newDeleteButton.textContent = "Delete";
  newDeleteButton.classList.add("delete-button");

  newDeleteButton.addEventListener("click", function () {
    this.closest("ul").remove();
  });
  const inserthtml = `
  <li>
    <label for="arc-name-${newNumber}">name:</label>
    <input type="text" id="arc-name-${newNumber}" name="arc-name-${newNumber}" />
  </li>
  <li>
    <label for="arc-type-${newNumber}">type:</label>
    <input type="text" id="arc-type-${newNumber}" name="arc-type-${newNumber}" list="arc-type-example" />
  </li>
  <li>
  <label for="arc-position-x-block-${newNumber}">position-x-block:</label>
  <input
    type="number"
    min="-20"
    max="20"
    name="arc-position-x-block-${newNumber}"
    id="arc-position-x-block-${newNumber}"
  />
</li>
  <li>
  <label for="arc-position-x-miniblock-${newNumber}"
    >position-x-miniblock:</label
  >
  <input
    type="number"
    min="-20"
    max="20"
    name="arc-position-x-miniblock-${newNumber}"
    id="arc-position-x-miniblock-${newNumber}"
  />
</li>
<li>
  <label for="arc-position-y-block-${newNumber}">position-y-block:</label>
  <input
    type="number"
    min="-20"
    max="20"
    name="arc-position-y-block-${newNumber}"
    id="arc-position-y-block-${newNumber}"
  />
</li>
<li>
  <label for="arc-position-y-miniblock-${newNumber}"
    >position-y-miniblock:</label
  >
  <input
    type="number"
    min="-20"
    max="20"
    name="arc-position-y-miniblock-${newNumber}"
    id="arc-position-y-miniblock-${newNumber}"
  />
</li>
`;
  newUl.appendChild(newDeleteButton);
  newUl.insertAdjacentHTML("beforeend", inserthtml);
  elementID.appendChild(newUl);
};
addArcButton.addEventListener("click", function () {
  addArcProperty(arcContainer);
});

//オブジェクトにinputの値を入れる//

const getButton = document.querySelector("#get");
getButton.addEventListener("click", getArcs);
const getPointButton = document.querySelector("#get-point");
getPointButton.addEventListener("click", getPoints);

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
    const inputValue = input.value;
    if (!inputValue) {
      continue;
    }
    object[labelValue] = inputValue;
  }
  // let text = JSON.stringify(object);
  // text = text.replace(/[{}]/g, "");
  // text = text.replace(/,/g, ",\n");

  let text = objectName + "\n";
  for (let prop in object) {
    text += "\t" + prop + ": " + object[prop] + "\n";
  }

  // console.log(inputElements);
  // console.log(object);
  // console.log(text);
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
    const pointInputElements = document.querySelectorAll(
      `#point-${i + 1} input[id]`
    );

    for (let j = 0; j < pointInputElements.length; j++) {
      const input = pointInputElements[j];
      const label = input.closest("li").querySelector("label");
      const labelValue = label.textContent.replace(":", "").trim();
      const inputValue = input.value;
      // console.log(input);
      // console.log(label);
      // console.log(labelValue);
      // console.log(inputValue);

      if (!inputValue) {
        continue;
      }
      point[labelValue] = inputValue;
    }
    points[`point${i + 1}`] = { ...point };
  }

  let text = "points\n";
  for (let props in points) {
    text += "\t" + props + "\n";
    for (let prop in points[props]) {
      text += "\t" + "\t" + prop + ": " + points[props][prop] + "\n";
    }
  }

  // console.log(points);
  // console.log(text);

  return text;
}

function getArcs() {
  const arcElements = document.querySelectorAll("#arc > ul");
  if (!arcElements.length) return;
  const arcs = {};
  for (let i = 0; i < arcElements.length; i++) {
    let arc = {};
    const arcInputElements = document.querySelectorAll(
      `#arc-${i + 1} input[id]`
    );

    for (let j = 0; j < arcInputElements.length; j++) {
      const input = arcInputElements[j];
      const label = input.closest("li").querySelector("label");
      const labelValue = label.textContent.replace(":", "").trim();
      const inputValue = input.value;

      if (!inputValue) {
        continue;
      }
      arc[labelValue] = inputValue;
    }
    arcs[`arc${i + 1}`] = { ...arc };
  }

  let text = "arcs\n";
  for (let props in arcs) {
    text += "\t" + props + "\n";
    for (let prop in arcs[props]) {
      text += "\t" + "\t" + prop + ": " + arcs[props][prop] + "\n";
    }
  }

  console.log(arcs);
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

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     save();
//   }
// });

// Create an object to keep track of which keys are currently pressed
const keysPressed = {};

// Add event listeners for the keydown and keyup events
document.addEventListener("keydown", (event) => {
  keysPressed[event.key] = true;
  // console.log(event.key + "key pressed");
  handleKeys();
});

document.addEventListener("keyup", (event) => {
  keysPressed[event.key] = false;
  // console.log(event.key + "released");
  handleKeys();
});

// Define a function to handle the state of the keys
function handleKeys() {
  // Check if the keys you want to control simultaneously are pressed
  if (keysPressed["Meta"] && keysPressed["Enter"]) {
    // Do something when all three keys are pressed simultaneously
    save();
  }
}
