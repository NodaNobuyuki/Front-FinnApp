type sendJsonProps = {
    name: string;
    email: string;
    password: string;
};

const sendJson = ({ name, email, password }: sendJsonProps) => {
    let jsonconvert = JSON.stringify({name, email, password})
    console.log(jsonconvert)
};
JSON.stringify

export default sendJson;
