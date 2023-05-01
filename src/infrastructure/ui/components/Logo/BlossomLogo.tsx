import { Avatar, Grow } from "@mui/material";
import { SxProps } from "@mui/system";
import Image from "next/image";
import logoFile from "public/images/logo.jpg";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function Logo() {
    const [isLogoInView, setIsLogoInView] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        setIsLogoInView(inView);
    }, [inView]);

    return (
        <Grow in={isLogoInView} timeout={1000} ref={ref}>
            <Avatar sx={sxLogo}>
                <Image src={logoFile} alt="blossom" fill />
            </Avatar>
        </Grow>
    );
}

const sxLogo: SxProps = {
    borderRadius: "50%",
    width: "185px",
    height: "185px",
};
