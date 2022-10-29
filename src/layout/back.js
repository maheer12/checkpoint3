import react,{Component}from ' react';

class back extends Component{
    constructor (props){
        super(props);
    }
    render (){
        return(
            <react.fragment>
            <h1>header2</h1>
            {this.props.children}
            <h1>footer2</h1>
            </react.fragment>
        )
    }
}
export default back ; 