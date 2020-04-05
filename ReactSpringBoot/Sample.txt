# First React Code

HTML:

<div id="app">
</div>


CSS:

.person {
  display: inline-block;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  width: 20%;
  height: 20%;
  padding: 40px;
  margin: 10px;
}

JS(Babel):

function Person(props) {
  return (
    <div className="person">
      <h1>Name : {props.name}</h1>
      <p>Designation : {props.designation} </p>
    </div>
  );
}

var app = (
  <div>
    <Person name="Satish" designation="Senior System Analyst" />
    <Person name="Ramesh" designation="Principal Consultant" />
  </div>
);
ReactDOM.render(app, document.querySelector("#app"));

