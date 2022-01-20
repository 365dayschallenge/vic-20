import './App.css';

function App() {
  
  var enterButton = document.getElementById("enter");
  var input = document.getElementById("userInput");
  var ul = document.querySelector("ul");
  var item = document.getElementsByTagName("li");

  function inputLength() {
    return input.value.length;
  }

  function listLength() {
    return item.length;
  }

  function createListElement() {
    var li = document.createElement("li"); // creates an element "li"
    li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
    ul.appendChild(li); //adds li to ul
    input.value = ""; //Reset text input field

    //START STRIKETHROUGH
    // because it's in the function, it only adds it for new items
    function crossOut() {
      li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);
    //END STRIKETHROUGH

    // START ADD DELETE BUTTON
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
    // END ADD DELETE BUTTON

    //ADD CLASS DELETE (DISPLAY: NONE)
    function deleteListItem() {
      li.classList.add("delete");
    }
    //END ADD CLASS DELETE
  }

  function addListAfterClick() {
    if (inputLength() > 0) {
      //makes sure that an empty input field doesn't create a li
      createListElement();
    }
  }

  function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
      //this now looks to see if you hit "enter"/"return"
      //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
      createListElement();
    }
  }

  enterButton.addEventListener("click", addListAfterClick);

  input.addEventListener("keypress", addListAfterKeypress);


  return (
   <div class="container">
		<div class="row">
			<div class="intro col-12">
				<h1>Work To-Dos</h1>
				<div>
					<div class="border1"></div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="helpText col-12">
				<p id="first">Enter text into the input field to add items to your list.</p>
				<p id="second">Click the item to mark it as complete.</p>
				<p id="third">Click the "X" to remove the item from your list.</p>
			</div>
		</div>

		<div class="row">
			<div class="col-12">
				<input id="userInput" type="text" placeholder="New item..." maxlength="27"/>
				<button id="enter"><i class="fas fa-pencil-alt"></i></button>
			</div>
		</div>

		<div class="row">
			<div class="listItems col-12">
				<ul class="col-12 offset-0 col-sm-8 offset-sm-2">
				</ul>
			</div>
		</div>

	</div>
  );
}

export default App;
