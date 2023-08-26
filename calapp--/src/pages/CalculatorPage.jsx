
import { useState } from "react"
import { Button } from "../Components/Button";
import { Output } from "../Components/Output";

export const CalculatorPage = () => {

    const [answer, setOuput] = useState("");

    const calculate = (op) => {

        if (op === '=') {
            setOuput(eval(expression));
        }
        else if (op === 'AC'){
            setOuput("");
        }
        else {
            setOuput(answer + op)
        }
    }
        
    const expression = answer;
    console.log("Expression :", expression);

    return (
        <>
        <Output className="alert alert-success" value={answer}/>
        <br/>
        <Button className="gap-2 btn btn-warning" calculate={calculate} op="("/>
        <Button className="btn btn-warning" calculate={calculate} op=")"/>
        <Button className="btn btn-warning" calculate={calculate} op="%"/>
        <Button className="btn btn-warning" calculate={calculate} op="AC"/>
        <br/>
        <Button className="btn btn-secondary" calculate={calculate} op="7"/>
        <Button className="btn btn-secondary" calculate={calculate} op="8"/>
        <Button className="btn btn-secondary" calculate={calculate} op="9"/>
        <Button className="btn btn-success" calculate={calculate} op="/"/>
        <br/>
        <Button className="btn btn-secondary" calculate={calculate} op="4"/>
        <Button className="btn btn-secondary" calculate={calculate} op="5"/>
        <Button className="btn btn-secondary" calculate={calculate} op="6"/>
        <Button className="btn btn-success" calculate={calculate} op="*"/>
        <br/>
        <Button className="btn btn-secondary" calculate={calculate} op="1"/>
        <Button className="btn btn-secondary" calculate={calculate} op="2"/>
        <Button className="btn btn-secondary" calculate={calculate} op="3"/>
        <Button className="btn btn-success" calculate={calculate} op="-"/>
        <br/>
        <Button className="btn btn-secondary" calculate={calculate} op="0"/>
        <Button className="btn btn-secondary" calculate={calculate} op="."/>
        <Button className="btn btn-primary" calculate={calculate} op="="/>
        <Button className="btn btn-success" calculate={calculate} op="+"/>
        </>
    )
}
export default CalculatorPage;