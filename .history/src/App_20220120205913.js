import './App.scss';

function App() {
  return (
    <main>
	<h1>To Do List</h1>
	<section id="to-do-app">
		<input id="new-todo" placeholder="What needs to be done?" />
		<div class="todos">
			<ul id="todos">
				<li>
					<input id="checkbox-1" type="checkbox"/>
					<label for="checkbox-1">Dalgona Coffee Challenge<span class="box"></span></label>
				</li>
				<li>
					<input id="checkbox-2" type="checkbox"/>
					<label for="checkbox-2">Read a book<span class="box"></span></label>
				</li>
				<li>
					<input id="checkbox-3" type="checkbox"/>
					<label for="checkbox-3">Spring cleaning<span class="box"></span></label>
				</li>
				<li>
					<input id="checkbox-4" type="checkbox"/>
					<label for="checkbox-4">YouTube workout<span class="box"></span></label>
				</li>
				<li>
					<input id="checkbox-5" type="checkbox"/>
					<label for="checkbox-5">Jackbox Party with friends<span class="box"></span></label>
				</li>
				<li>
					<input id="checkbox-6" type="checkbox"/>
					<label for="checkbox-6">Netflix binge<span class="box"></span></label>
				</li>
				<li>
					<input id="checkbox-7" type="checkbox"/>
					<label for="checkbox-7">Make a Wilson<span class="box"></span></label>
				</li>
				<li>
					<input id="checkbox-8" type="checkbox"/>
					<label for="checkbox-8">Try a new recipe<span class="box"></span></label>
				</li>
			</ul>
		</div>
	</section>


	<aside class="pointer">
		<p></p>

	</aside>
</main>
  );
}

export default App;
