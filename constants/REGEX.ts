
const REGEX = ()=> {
    nameRegex: /^(?=.*[A-ZÀ-Ÿ])(?=.*\d)(?=.*[\W_])[A-Za-zÀ-ÿ\d\W_]{8,30}$/;

    emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    passwordRegex: /^(?=.*[A-ZÀ-Ÿ])(?=.*\d)(?=.*[\W_])[A-Za-zÀ-ÿ\d\W_]{8,30}$/;
}
const nameRegex = /^[A-Za-zÀ-ÿ]{2,15}(?: [A-Za-zÀ-ÿ]{2,50})?$/;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordRegex = /^(?=.*[A-ZÀ-Ÿ])(?=.*\d)(?=.*[\W_])[A-Za-zÀ-ÿ\d\W_]{8,30}$/;


export default REGEX 