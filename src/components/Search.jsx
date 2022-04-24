import {Button} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

function Search() {
    return <div>
        <label>
            <div className="fs-2">Find the product which is needed here</div>
            <input style={{
                width: "100%",
                borderRadius: '15px',
                borderColor: 'aliceblue',
                padding: '25px'
            }} />
        </label>

        <Button className="mt-3 p-3 m-lg-2">Search</Button>
    </div>
}


export default Search;