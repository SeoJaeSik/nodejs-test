function Mybutton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onclick:()=> setIsClicked(true)},
        isClicked ? 'Clicked!' : 'Click here!'
    )

}

const domContainer = document.querySelector("#root");
ReactDom.render(React.createElement(Mybutton), domContainer);