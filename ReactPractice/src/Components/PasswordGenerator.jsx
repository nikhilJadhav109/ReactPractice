import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {



    const [length, setLength] = useState(8);
    const [number, setNumber] = useState(false);
    const [character, setCharacter] = useState(false);
    const [password, setPassword] = useState("");
    const passwordRef = useRef(null);


    const passswordGenerator = useCallback(() => {

        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (number) str = str + "1234567890";
        if (character) str = str + "!@#$%^&*(){}[]?";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)

            pass = pass + str.charAt(char);
        }
        setPassword(pass);
    }, [length, number, character, setPassword]);

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => { passswordGenerator() }, [length, number, character, passswordGenerator])

    return (
        <>
            <div className="flex flex-col p-3 bg-orange-200 justify-center items-center font-bold rounded-full shadow-2xl">
                <h1 className="text-3xl">PASSWORD GENERATOR</h1>
                <input className="w-6/12 p-3 rounded-3xl m-2 text-3xl text-center"
                    type="text"
                    placeholder="Password"
                    value={password}
                    readOnly
                    ref={passwordRef} />

                <button className="bg-red-300 rounded-full p-4 m-4 w-96  tracking-widest border-double border-4 border-sky-500  hover:scale-105 hover:bg-red-500 transition delay-100 duration-200 ease-in shadow-2xl"
                 onClick={copyPasswordToClipboard}>COPY</button>

                <label className="text-3xl uppercase " htmlFor="length">LENGTH ({length}) <input className="h-6  cursor-pointer " onChange={(e) => setLength(e.target.value)} type="range" value={length} min={8} max={20} name="length" id="length" /></label>

                <div className="flex justify-around p-4 w-6/12">
                    <label className="text-3xl uppercase " htmlFor="number">Number : <input className="h-6 w-6 align-middle"
                        type="checkbox"
                        defaultChecked={number}
                        name="number"
                        id="number"
                        onChange={() => { setNumber((prev) => !prev) }} /></label>
                    <label className="text-3xl uppercase " htmlFor="character">Characters :  <input className="h-6 w-6 "
                        type="checkbox"
                        defaultChecked={character}
                        id="character"
                        onChange={() => { setCharacter((prev) => !prev) }}
                    /></label>
                </div>
            </div>
        </>
    );
}
export default PasswordGenerator;