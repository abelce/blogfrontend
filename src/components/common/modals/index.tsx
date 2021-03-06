import _ from 'lodash';
import * as React from 'react';
import {Deferred} from '../deferred'

let Single: any;

class Modals extends React.Component {
    state = {
        modals: []
    }

    constructor(props){
        super(props);
        Single = this;
        return Single;
    }

    static show = (component, props) => {
        const key = _.unique('modal');
        const defer = new Deferred();
        const {modals} = Single.state;

        props.onOk = (data) => {
            defer.resolve(data);
            _.remove(modals, m => m.key === key);
            Single.setState({ modals });
        }

        props.onCancel = (data) => {
            defer.reject(data);
            _.remove(modals, m => m.key === key);
            Single.setState({ modals });
        }

        modals.push({key, component, props});
        Single.setState({ modals });
        return defer.promise;
    }

    render() {
        const {modals} = Single.modals;
        return <div>{modals && modals.map(m => <m.component key={m.key} {...m.props}/>)}</div>
    }
}

export default Modals;