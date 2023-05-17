import React from 'react'
import logo from '../public/logo.svg';
import { Title } from '@mantine/core';
import Image from "next/image";

const Logo = () => {

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: "space-between",  height: "84px", marginLeft: 'calc(11.25vw)', marginTop: "27px" }}>
                <Image
                    src={logo}
                    alt={"Logo"}
                    width={30}
                    height={30}
                />
                <Title weight={600} size={24} style={{ marginLeft: "12px", fontFamily: "Poppins", fontWeight: 600, fontSize: "24px", lineHeight: "36px", letterSpacing: "-0.02em", color: "#232134" }}>Jobored</Title>
            </div>
        </div>
    )
}

export default Logo