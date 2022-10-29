import react,{Component}from ' react';

class front extends Component{
    constructor (props){
        super(props);
    }
    render (){
        return(
            <react.fragment>
            <h1>header1</h1>
              {this.props.children}
            <h1>footer1</h1>
            </react.fragment>
        )
    }
}
export default front ; 