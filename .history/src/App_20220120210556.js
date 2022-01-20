import './App.css';

function App() {
  
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
