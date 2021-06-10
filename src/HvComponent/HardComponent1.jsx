import React from 'react';

function HardComponent1(props) {


    return (
        <div>
            <ul>
                {
                    props.todoList.map((n)=>(
                        <li key={n.id} className="todoList">
                            <img className="image" src={n.image} alt='Smth'/><br/>
                            <h3>{n.day}</h3>
                            <ul>
                                {Object.keys(n.todo).map((f)=>(<li className={n.todo[f]}>{f}</li>))}
                            </ul>

                        </li>
                    ))
                }
            </ul>


        </div>
    );
}

export default HardComponent1;
