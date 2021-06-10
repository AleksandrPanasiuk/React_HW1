import React, {PureComponent} from 'react';


export class MediumComponent extends PureComponent {

    render() {
        return (
            <div>
                {
                    this.props.text.map((n)=>(<li key={n.className} className={n.className}><button>{n.text || 'lorem'}</button></li>))
                }
            </div>
        );
    }
}


