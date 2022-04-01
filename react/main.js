// Component
const Hello = (props) => {
    return (
      <div className="heading" style={{color: props.color}}>
        <h1>{props.message}</h1>
        <p>{props.subtitle}</p>
      </div>
    );
  };

  const App = () => {
    return (
      <React.Fragment>
        <Hello message = "Hello React" subtitle = "Enjoy !" color="red"/>
        <Hello message = "Hello React" subtitle = "Enjoy !" color="salmon"/>
        <Hello message = "Hello React" subtitle = "Enjoy !" color="blue" />
      </React.Fragment>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));