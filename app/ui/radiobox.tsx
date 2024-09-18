/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from "react";

export default function RadioBox() {
    const [gender, setGender] = useState("Male");

    const handleChangeGender = (e: any) => {
        setGender(e.target.value);
    }

    return (
        <>
            <input type="radio" onChange={handleChangeGender} checked={gender == "Male"} value="Male" name="gender" />{" "}ชาย
            <input type="radio" onChange={handleChangeGender} checked={gender === "Female"} value="Female" name="gender" />{" "}หญิง
            <div>สิ่งที่คุณเลือกคือ {gender}</div>
        </>
    );
}