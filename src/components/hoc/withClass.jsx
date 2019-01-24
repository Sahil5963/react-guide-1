import React , {Component} from 'react';

// const withClass =  (WrapperComponent,className) => {
//             return (props) =>
//                 <div className={className}>
//                 <WrapperComponent {...props}/>
//                 </div>
// }

const withClass =  (className) => (WrapperComponent) => {

    return class extends Component {

        render() {
            return (
                <div className={className}>
                <WrapperComponent {...this.props}/>
                </div>
            )
        }

    }

}





export default withClass;