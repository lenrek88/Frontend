import './App.css';


function Registration() {
    return (
        <div className="LoginForm">
            <h1>RegistrationForm</h1>
            <form>
                <input className="inputText" type="text" placeHolder="Username"></input>
                <input className="inputText" type="text" placeHolder="Password"></input>
                <button className="buttonLogin">REGISTRATION</button>
            </form>
        </div>
    )
}

function Login() {
    return (
        <div className="LoginForm">
            <h1>Login Form</h1>
            <form>
                <input className="inputText" type="text" placeHolder="Username"></input>
                <input className="inputText" type="text" placeHolder="Password"></input>
                <button className="buttonLogin">LOGIN</button>
            </form>
        </div>
    )
}


function App() {
  return (
    <div className="app">
        {true ? <Registration></Registration> : <Login></Login>}
    </div>
  );
}

export default App;
