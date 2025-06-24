
function customRender(reactElement,container){
    /*
    const domElement = document.createElement(reactElement.type) // khali container
    // inner element injection
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href ) //setting the attribute
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement) // container mei append kar diya domElememnt
    */

    // upar wale code ka loop based code hai ab niche

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    // for in loop to set the attributes
    for (const prop in reactElement.props){
        if(prop === 'children') continue // agar props k andar hi childeren de diya hota toh

        domElement.setAttribute(prop, reactElement.props[prop])// sare attributes khud se ek hi baar mei set ho jaynege
    }
    container.appendChild(domElement)
}

// creating a recatElement 
const reactElement={
    type:'a',// type--> a , p , h1, h2 , h3....
    props :{ // props --> properties
        href :'https://google.com',
        target: '_blank'
    },
    children : 'Click me to visit Google'
}
const mainContainer=document.querySelector('#root')

// // now to render ---->  kya inject karu (reactElement)and kahan pe inject karu(mainContainer)
 customRender(reactElement, mainContainer)