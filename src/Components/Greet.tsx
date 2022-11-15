type GreetFunction = {
    name: string;
    mobile: number;
    isLoggedIn: boolean
}


const Greet = (props: GreetFunction) => {
    return <div>{props.isLoggedIn?`Hello ${props.name}!<br/>${props.mobile}`: "Welcome Guest!" }</div>
}

export default Greet;