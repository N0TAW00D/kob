'use client'

import { useState } from "react"

export default function Checkbox() {
    const [javaChecked, setJavaChecked] = useState(false);
    const [phpChecked, setPhpChecked] = useState(false);
    const [csChecked, setCsChecked] = useState(false);

    {/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */}
    const handleJavaChecked = (e: any) => setJavaChecked(e.target.checked);
    {/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */}
    const handlePhpChecked = (e: any) => setPhpChecked(e.target.checked);
    {/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */}
    const handleCsChecked = (e: any) => setCsChecked(e.target.checked);

    return (
        <>
            <input type="checkbox" checked = {javaChecked} onChange={handleJavaChecked} />{" "}
            JAVA
            <input type="checkbox" checked = {phpChecked} onChange={handlePhpChecked} />{" "}
            PHP
            <input type="checkbox" checked = {csChecked} onChange={handleCsChecked} />{" "}
            C#

            <div>Your selected items.</div>
            <div>Java checked {javaChecked.toString()}</div>
            <div>php checked {phpChecked.toString()}</div>
            <div>C# checked {csChecked.toString()}</div>
        </>
    )
}